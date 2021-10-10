import { onAuthStateChanged } from '@firebase/auth'
import { createContext, useEffect, useMemo, useReducer } from 'react'
import { getUser } from '../firebase/Auth'

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
  const [state, dispatch] = useReducer(reducer, initialState)

  const { user, loading } = state

  useEffect(() => {
    getUser((user) => {
      if (user) {
        return login(user)
      }
    })
    load()
  }, [])

  const load = () => dispatch({ type: 'load' })

  const login = (user) => {
    dispatch({ type: 'login', payload: user })
  }

  const logout = () => {
    dispatch({ type: 'logout' })
  }

  const authData = useMemo(
    () => ({
      user,
      loading,
      login,
      logout
    }),
    [state]
  )

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  )
}