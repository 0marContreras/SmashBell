import Link from 'next/link'
import Image from 'next/image'
import { signOut } from 'next-auth/react';

export default function NavBarD(){

    async function handleOut(){
        const res = await fetch('/api/logout',{
            method:'POST'
          });
        console.log(res);
        signOut({callbackUrl: "http://localhost:3000/login"})
    }
    return(
        <>
                {/*AQUI EMPIEZA LA NAVBAR HOME*/}
        <div className="navbar sticky top-0 z-10 bg-slate-900 border-b-4 border-base-100">
            <div className="flex-1">
                <Link href="/home" className="btn btn-ghost normal-case text-xl">Smash Bell</Link>
                <Link href="/events" className="btn btn-ghost normal-case text-md">Events</Link>
            </div>            
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <Image src={require('../../public/./Images/Olimar.jpg')} alt="Icon" className="" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <button className="justify-between"><Link href="/profile">Profile</Link></button>
                        <button  onClick={handleOut} className="justify-between">Log out</button>
                    </ul>
                </div>
            </div>
        </div> 
                {/*AQUI TERMINA LA NAVBAR HOME*/} 

        </>
    )
}