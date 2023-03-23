import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useSession} from "next-auth/react"
import Link from 'next/link'
import Footer from './footer'
import { getEvents} from './api/apiController'
import { useEffect} from 'react'
import { TwitterEmbed } from 'react-social-media-embed';
import dynamic from 'next/dynamic'
import { useState } from 'react'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });


export default function home(){
    const [events, setEvents] = useState([]);
    const [tweets, setTweets] = useState([]);
    

  useEffect(() => {
    getEvents(3)
      .then((events) => {
        //console.log(events);
        setEvents(events);
      })
      .catch((error) => console.error(error));




      fetch('/api/twitterController')
        .then((res) => res.json())
        .then((data) => setTweets(data))
        .catch((error) => console.error(error));
  }, []);


  const cardItems = events.map((evento, i) => (
    <div className='flex mx-4'>
      <br />
      <div className="card w-96 glass text-center text-neutral-content">  
        <figure>
          <Image src={evento.images[1].url} width={383} height={400} alt="event" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{evento.name}</h2>
          <p>How to park your car at your garage?</p>
          <div className="card-actions justify-end">
            <Link className="btn btn-primary" href={"https://www.start.gg/" + evento.slug}>View event</Link>
          </div>
        </div>
      </div>
      <br />
    </div>
  ));
  

    const tweetItems = tweets.map((tweetUrl) => (
        <div key={tweetUrl}>                
            <TwitterEmbed
                style={{
                maxWidth: 550
                }}
                url={tweetUrl}
                width="100%"
                /> 
        </div>
        ));
    return(
        <>
        <Head>
                {/*AQUI EMPIEZA LA NAVBAR HOME*/}
        <div className="navbar sticky top-0 z-10 bg-base-100">
            <div className="flex-1">
                <a><a><Link href="/home" className="btn btn-ghost normal-case text-xl">Smash Bell</Link></a></a>
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
                <ReactPlayer
                className='react-player'
                url='https://www.twitch.tv/btssmash'
                width='100%'
                height='100%'
                />
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
                <div className='p-10'>
                      <div className="grid grid-cols-4 gap-4">
                        <>{cardItems}</>
                    </div>
                </div>


                                        <center>
                                            <Link href="/events"  className="btn btn-primary">Todos los eventos</Link>  
                                        </center>
                                        <br />
                
                                        <div className='p-10'>
        <div className="grid grid-cols-4 gap-4">
          {tweetItems}
        </div>
      </div>
                                       <Footer/>
            
                                   </>
           )
        }