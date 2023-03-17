import Link from 'next/link'
import Image from 'next/image'

export default function NavBar(){
    return(
        <>
        
        
                {/*AQUI EMPIEZA LA NAVBAR HOME*/}
        <div className="navbar sticky top-0 z-10 bg-base-100">
            <div className="flex-1">
                <Link href="/home" className="btn btn-ghost normal-case text-xl">Smash Bell</Link>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <Image src={require('../../public/./Images/Olimar.jpg')} alt="Icon" className="" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link href="/profile"  className="justify-between">Profile</Link>
                        <Link href="/"  className="justify-between">Log out</Link>
                    </ul>
                </div>
            </div>
        </div> 
                {/*AQUI TERMINA LA NAVBAR HOME*/}     
         

        </>
    )
}