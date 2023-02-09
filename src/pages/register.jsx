import { LockClosedIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import { signIn, signOut } from "next-auth/react"
import { useFormik } from 'formik'
import axios from 'axios'


export default function Login(){ 

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.post('http://localhost:3000/register', values);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
  });
  
  async function onSubmit(values){console.log(values)}

  async function handleGoogleSignIn(){
    signIn('google', {callbackUrl: "http://localhost:3000"})
  }


  return(
    <>
  
      <div className=" mt-10 flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 shadow-xl px-6 py-6 rounded-xl">
  
  
        {/*Esta seccion es para el titulo y el logo */}
          <div>
            
            <Image
            src={require('../../public/CampanaLogo.png')}
            alt="Icon"
            className="mx-auto h-16 w-auto"
            />
           
            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
              Welcome to SmashBell! {/* Texto de bienvenida */}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
            </p>
          </div>
        {/*Esta seccion es para el titulo y el logo */}
  
  
  
          {/*Esta seccion son los inputs para el mail y el password */}
          <form className="mt-8 space-y-6" method='POST' onSubmit={formik.handleSubmit} >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">

            <div>
                <label htmlFor="email-address" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-slate-900 focus:outline-none focus:ring-slate-900 sm:text-sm"
                  placeholder="Username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  
                  
                />
              </div>

              <div>
                <label htmlFor="email-address" className="sr-only">
                  Username
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-slate-900 focus:outline-none focus:ring-slate-900 sm:text-sm"
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
        
                  
                />
              </div>
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
                  value={formik.values.password}
                  onChange={formik.handleChange}
        
                  
                />
              </div>
              
            </div>
            {/*Esta seccion son los inputs para el mail y el password */}
  
  
  
            {/*Esta seccion son los botones de remember me, el link para registrar un nuevo usuario*/}
            <div className="flex items-center justify-center">
              <div className="flex items-center">
               
                
              </div>
  
              <div className="text-sm">
                <Link href="/login" className="font-medium text-slate-600 hover:text-slate-500">
                  Already registered?
                </Link>
              </div>
            </div>
            {/*Esta seccion son los botones de remember me, el link para registrar un nuevo usuario*/}
  
  
  
            {/*Boton de submit*/}
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent  bg-slate-900 py-2 px-4 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-slate-600 group-hover:text-slate-400" aria-hidden="true" />
                </span>
                Register
              </button>
            </div>
            {/*Boton de submit*/}
            <button onClick={handleGoogleSignIn} type="button" className=" group relative flex w-full justify-center text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
            <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
             Register with Google
            </button>
  
          </form>
        </div>
      </div>
    </>
    )
}