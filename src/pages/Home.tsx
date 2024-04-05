import HomeLayout from "../layouts/HomeLayout"
import HomeHeroSection from "../components/Home/HomeHeroSection"
import HelpSection from "../components/Home/HelpSection"
import MoreWaysToHelp from "../components/Home/MoreWaysToHelp"
import BottomCTA from "../components/Home/BottomCTA"


function Home() {
  return (
    <main>
      <HomeLayout>
        <HomeHeroSection />
        <HelpSection />
        <MoreWaysToHelp />
        <BottomCTA />
      </HomeLayout>
    </main>
  )
}

export default Home