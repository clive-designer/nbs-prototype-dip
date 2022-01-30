import { useUser } from '@auth0/nextjs-auth0';

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const { user, error, isLoading } = useUser();

  console.log(user);

  if(isLoading) return <div>... Loading</div>
  if(error) return <div>{error.message}</div>

  if(user) {
    return (
      <div>
        <h1>Hi {user.email}</h1>
        <a href="/api/auth/logout">Log me out</a>
      </div>
    )
  }

  return <a href="/api/auth/login">Login</a>

}
