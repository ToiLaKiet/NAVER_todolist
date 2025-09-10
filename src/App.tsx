import './App.css'
import hackathonGraphic from './assets/hackathon-graphic.svg'
import TaskFlow from './assets/logo_without_title.svg'
import Header from './components/header/header.tsx'

function App() {
  return (
    <div className="container">
      <Header/>
      <div className="content">
          <img src={TaskFlow} alt="NAVER Vietnam AI Hackathon" className="logo" />
          <div className="greeting">
            <p className="hello">Xin chào! 안녕하세요!</p>
            <p className="subtitle">Hello World</p>
        </div>
      </div>
      <img className="graphic" src={hackathonGraphic} alt="" />
    </div>
  )
}

export default App
