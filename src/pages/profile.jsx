
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useSession} from "next-auth/react"
import Link from 'next/link'



const inter = Inter({ subsets: ['latin'] })

export default function Profile(){
    return(
        <>
        <div className='absolute'>
            <Image
              src={require('../../public/./Images/Dragon.jpg')}
              alt="Icon"
              className="Background-image"
            />
        </div>
        <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
        <div className="drawer-content flex flex-col">
            
            <div className="w-full navbar bg-base-300">
            <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
            </div> 
            <div className="flex-1 px-2 mx-2 text-4xl font-bold">SmashBell-Profile</div>
            <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal">
                
                <Link href="/"  className="btn btn-primary">Log out</Link> 
                </ul>
            </div>
            </div>
            <br />
            <center>
            <div className='mx-10'>
            <div className="card w-128 bg-gray-800 shadow-xl ">
                <figure className="px-10 pt-10">
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <Image src={require('../../public/Images/Olimar.jpg')} />
                        </div>
                    </div>  
                </figure>
               <div className="card-body items-center text-center">
                    <h2 className="card-title">Omar Contreras</h2>
                    <p>El mas honesto, el heroe de todos los niños</p>
                    <div tabIndex={0} className="collapse-open border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            Edit profile
                        </div>
                        <div className=" collapse-content ">
                            <div>
                                <input type="text" placeholder="New name" className="input input-bordered
                                 input-info w-full max-w-xs " />
                                <input type="text" placeholder="New description" className="mt-3 
                                input input-bordered input-info w-full max-w-xs " />
                                <br/>
                                <br/>
                                <h1 className='font-bold'>Seleccione la foto a la que quiere cambiar</h1>
                                <input type="file" className="mt-3 file-input file-input-bordered 
                                file-input-primary w-full max-w-xs" />
                                <button className="mt-4 relative flex w-full btn btn-primary">Save</button>
                            </div>

                        </div>
                    </div>
                </div>
                </div>

                </div>
                </center>
            </div> 
            
            
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
                <ul className="menu p-4 w-80 bg-base-100">
                
                <li><a>Sidebar Item 1</a></li>
                <li><a>Sidebar Item 2</a></li>
                
                </ul>
                
            </div>
            </div>

            <div>


            </div>
            
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