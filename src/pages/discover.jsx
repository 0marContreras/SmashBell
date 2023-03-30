import { useEffect, useState } from "react"
import { getSets } from './api/apiController'
import Footer from "./footer";
import NavBar from "./navbarTest";

export default function Discover(){

    const [setsA, setSetsA] = useState([]);

    useEffect(() => {

        getSets('3f297e74')
          .then((setsA) => {
            console.log(setsA);
            setSetsA(setsA);
    
          })
          .catch((error) => console.error(error));
      }, []);


      //console.log(setsA);
      const setsItem = setsA.map((set, i) => (

        <div className='flex mx-10 ' key={i}>
              <div className="card card-side bg-base-200 border-4 border-purple-300 shadow-xl w-128">
                  <div className="card-body">
                     <h1 className="card-title text-2xl text-purple-300">{set.displayScore}</h1>
                     <h1 className='text-xl'>{set.event.tournament.name}</h1>
                     <h1>{set.event.name}</h1>
                      <div className="card-actions justify-end">
                       </div>    
                    </div>
              </div>
        </div>
    
      ));

    return(
        <>
        <NavBar/>
        <center>
            <h1 className='text-5xl'>Recent matches and results</h1>
        </center>
        <div className='p-10'>
            <div className="grid grid-cols-4 gap-4">
                {setsItem}
            </div>
        </div>

        <Footer/>
        </>
    )
}