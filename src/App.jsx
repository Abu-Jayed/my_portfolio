import './App.css'
import Home from './components/Home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Qualification from './components/qualification/Qualification'
import ScrollUp from './components/scrollup/ScrollUp'
import Skills from './components/skills/Skills'
import Work from './components/work/Work'

function App() {

  return (
    <>
    <Header></Header>
    <main className='main'>
    <Home></Home>
    <About></About>
    <Skills></Skills>
    <Qualification></Qualification>
    <Work></Work>
    <Contact></Contact>
    </main>
    <Footer></Footer>
    <ScrollUp></ScrollUp>
    </>
  )
}

export default App
