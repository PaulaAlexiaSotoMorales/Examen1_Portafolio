import Image from 'next/image'
import { Inter } from 'next/font/google'
import Info from '@/component/Info';
import Head_pages from '@/component/Head_pages';
import Information from '@/component/Information'
import Gitt from '@/component/Gitt';
import Contact from '@/component/Contact'
import Carousel from '@/component/TextCarousel';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <header>
      <Head_pages></Head_pages>
      </header>
      <nav>
          <Information></Information>
        </nav>
        <section>
      <Carousel />
      </section>
        <section>
        <Gitt></Gitt>
      </section>
      <section>
        <Contact></Contact>
      </section>
      <footer>
        <Info></Info>
      </footer> 
    </>
    
  )
}

