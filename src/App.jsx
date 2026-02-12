import "./app.scss"
import Dock from "./components/Dock"
import Github from "./components/Github"
import Nav from "./components/Nav"
import MacWindows from "./components/windows/MacWindows"

const App = () => {
  return (
      <main>
        <Nav/>
        <Dock/>

        <Github/>
      </main>
  )
}

export default App
