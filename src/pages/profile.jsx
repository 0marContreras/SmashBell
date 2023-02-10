import Image from 'next/image'

export default function Profile() {
    return(
        <>
            <div className="prose">

        <h1>Profile page</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita explicabo, eligendi perferendis soluta obcaecati asperiores, voluptatibus nam optio rerum deleniti quas laborum voluptas, cumque reiciendis tenetur placeat quae eveniet consequatur.</p>
            
            </div>
            


            <div className="card w-96 bg-gray-800 shadow-xl">
                <figure className="px-10 pt-10">
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <Image src={require('../../public/Images/marth.jpg')} />
                        </div>
                    </div>  
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Omar Contreras</h2>
                    <p>El mas honesto, el heroe de todos los niños</p>

                


                    <div tabIndex={0} className="collapse border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            Edit profile
                        </div>
                        <div className="collapse-content">
                            <input type="text" placeholder="New name" className="input input-bordered input-info w-full max-w-xs " />
                            <input type="text" placeholder="New description" className="mt-3 input input-bordered input-info w-full max-w-xs " />
                            <input type="file" className="mt-3 file-input file-input-bordered file-input-primary w-full max-w-xs" />
                            <button className="mt-4 relative flex w-full btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
                </div>
                
            
        </>
    )
}