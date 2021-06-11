import Vercel from '@assets/icons/vercel.svg'
import Image from 'next/image'



export default function Home() {
  return (
   <div>
    <h1>WELCOME</h1>
    <img src="/vercel.svg" alt="An SVG of an eye" />

    <Image src="/vercel.svg" height={64} width={283} />

    <Vercel />
   </div>
  )
}
export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  }
}
