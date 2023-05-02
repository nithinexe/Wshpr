import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className= "">
      <Head> 
        <title>Wshpr</title>
      </Head>

      <Header></Header>


    </div>
  )
}

