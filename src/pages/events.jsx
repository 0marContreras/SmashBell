import Image from 'next/image'
export default function Event() {
    return(
        <>
        <h1>Events</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita explicabo, eligendi perferendis soluta obcaecati asperiores, voluptatibus nam optio rerum deleniti quas laborum voluptas, cumque reiciendis tenetur placeat quae eveniet consequatur.</p>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><Image src={require('../../public/Images/smash.jpg')} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">UtchBiSmash</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam numquam nostrum iste odio earum provident maiores cupiditate quae. Quae atque sed dolore pariatur quam earum nihil veniam perspiciatis natus!</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View More</button>
                    </div>
                </div>
            </div>
        </>
        
    )
    
}