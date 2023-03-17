import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import { useSession } from "next-auth/react";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import NavBar from './navbarTest';
import Footer from './footer';
import { TwitterEmbed } from 'react-social-media-embed';

export default function Content() {
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
      fetch('/api/twitterController')
        .then((res) => res.json())
        .then((data) => setTweets(data))
        .catch((error) => console.error(error));
    }, []);
  //console.log(tweets)
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

  return (
    <>
      <NavBar />
      <div className='p-10'>
        <div className="grid grid-cols-4 gap-4">
          {tweetItems}
        </div>
      </div>
      <Footer />
    </>
  );
}
