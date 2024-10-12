import Header from "./components/layout/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./components/home/HomePage"
import AboutPage from "./components/about/AboutPage"
import ServicePage from "./components/services/ServicePage"
import ContactPage from "./components/contact/ContactPage"
import { Footer } from "./components/footer/Footer"

function App() {

  return (
    <main>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='services' element={<ServicePage />} />
        <Route path='contact' element={<ContactPage />} />
      </Routes> 
    <Footer/>
    </BrowserRouter>
    </main>
  )
}

export default App
