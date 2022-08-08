import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { createClient } from '@supabase/supabase-js'
import { AppContext } from '../context/AppContext'

const SignInForm = () => {
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let { User, setUser } = useContext(AppContext)

  const supabaseUrl = 'https://enbpozxucdfjzrqzgvds.supabase.co'
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVuYnBvenh1Y2RmanpycXpndmRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTkyMjg0NjUsImV4cCI6MTk3NDgwNDQ2NX0.RwxtINpOIcOSKkzqujV8pEfZA0ZkVtxp2P-n_dn3OBE'
  const supabase = createClient(supabaseUrl, supabaseKey)

  const signUserIn = async (e) => {
    e.preventDefault()

    let { returnedUser, error } = await supabase.auth.signIn({
      email,
      password
    })

    if (error) {
      console.log(error)
    }

    if (returnedUser) {
      setUser(returnedUser)
      console.log(User)
    }

    console.log(returnedUser)
  }

  return (
    <div className='bg-brand-primary drop-shadow-lg w-96 h-96 mx-auto my-20 md:my-36 pt-2 flex flex-col text-center text-white rounded-lg dark:text-brand-secondary'>
      <h1 className='text-5xl font-bold my-2'>sign in</h1>
      <p>don't have an account already? <Link to="/signup">create one</Link></p>

      <form className='flex flex-col text-brand-primary'>

        <input className='dark:bg-brand-secondary placeholder:text-brand-primary rounded-lg drop-shadow-lg text-xl my-3 py-2 px-3 w-3/4 mx-auto bg-white outline-none' type="email" id="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />

        <input className='placeholder:text-brand-primary rounded-lg drop-shadow-lg text-xl my-3 py-2 px-3 w-3/4 mx-auto bg-white dark:bg-brand-secondary outline-none' type="password" id="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <p className='text-white dark:text-brand-secondary'>forgot your password? <span>reset it</span></p>

        <button className='bg-white dark:bg-brand-secondary w-2/5 mx-auto my-4 py-2 rounded-lg drop-shadow-lg font-bold text-xl dark:hover:bg-brand-primary hover:bg-brand-primary hover:text-white dark:hover:text-brand-secondary transition-all' onClick={(e) =>  signUserIn(e)}>sign in</button>
      </form>

    </div>
  )
}

export default SignInForm