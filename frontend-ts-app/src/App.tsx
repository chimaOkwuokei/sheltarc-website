import './App.css'
import { About,Contact, Footer, Hero, Project, Design, Leadership} from './pages'

function App() {

  return (
    <div style={{ fontFamily: "Century Gothic, sans-serif" }} className="flex flex-col min-h-screen overflow-x-hidden bg-white">
      <Hero />
      <About />
      <Project />
      <Design/>
      <Leadership />
      <Contact />
      <Footer />
    </div>
  )
}

export default App