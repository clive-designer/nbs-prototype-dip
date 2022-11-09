import React from "react";
import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';

import styles from './Access-dashboard.module.scss';

import accessPageContent from "../api/accessPageContent";
import IconList from "../../components/iconList/IconList";
import Memberbanner from "../../components/memberbanner/Memberbanner";

const AccessDashboard = () => {
  const { user, error, isLoading } = useUser();

  console.log(user);

  if (isLoading) return <div>... Loading</div>
  if (error) return <div>{error.message}</div>

  if (user) {
    return (
      <div>
        <h1>Hi {user.email}</h1>

        <Link href="/api/auth/logout">
          <a>Logout</a>
        </Link>
        <p>Or</p>

        <Link href="/dashboard/">
          <a>Go to your dashboard</a>
        </Link>
      </div>
    )
  }

  return (
    <div className={styles.accessDashboardContainer}>
      <h1>{accessPageContent.h1}</h1>
      <hr className="hr-red" />
      <p className="p-lead">{accessPageContent.bodyContent.paraLead}</p>
      <IconList />
      <h2 className="h2-cabernet">{accessPageContent.h2}</h2>
      <p>{accessPageContent.bodyContent.paraBody}</p>
      <p className="p-small">{accessPageContent.bodyContent.paraSmall}</p>


      <Link href="/dashboard/">
        <a className="nbs-btn-primary">Access your mortgage hub</a>
      </Link>

      <hr />

      <Memberbanner />

    </div>
  )
}

export default AccessDashboard;