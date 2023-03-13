import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useSession} from "next-auth/react"
import Link from 'next/link'
import { useEffect } from 'react'
import { getEvents } from './api/apiController'
import NavBar from './navbarTest'
import Footer from './footer'
export default function Event(){

    let events = new Array();
    
    useEffect(() => {
         events =  getEvents(3);
      }, []);

    return(
        <>
        
       
         <NavBar/>
        
        <div className='p-10'>
                      {/*AQUI EMPIEZA EL LISTADO DE CARDS*/}   
                        <div className='flex'>
                            <div className='flex mx-4'>
                            <br />
                                <div className="card w-96 glass text-center text-neutral-content">   
                                    <figure><Image src={require('../../public/./Images/cat.jpg')} alt="car!"/></figure>
                                        <div className="card-body">
                                            <h2 className="card-title">sssss</h2>
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
                                                        <h2 className="card-title">YAYAYAYAYYA</h2>
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
                                            <br />
                                        </div>
                                        <br/>
                                        <div ></div>
                                        <div className='flex'>
                                            <div className='flex mx-4'>
                                            <br />
                                            <div className='container block-line flex'>
                                                <div className="card w-96 glass text-center text-neutral-content">   
                                                    <figure><Image src={require('../../public/./Images/Saitama.jpg')} alt="car!"/></figure>
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
                                        <br />
                                        <div className='flex mx-12'>
                                            <br />
                                            <div className='container block-line flex'>
                                                <div className="card w-96 glass text-center text-neutral-content">   
                                                    <figure><Image src={require('../../public/./Images/ok.jpg')} alt="car!"/></figure>
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
                                        <br />
                                        <div className='flex mx-12'>
                                            <br />
                                            <div className='container block-line flex'>
                                                <div className="card w-96 glass text-center text-neutral-content">   
                                                    <figure><Image src={require('../../public/./Images/Genos.jpg')} alt="car!"/></figure>
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
                                        <br />
                                        <br />                                
                                    </div>
                                </div>
                        
                        {/*AQUI EMPIEZA EL PIE DE PAGINA*/}
            <Footer/>
 
            {/*AQUI TERMINA EL PIE DE PAGINA*/}
     </>
    )
}