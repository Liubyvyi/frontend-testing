import React from "react"
import Head from "next/head"

export const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>Home</title>
      </Head>

      <div>Home</div>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;

          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
        }
      `}</style>
    </div>
  )
}
