import "./app.scss"
import Dock from "./components/Dock"
import Github from "./components/windows/Github"
import Nav from "./components/Nav"
import Note from "./components/windows/Note"
import Resume from "./components/windows/Resume"
import Spotify from "./components/windows/Spotify"
import Cli from "./components/windows/Cli"
import { useState } from "react"
import { github } from "react-syntax-highlighter/dist/esm/styles/hljs"

const App = () => {
  const [windowsState, setWindowState] = useState({
    github:false,
    note: false,
    resume: false,
    spotify: false,
    cli: false
  })
  return (
      <main>
        <Nav/>
        <Dock windowsState={windowsState} setWindowState={setWindowState}/>
        {windowsState.github && <Github windowName='github' windowsState={windowsState} setWindowState={setWindowState}/>}
        {windowsState.note && <Note windowName='note' windowsState={windowsState} setWindowState={setWindowState}/>}
        {windowsState.resume && <Resume windowName='resume' windowsState={windowsState} setWindowState={setWindowState}/>}
        {windowsState.spotify && <Spotify windowName='spotify' windowsState={windowsState} setWindowState={setWindowState}/>}
        {windowsState.cli && <Cli windowName='cli' windowsState={windowsState} setWindowState={setWindowState}/>}
      </main>
  )
}

export default App
