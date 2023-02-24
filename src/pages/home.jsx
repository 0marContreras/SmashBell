import Image from 'next/image' 

export default function Home() {
    return (
        
        <>
            <h1>Home Page</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita explicabo, eligendi perferendis soluta obcaecati asperiores, voluptatibus nam optio rerum deleniti quas laborum voluptas, cumque reiciendis tenetur placeat quae eveniet consequatur.</p>

            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><Image src={require('../../public/Images/kirby.jpg')}
                    className=" h-80 w-auto"
                    alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Mario humilla a terry!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quis minima, non ut reprehenderit sint veritatis delectus temporibus, repellendus aut placeat optio? Blanditiis, asperiores pariatur delectus facilis quos neque alias.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View more</button>
                    </div>
                </div>
            </div>
        </>

    )
}

