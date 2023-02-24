import { LockClosedIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { signIn, signOut } from "next-auth/react"
import { useFormik } from 'formik'
import Link from 'next/link'
import Head from 'next/head'
import login_validate from '@/lib/validate'

export default function Login(){ 

  const formik = useFormik({
    initialValues:{
      email:'',
      password:''
    },
    validate: login_validate,
    onSubmit
  })
  
 
  async function onSubmit(values){console.log(values)}

  async function handleGoogleSignIn(){
    signIn('google', {callbackUrl: "http://localhost:3000"})
  }

  async function handleTwitchSignIn(){
    signIn('twitch', {callbackUrl: "http://localhost:3000"})
  }


  return(
    <>   
    <Head>
    <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Smash Bell</a>
        </div>
    </div>
      </Head>  
      <div className=" mt-10 flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">       
        {/*Aqui esta la imagen del fondo*/}
         <div className='absolute'>
            <Image
              src={require('../../public/./Images/Dragon.jpg')}
              alt="Icon"
              className="Background-image w-full"
            />
          </div>    
        <div className="max-w-md space-y-8 shadow-xl px-6 py-6 rounded-xl">
      <div className='z-10'>
        {/*Esta seccion es para el titulo y el logo */}
    <div className='relative bg-white p-10 rounded-md' >
      <div className='z-20'>
        <Image src={require('../../public/CampanaLogo.png')} alt="Icon" className="mx-auto h-16 w-auto"/>
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900"> Welcome to SmashBell! {/* Texto de bienvenida */} </h2>
          <p className="mt-2 text-center text-sm text-gray-600"> </p>
        {/*Esta seccion es para el titulo y el logo */}
  
  
  
        {/*Esta seccion son los inputs para el mail y el password */}
          <form className="mt-8 space-y-6" method='POST' onSubmit={formik.handleSubmit} >
            <input type="hidden" name="remember" defaultValue="true" />
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                  Email
                  </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-slate-900 focus:outline-none focus:ring-slate-900 sm:text-sm"
                  placeholder="Email"
                  {...formik.getFieldProps('email')} />
                </div>
                {formik.errors.email && formik.touched.email ? <label className='ml-2 block text-sm text-red-600'>{formik.errors.email}</label>:<></>}
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-slate-900 focus:outline-none focus:ring-slate-900 sm:text-sm"
                      placeholder="Password"
                      {...formik.getFieldProps('password')}/>
                </div>
                {formik.errors.password && formik.touched.password ? <label className='ml-2 block text-sm text-red-600'>{formik.errors.password}</label>:<></>}
              </div>
        {/*Esta seccion son los inputs para el mail y el password */}
  
  
  
        {/*Esta seccion son los botones de remember me, el link para registrar un nuevo usuario*/}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-slate-900 focus:ring-slate-600" />

                  <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-900">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <Link href="/register" className="font-medium text-slate-600 hover:text-slate-500">
                    New in SmashBell?
                  </Link>
                </div>
              </div>
        {/*Esta seccion son los botones de remember me, el link para registrar un nuevo usuario*/}
  
  
  
        {/*Boton de submit*/}
              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent  bg-slate-900 py-2 px-4 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <LockClosedIcon className="h-5 w-5 text-slate-600 group-hover:text-slate-400" aria-hidden="true" />
                  </span>
                    Sign in
                </button>
              </div>
        {/*Boton de submit*/}
              <button onClick={handleGoogleSignIn} type="button" className=" group relative flex w-full justify-center text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                  Sign in with Google
              </button>
              <button onClick={handleTwitchSignIn} type="button" className="group relative flex w-full justify-center focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                <svg className="mr-3 h-5 w-5 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="3"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M21 2H3v16h5v4l4-4h5l4-4V2zM11 11V7M16 11V7" /></svg>
                  Sign in with Twitch</button>
              </form>
            </div> 
          </div>
        </div>
      </div>
    </div>
    
    <footer className="footer absolute p-10 bg-base-300 text-base-content">
        <div>
          <span className="footer-title">Services</span> 
          <a className="link link-hover">Branding</a> 
          <a className="link link-hover">Design</a> 
          <a className="link link-hover">Marketing</a> 
          <a className="link link-hover">Advertisement</a>
        </div> 
        <div>
          <span className="footer-title">Company</span> 
          <a className="link link-hover">About us</a> 
          <a className="link link-hover">Contact</a> 
          <a className="link link-hover">Jobs</a> 
          <a className="link link-hover">Press kit</a>
        </div> 
        <div>
          <span className="footer-title">Social</span> 
          <div className="grid grid-flow-col gap-4">
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
          </div>
        </div>
      </footer>
                
    </>
    )
}