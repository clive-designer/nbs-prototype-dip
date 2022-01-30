import { useUser } from '@auth0/nextjs-auth0';

import Link from 'next/link';

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
        <h1>Hi {user.email} welcome to DIP</h1>
        <Link href="/api/auth/logout">
          <a>Logout</a>
        </Link>
      </div>
    )
  }

  return (
    <div>
    <Link href="/api/auth/login">
      <a>Login please</a>
    </Link>
  </div>
  )
}
