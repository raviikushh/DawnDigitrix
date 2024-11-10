import Header from "./components/layout/Header"
import { HashRouter, Routes, Route } from "react-router-dom"
import HomePage from "./components/home/HomePage"
import AboutPage from "./components/about/AboutPage"
import ServicePage from "./components/services/ServicePage"
import ContactPage from "./components/contact/ContactPage"
import { Footer } from "./components/footer/Footer"
import { NextUIProvider } from "@nextui-org/react"
import ScrollToTop from "./components/scroll/ScrolltoTop"


function App() {

  return (
    <NextUIProvider>
    <main>
    <HashRouter>
    <ScrollToTop/>
    <Header/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='services' element={<ServicePage />} />
        <Route path='contact' element={<ContactPage />} />
      </Routes> 
    <Footer/>
    </HashRouter>
    </main>
    </NextUIProvider>
  )
}

export default App
