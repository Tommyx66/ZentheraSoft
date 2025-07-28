import Hero from "@/components/sections/Hero"
import Services from "@/components/sections/Services"
import About from "@/components/sections/About"
import WorksGallery from "@/components/sections/WorksGallery"
import CTA from "@/components/sections/CTA"
import Footer from "@/components/sections/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0c0c1d]">
      <Hero />
     {/*  <Services /> */}
      <About />
      <WorksGallery />
      <CTA />
      <Footer />
    </main>
  )
}
