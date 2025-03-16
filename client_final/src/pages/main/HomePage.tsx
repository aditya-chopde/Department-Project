import Faculty from "@/components/main/Faculty"
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
    </div>
  )
}

export default HomePage
