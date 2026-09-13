import { Suspense } from "react";
import { Banner } from "./banner";
import { Contact } from "./contact";
import { Footer } from "./footer";
import { Nav } from "./nav";
import { TechCards } from "./techCards";
import type { ITechCardProps } from "./type";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function App() {
  const techStackPromise = async (): Promise<ITechCardProps[]> => {
    const res = await fetch("/techdata.json");
    const data = await res.json();
    return data;
  };
return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback={<p>Loading Data..........</p>}>
        <TechCards techstackPromise={techStackPromise()} ></TechCards>
    </Suspense>
    <ToastContainer></ToastContainer>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
