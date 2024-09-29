import SnowEffect from '@/components/SnowEffect'
import { SignUp } from '@clerk/nextjs'
import React from 'react'

const SignUpPage = () => {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <SnowEffect />
        <SignUp />
        </main>
  )
}

export default SignUpPage