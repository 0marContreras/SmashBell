
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useSession} from "next-auth/react"
import Link from 'next/link'

export default function Event(){
    return(
        <>
        <Head>
        <div className="navbar bg-base-100">
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
        </div> 
      </Head>        
     </>

    )
    
}