import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useSession} from "next-auth/react"
import Link from 'next/link'
import NavBar from './navbarTest'
import Footer from './footer'



const inter = Inter({ subsets: ['latin'] })

export default function Profile(){
    return(
        <>

        <NavBar/>
        <div className='absolute w-full h-full'>
            <Image
              src={require('../../public/./Images/Dragon.jpg')}
              alt="Icon"
              className="Background-image"
              fill
            />
        </div>
        <div className="drawer"> 
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
        <div className="drawer-content flex flex-col">
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

            <Footer/>
        </>
 )

}