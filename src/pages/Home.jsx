import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useSession} from "next-auth/react"
import Link from 'next/link'
import Footer from './footer'
import { getEvents, getStandings} from './api/apiController'
import { useEffect} from 'react'
import { TwitterEmbed } from 'react-social-media-embed';
import dynamic from 'next/dynamic'
import { useState } from 'react'
import NavBar from './navbarTest'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });


export default function home(){
    const [events, setEvents] = useState([]);
    const [tweets, setTweets] = useState([]);
    const [standing, setStanding] = useState([]);

  useEffect(() => {
    getEvents(3)
      .then((events) => {
        //console.log(events);
        setEvents(events);

      })
      .catch((error) => console.error(error));

      getStandings()
      .then((standing) => {
        //console.log(events);
        setStanding(standing);

      })

      fetch('/api/twitterController')
        .then((res) => res.json())
        .then((data) => setTweets(data))
        .catch((error) => console.error(error));
  }, []);


  const cardItems = events.map((evento, i) => (
    <div className='flex mx-4'>
      <br />
      <div className="card bg-base-300 w-96 border-4 border-sky-500 text-center text-neutral-content">  
        <figure>
          <Image src={evento.images[0].url} width={383} height={400} alt="event" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{evento.name}</h2>
          <p className='truncate text-ellipsis overflow-hidden ...'>{evento.rules}</p>
          <div className="card-actions justify-end">
            <Link className="btn btn-primary" href={"https://www.start.gg/" + evento.slug}>View event</Link>
          </div>
        </div>
      </div>
      <br />
    </div>
  ));
  
  const standItems = standing.map((stand, i) => (

    <div className='flex mx-10'>
          <div className="card card-side bg-base-200 border-4 border-yellow-300 shadow-xl w-128">
              <div className="card-body">
                 <h1 className="card-title">{"Place: " + stand.placement}</h1>
                 <h1 className='text-2xl'>{stand.entrant.name}</h1>
                  <div className="card-actions justify-end">
                   </div>    
                </div>
          </div>
    </div>

  ));

    const tweetItems = tweets.map((tweetUrl) => (
      <div className="card w-96 bg-white">
        <div key={tweetUrl}>                
            <TwitterEmbed
                style={{
                maxWidth: 550
                }}
                url={tweetUrl}
                width="100%"
                /> 
        </div>
      </div>  
        ));
    return(
        <>
            <NavBar/>
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

                        
                    {standItems}


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
        <br/>
                
        <div className='p-10'>
        <div className="grid grid-cols-4 gap-4">
          {tweetItems}
        </div>
      </div>
    <Footer/>         
</>
)
}