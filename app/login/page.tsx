import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'
import { handler } from '../api/auth/[...nextauth]/route'
import SignIn from '../components/SignIn'

const Login = async () => {
  const session = await getServerSession(handler)

  if(!session){
    return  <SignIn/>
  }
  redirect("/")
}

export default Login