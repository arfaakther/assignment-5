
import { Suspense } from 'react'
import { Banner } from './banner'
import { Contact } from './contact'
import { Footer } from './footer'
import { Nav } from './nav'
import { TechCards } from './techCards'



function App() {
const techStackPromise = async () => {
    const res = await fetch('/techdata.json');
    const data = await res.json();
    return (data);
  }
  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback={<p>Loading Data..........</p>}>
        <TechCards techstackPromise={techStackPromise()}>

        </TechCards>
      </Suspense>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App
