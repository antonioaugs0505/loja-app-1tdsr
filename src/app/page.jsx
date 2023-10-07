import Link from "next/link"
export default function Home(){

  return(
    <div>
      <h1>Home</h1>
      <ul>
        <li><Link href="/post">Post</Link></li>
        <li><Link href="/post/post1">Post1</Link></li>
        <li><Link href="/post/post2">Post2</Link></li>
      </ul>
    </div>
  )
}