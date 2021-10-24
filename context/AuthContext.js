import { createContext, useMemo, useReducer } from 'react'
import { useRouter } from 'next/router'
import { getAuth, signOut } from 'firebase/auth'
import propTypes from 'prop-types'

export const AuthContext = createContext({})

const initialState = {
  user: undefined,
  loading: true
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'login': {
      return {
        user: action.payload,
        loading: false
      }
    }
    case 'logout': {
      signOut(getAuth())
      return { auth: undefined, loading: false }
    }
    case 'load': {
      return { ...state, loading: false }
    }
    default:
      return state
  }
}

export default function AuthContextProvider({ children }) {
  const router = useRouter()
  const [state, dispatch] = useReducer(reducer, initialState)

  const { user, loading } = state

  // useEffect(() => {
  //   getUser((user) => {
  //     if (user) {
  //       return login(user)
  //     }
  //   })
  //   load()
  // }, [])

  // const load = () => dispatch({ type: 'load' })

  const login = (user) => {
    dispatch({ type: 'login', payload: user })
    router.push('/dashboard')
  }

  const logout = () => {
    dispatch({ type: 'logout' })
    router.push('/')
  }

  const authData = useMemo(
    () => ({
      user,
      loading,
      login,
      logout
    }),
    [user, loading]
  )

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  )
}

AuthContextProvider.propTypes = {
  children: propTypes.element
}
