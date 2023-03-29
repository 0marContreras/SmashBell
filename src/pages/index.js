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
      
      <main>
      {/* Aqui empieza el carousel*/}
      <div className="carousel w-full"> 
      {/* Aqui empieza la slide 1 */}
        <div id="slide1" className="relative carousel-item w-full">
        <Image src={require('../../public/./Images/p1.jpg')} alt="Icon" className="opacity-60 absolute top 0 h-full w-full bg-cover bg-center" />
          <div className="hero min-h-screen">
           <div className="hero-overlay"></div>
            <div className="hero-content text-center text-neutral-content">
             <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Smash Bell</h1>
               <p className="mb-5">Vive cada evento en la pagina más grande de noticias de Smash, crea tu cuenta ahora!
                </p>
               <Link href="/login"  className="btn btn-primary">Login</Link> <Link href="/register"  className="btn btn-primary">Register</Link> 
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
            <Image src={require('../../public/./Images/p2.jpg')} alt="Icon" className="opacity-60 absolute top 0 h-full w-full bg-cover bg-center" />
            <div className="hero min-h-screen">
             <div className="hero-overlay"></div>
              <div className="hero-content text-center text-neutral-content">
               <div className="max-w-md">
                 <h1 className="mb-5 text-5xl font-bold">Smash Bell</h1>
                 <p className="mb-5">Vive cada evento en la pagina más grande de noticias de Smash, crea tu cuenta ahora! 
                   </p>
                   <Link href="#Target1"  className="btn btn-primary">Eventos</Link> 
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
            <Image src={require('../../public/./Images/p3.jpg')} alt="Icon" className=" opacity-60 absolute top 0 h-full w-full bg-cover bg-center" />
            <div className="hero min-h-screen">
               <div className="hero-overlay"></div>
                <div className="hero-content text-center text-neutral-content">
                 <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">Smash Bell</h1>
                   <p className="mb-5">Vive cada evento en la pagina más grande de noticias de Smash, crea tu cuenta ahora! 
                    </p>
                    <Link href="#Target2"  className="btn btn-primary">Eventos</Link> 
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
            <Image src={require('../../public/./Images/evo.webp')} alt="Icon" className=" opacity-60 absolute top 0 h-full w-full bg-cover bg-center" />
            <div className="hero min-h-screen">
                      <div className="hero-overlay"></div>
                        <div className="hero-content text-center text-neutral-content">
                          <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Smash Bell</h1>
                            <p className="mb-5">Vive cada evento en la pagina más grande de noticias de Smash, crea tu cuenta ahora! 
                            </p>
                            <Link href="#Target3"  className="btn btn-primary">Eventos</Link> 
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
            
            <div id='Target1' className="hero min-h-screen bg-base-100"  >
              <div className="hero-content flex-col lg:flex-row-reverse">
              <Image src={require('../../public/./Images/Kiriko.jpg')} alt="Icon" className="max-w-sm rounded-lg shadow-2xl w-64" />
                <div>
                  <h1 className="text-5xl font-bold">Box Office News!</h1>
                  <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
            <div id='Target2' className="hero min-h-screen bg-base-200">
              <div className="hero-content flex-col lg:flex-row">
              <Image src={require('../../public/./Images/Samurai.jpg')} alt="Icon" className="max-w-sm rounded-lg shadow-2xl w-64" />
                <div>
                  <h1 className="text-5xl font-bold">Box Office News!</h1>
                  <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
               </div>
              </div>
              <div id='Target3'  className="hero min-h-screen bg-base-100">
              <div className="hero-content flex-col lg:flex-row-reverse">
              <Image src={require('../../public/./Images/Sombra.png')} alt="Icon" className="max-w-sm rounded-lg shadow-2xl w-64" />
                <div>
                  <h1 className="text-5xl font-bold">Box Office News!</h1>
                  <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
        </main>
        <footer className="footer p-10 bg-base-300 text-base-content">
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
