import { LockClosedIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'


export default function Login(){ return(
    <>
  
      <div className=" mt-10 flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 shadow-xl px-6 py-6 rounded-xl">
  
  
        {/*Esta seccion es para el titulo y el logo */}
          <div>
            
            <Image
            src={require('../../../public/CampanaLogo.png')}
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
          <form className="mt-8 space-y-6" method='POST' action='#' >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Username
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="text"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-slate-900 focus:outline-none focus:ring-slate-900 sm:text-sm"
                  placeholder="Username"
                  
                  
                  
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
                  
                  
                />
              </div>
            </div>
            {/*Esta seccion son los inputs para el mail y el password */}
  
  
  
            {/*Esta seccion son los botones de remember me, el link para registrar un nuevo usuario*/}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-slate-900 focus:ring-slate-600"
                />

                <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-900">
                  Remember me
                </label>
              </div>
  
              <div className="text-sm">
                <a href="#" className="font-medium text-slate-600 hover:text-slate-500">
                  New in SmashBell?
                </a>
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
                Sign in
              </button>
            </div>
            {/*Boton de submit*/}
  
          </form>
        </div>
      </div>
    </>
    )
}