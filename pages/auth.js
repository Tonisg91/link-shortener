import { useEffect, useState } from 'react'
import { AuthAction, withAuthUser } from 'next-firebase-auth'

import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'

const Auth = () => {
  const [renderAuth, setRenderAuth] = useState(false)
  useEffect(() => {
    setRenderAuth(true)
  }, [])

  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(getAuth(), provider).then(console.log)
  }

  return (
    <div>
      <h3>Sign in</h3>
      <button onClick={loginWithGoogle}>login</button>
    </div>
  )
}

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
  whenUnauthedBeforeInit: AuthAction.RETURN_NULL,
  whenUnauthedAfterInit: AuthAction.RENDER
})(Auth)
