import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <header>
      <div className="logo">
        <h1>School Name</h1>
      </div>
      <nav>
        <Link href={"/login"}>Login</Link>
        <Link href={"/register"}>Register</Link>
      </nav>
    </header>
  )
}
