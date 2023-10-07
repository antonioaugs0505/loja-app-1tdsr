import Link from "next/link"
import Image from "next/image"

export default function Post2(){
    return(
       
        <div>
            <h1>Post2</h1>
            <figure>
                <Image src="/assets/lusa1.jpg" width={320} height={320} alt="Lusa">
                    <figcaption><Link href="/post"><p>Voltar...</p></Link></figcaption>
                </Image >
            </figure>
            

        </div>
    )
}