import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useSession} from "next-auth/react"
import Link from 'next/link'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  

  const {data: session} = useSession();

  return (
    <>
      <Head>
      {/* <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Smash Bell</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
              <Image src={require('../../public/./Images/Olimar.jpg')} alt="Icon" className="" />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div> */}
      </Head>
      
      <main>
      {/* Aqui empieza el carousel*/}
      <div className="carousel w-full"> 
      {/* Aqui empieza la slide 1 */}
        <div id="slide1" className="carousel-item w-full">
        <Image src={require('../../public/./Images/Demon.jpg')} alt="Icon" className="opacity-60 absolute top 0 h-full w-full bg-cover bg-center" />
          <div className="hero min-h-screen">
           <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
             <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Smash Bell</h1>
               <p className="mb-5">Vive cada evento en la pagina más grande de noticias de Smash, crea tu cuenta ahora!
                </p>
               <Link href="/login"  className="btn btn-primary">Login</Link> 
                </div>
                 <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                   <a href="#slide4" className="btn btn-circle">❮</a> 
                   <a href="#slide2" className="btn btn-circle">❯</a>
                  </div>
                </div>
              </div>
            </div> 
          {/* Aqui termina la slide 1 */}
          {/* Aqui empieza la slide 2 */}
          <div id="slide2" className="relative carousel-item w-full "> 
            <Image src={require('../../public/./Images/Mercy.jpg')} alt="Icon" className="opacity-60 absolute top 0 h-full w-full bg-cover bg-center" />
            <div className="hero min-h-screen">
             <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
               <div className="max-w-md">
                 <h1 className="mb-5 text-5xl font-bold">Smash Bell</h1>
                 <p className="mb-5">Vive cada evento en la pagina más grande de noticias de Smash, crea tu cuenta ahora! 
                   </p>
                  </div>
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">❮</a> 
                  <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
               </div>
              </div>
            </div> 
            {/* Aqui termina la slide 2 */}
            {/* Aqui empieza la slide 3 */}
            <div id="slide3" className="carousel-item relative w-full">
            <Image src={require('../../public/./Images/Robot.jpg')} alt="Icon" className=" opacity-60 absolute top 0 h-full w-full bg-cover bg-center" />
            <div className="hero min-h-screen">
               <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                 <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">Smash Bell</h1>
                   <p className="mb-5">Vive cada evento en la pagina más grande de noticias de Smash, crea tu cuenta ahora! 
                    </p>
                   </div>
                  </div>
                 </div>   
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide4" className="btn btn-circle">❯</a>
              </div>
            </div> 
            {/* Aqui termina la slide 3 */}
            {/* Aqui empieza la slide 4 */}
            <div id="slide4" className="carousel-item relative w-full">
            <Image src={require('../../public/./Images/Dva2.jpg')} alt="Icon" className=" opacity-60 absolute top 0 h-full w-full bg-cover bg-center" />
            <div className="hero min-h-screen">
                      <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                          <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Smash Bell</h1>
                            <p className="mb-5">Vive cada evento en la pagina más grande de noticias de Smash, crea tu cuenta ahora! 
                            </p>
                          </div>
                         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                          <a href="#slide3" className="btn btn-circle">❮</a> 
                          <a href="#slide1" className="btn btn-circle">❯</a>
                   </div>
                  </div>
                 </div>
                </div>
              {/* Aqui termina la slide 4 */}
            </div>
            {/* Aqui termina el carousel*/}
            <div className="hero min-h-screen bg-base-100">
              <div className="hero-content flex-col lg:flex-row-reverse">
              <Image src={require('../../public/./Images/Kiriko.jpg')} alt="Icon" className="max-w-sm rounded-lg shadow-2xl w-64" />
                <div>
                  <h1 className="text-5xl font-bold">Box Office News!</h1>
                  <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
      </main>
    </>
  )
}
