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
    getEvents(5)
      .then((events) => {
        //console.log(events);
        setEvents(events);
      })
      .catch((error) => console.error(error));
  }, []);

  const cardItems = events.map((evento, i) => {
    evento.images[1].url ? (
      
    ) :
  }
  )
    

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
