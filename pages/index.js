import Link from 'next/link';

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Resultcard from '../components/Result-card';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className="hero">
        house image
      </div>
      <h1>Decision in Principle</h1>
      <hr className="hr-red" />
      <h2>Your result</h2>
      <Resultcard />
      <Link href="/access-dashboard">
        <a className="nbs-btn-primary">Access mortgage dashboard</a>
      </Link>
  </div>
  )
}
