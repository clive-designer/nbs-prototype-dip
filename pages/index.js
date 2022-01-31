import Link from 'next/link';

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div>
      <h1>Decision in Principle</h1>
      <h2>Your result</h2>
      <p>Good news Jamie, we could lend you:</p>
      <h3>£200,000 over 31 years 2 months</h3>      
      <Link href="/access-dashboard">
        <a>Access your mortgage dashboard</a>
      </Link>
  </div>
  )
}
