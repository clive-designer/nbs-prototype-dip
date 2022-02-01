import Link from 'next/link';

import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/Home.module.scss';

// Components
import Houseimage from '../components/houseimage/Houseimage';
import Resultcard from '../components/resultcard/Result-card';
import Optioncard from '../components/optioncard/Optioncard';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className="hero">
        house image
      </div>
      <Houseimage />
      <h1>Decision in Principle</h1>
      <hr className="hr-red" />
      <h2>Your result</h2>
      <Resultcard />
      <h3>Did you know could:</h3>
      <Optioncard />
      <h3>Updating your Decision in Principle</h3>
      <p>If something changes - like the amount you&apos;d like to borrow or how long you want to borrow for - you can review and edit your DIP and get a new result.</p>
      <Link href="#">
        <a className="nbs-link">Review and edit your DIP</a>
      </Link>

      <hr />

      <Link href="#">
        <a className="nbs-link">Legal information</a>
      </Link>

      <hr />

      <h2>Next steps</h2>
      <h3>Ready to apply for a mortgage?</h3>
      <p>That&apos;s great! Head over to your mortgage dashboard where you can complete your application in your own time.</p>

      <Link href="/access-dashboard">
        <a className="nbs-btn-primary">Access mortgage dashboard</a>
      </Link>

      <h3>If you&apos;re still looking for a new home</h3>
      <p>Use your DIP certificate to view properties and put in offers.</p>
      <p>Once you&apos;ve had an offer accepted, you&apos;ll be ready to start your mortgage application in your mortgage dashboard. You can get to your dashboard at any time using the link in your confirmation email.</p>
  </div>
  )
}
