import Header from "@/components/layout/Header"
import Hero from "@/components/sections/Hero"
import Services from "@/components/sections/Services"
import About from "@/components/sections/About"
import WorksGallery from "@/components/sections/WorksGallery"
import ContactForm from "@/components/sections/ContactForm"
import Footer from "@/components/sections/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <WorksGallery />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
