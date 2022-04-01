import React from 'react'
import Head from 'next/head';
import Login from './Login';

const index = () => {
  return (
    <>
      <Head>
        <title>Airgate Admin Portal</title>
        <meta name="description" content="Airgate Admin Portal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Login />
      </main>
    </>
  )
}

export default index