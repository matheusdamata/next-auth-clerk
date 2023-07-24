import { UserButton, auth } from '@clerk/nextjs'

export default async function Home() {
  const { getToken } = auth()

  const token = await getToken()

  const response = await fetch('http://127.0.0.1:3333/account', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const account = await response.json()

  return <UserButton afterSignOutUrl="/" />
}
