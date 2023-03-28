import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useSession } from "next-auth/react"
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getEvents } from './api/apiController'
import NavBar from './navbarTest'
import Footer from './footer'
import { typeOf } from 'tls'

export default function Event() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents(15)
      .then((events) => {
        //console.log(events);
        setEvents(events);
      })
      .catch((error) => console.error(error));
  }, []);

 const cardItems = events.map((evento, i) => (
    <div className='flex mx-4'>
      <br />
      <div className="card bg-base-300 w-96 border-4 border-sky-500 text-center text-neutral-content">  
        <figure>
          <Image src={evento.images[0].url} width={383} height={300} alt="event" />
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
  
    

  return (
    <>

      <NavBar />
      
      
      <div className='p-10'>
      <div className="grid grid-cols-4 gap-4">
        <>{cardItems}</>
        </div>
        </div>

      <Footer />
    </>
  );
}
