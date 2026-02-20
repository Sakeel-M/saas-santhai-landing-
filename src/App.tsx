import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import ProblemSection from './components/ProblemSection'
import WhySection from './components/WhySection'
import SolutionSection from './components/SolutionSection'
import AudienceSplit from './components/AudienceSplit'
import Marketplace from './components/Marketplace'
import DifferentSection from './components/DifferentSection'
import Outcomes from './components/Outcomes'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <TrustStrip />
            <ProblemSection />
            <WhySection />
            <SolutionSection />
            <AudienceSplit />
            <Marketplace />
            <DifferentSection />
            <Outcomes />
            <FAQ />
            <FinalCTA />
            <Footer />
        </>
    )
}
