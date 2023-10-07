import Link from "next/link"
export default function Post(){
    return(
        <div>
            <h1>Post</h1>
            <div> <Link href="/"><p>Voltar...</p></Link> </div>
        </div>
    )
}
