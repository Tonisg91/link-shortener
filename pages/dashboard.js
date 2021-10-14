import {
  AuthAction,
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR
} from 'next-firebase-auth'

import Shortener from '../components/Forms/Shortener'

function Dashboard({ links }) {
  const user = useAuthUser()

  console.log(user)

  return (
    <div>
      <Shortener />
    </div>
  )
}

export const getServerSideProps = withAuthUserTokenSSR({
  whenUnauthed: AuthAction.REDIRECT_TO_LOGIN
})(async (context) => {
  // const { AuthUser } = context
  // const links = await Firestore.getUserLinks(AuthUser.id)
  // return {
  //   props: { links: JSON.parse(JSON.stringify(links)) }
  // }
})

export default withAuthUser()(Dashboard)
