import Faculty from "@/components/main/Faculty"
import Footer from "@/components/main/Footer"
import Gallery from "@/components/main/Gallery"
import HeroSection from "@/components/main/HeroSection"
import Navbar from "@/components/main/Navbar"
import PostsSection from "@/components/main/PostsSection"

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <PostsSection/>
      <Faculty/>
      <Gallery/>
      <Footer/>
    </div>
  )
}

export default HomePage
