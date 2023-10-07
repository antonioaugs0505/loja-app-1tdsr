import Link from "next/link"
import Image from "next/image"

export default function Post1(){
    return(
       
        <div>
        <h1>Post1</h1>
        <figure>
            <Image src="/assets/lusa.jpg" width={320} height={320} alt="Lusa">
                <figcaption><Link href="/post"><p>Voltar...</p></Link></figcaption>
            </Image >
        </figure>
        

    </div>
    )
}