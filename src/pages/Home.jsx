import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useSession} from "next-auth/react"
import Link from 'next/link'

export default function home(){
    return(
        <>
        <Head>
                {/*AQUI EMPIEZA LA NAVBAR HOME*/}
        <div className="navbar sticky top-0 z-10 bg-base-100">
            <div className="flex-1">
                <a><a><Link href="/Home" className="btn btn-ghost normal-case text-xl">Smash Bell</Link></a></a>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <Image src={require('../../public/./Images/Olimar.jpg')} alt="Icon" className="" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <a><Link href="/profile"  className="justify-between text-white-600 group-hover:text-slate-400">Profile</Link></a>
                        <a><Link href="/"  className="justify-between text-white-600 group-hover:text-slate-400">Log out</Link></a>
                    </ul>
                </div>
            </div>
        </div> 
                {/*AQUI TERMINA LA NAVBAR HOME*/}     
        </Head>
                {/*AQUI EMPIEZA EL HERO PRINCIPAL*/}
        <div  className="hero min-h-screen" >
            <Image src={require('../../public/./Images/Gatito.jpg')} alt="Icon"/>
                <div className="hero-overlay bg-opacity-60"></div>
                    <div className=" text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div> 
                <br/>
                {/*Aqui empieza el tablero de resultados*/}    
                    <div className='flex'>
                        <div className='flex mx-24'>
                        <div className="card card-side bg-base-100 shadow-xl w-128">
                            <figure><Image src={require('../../public/./Images/Auron.jpg')} alt="Icon" className="max-w-sm rounded-lg shadow-2xl w-64" /></figure>
                                <div className="card-body">
                                    <h1 className="card-title">Auron vs Rubius</h1>
                                    <p>Incine and min min</p>
                                    <div className="card-actions justify-end">
                                </div>    
                            </div>
                        <figure><Image src={require('../../public/./Images/Rubius.jpg')} alt="Icon" className="max-w-sm rounded-lg shadow-2xl w-64" /></figure>
                    </div>
                </div>
                <div className='flex mx-24'>
                        <div className="card card-side bg-base-100 shadow-xl w-128">
                            <figure><Image src={require('../../public/./Images/Auron.jpg')} alt="Icon" className="max-w-sm rounded-lg shadow-2xl w-64" /></figure>
                                <div className="card-body">
                                    <h1 className="card-title">Auron vs Rubius</h1>
                                    <p>Incine and min min</p>
                                    <div className="card-actions justify-end">
                                </div>    
                            </div>
                        <figure><Image src={require('../../public/./Images/Rubius.jpg')} alt="Icon" className="max-w-sm rounded-lg shadow-2xl w-64" /></figure>
                    </div>
                </div>
                </div>
                <br/>
                {/*Aqui termina el tablero de resultados*/}

                {/*AQUI TERMINA EL HERO PRINCIPAL*/}   
                {/*AQUI EMPIEZA EL TITULO DE EVENTOS TOP*/}      
                    <h1 className='text-4xl font-bold text-center'>Eventos más destacados</h1>
                        <br/>
                {/*AQUI TERMINA EL TITULO DE EVENTOS TOP*/}      
                {/*AQUI EMPIEZA EL LISTADO DE CARDS*/}   
                        <div className='flex'>
                            <div className='flex mx-12'>
                            <br />
                                <div className="card w-96 glass text-center text-neutral-content">   
                                    <figure><Image src={require('../../public/./Images/cat.jpg')} alt="car!"/></figure>
                                        <div className="card-body">
                                            <h2 className="card-title">Life hack</h2>
                                            <p>How to park your car at your garage?</p>
                                            <div className="card-actions justify-end">
                                                <button className="btn btn-primary">Learn now!</button>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                </div>
                                    <div className='flex mx-12'>
                                    <br />
                                        <div className='container block-line flex'>
                                            <div className="card w-96 glass text-center text-neutral-content">   
                                                <figure><Image src={require('../../public/./Images/Orquesta.jpg')} alt="car!"/></figure>
                                                    <div className="card-body">
                                                        <h2 className="card-title">Life hack</h2>
                                                        <p>How to park your car at your garage?</p>
                                                        <div className="card-actions justify-end">
                                                            <button className="btn btn-primary">Learn now!</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex mx-12'>
                                        <br />
                                            <div className='container block-line flex'>
                                                <div className="card w-96 glass text-center text-neutral-content">   
                                                    <figure><Image src={require('../../public/./Images/Gatodiablo.png')} alt="car!"/></figure>
                                                        <div className="card-body">
                                                            <h2 className="card-title">Life hack</h2>
                                                            <p>How to park your car at your garage?</p>
                                                            <div className="card-actions justify-end">
                                                                <button className="btn btn-primary">Learn now!</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <br/>
                                        <center>
                                            <Link href="/events"  className="btn btn-primary">Todos los eventos</Link>  
                                        </center>
                                        <br />
                {/*AQUI TERMINA EL LISTADO DE CARDS*/}  
                {/*AQUI EMPIEZA EL PIE DE PAGINA*/}
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
            {/*AQUI TERMINA EL PIE DE PAGINA*/}
                                   </>
           )
        }