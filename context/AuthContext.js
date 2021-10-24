import { createContext, useEffect, useMemo, useReducer } from 'react'
import { useRouter } from 'next/router'
import propTypes from 'prop-types'
import jwt from 'jsonwebtoken'

const localStorageKey = '@link-user'

export const AuthContext = createContext({})

const initialState = {
  user: undefined,
  loading: true
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'login': {
      window.localStorage.setItem(localStorageKey, action.payload.token)
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
  const router = useRouter()
  const [state, dispatch] = useReducer(reducer, initialState)

  const { user, loading } = state

  useEffect(() => {
    const token = window.localStorage.getItem(localStorageKey)

    if (token) {
      return loadUser({ ...jwt.decode(token), token })
    }
    logout()
  }, [])

  const loadUser = (data) => {
    dispatch({ type: 'login', payload: data })
  }

  const login = (data) => {
    dispatch({ type: 'login', payload: data })
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
