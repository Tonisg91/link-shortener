import {
  AuthAction,
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR
} from 'next-firebase-auth'

import Firestore from '../firebase/Firestore'

function Dashboard({ links }) {
  const user = useAuthUser()
  console.log(links)

  return (
    <div>
      <h1>dashboard</h1>
    </div>
  )
}

export const getServerSideProps = withAuthUserTokenSSR({
  whenUnauthed: AuthAction.REDIRECT_TO_LOGIN
})(async (context) => {
  const { AuthUser } = context

  const links = await Firestore.getUserLinks(AuthUser.id)

  return {
    props: { links: JSON.parse(JSON.stringify(links)) }
  }
})

export default withAuthUser()(Dashboard)
