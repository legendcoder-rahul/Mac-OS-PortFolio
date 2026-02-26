
import MacWindows from './MacWindows'
import githubData from "../../assets/github.json"
import './github.scss'

const GitCard = ({ data={id:1, image:'', title:'', description:'', tags:[], repoLink:'', demoLink:''}}) =>{
    return <div className="card">
        <img src={data.image} alt="" />
        <h1>{data.title}</h1>
        <p className='description'>{data.description}</p>

        <div className="tags">
            {
                data.tags.map(tag=><p className='tag'>{tag}</p>)
            }
        </div>

        <div className="urls">
            <a href={data.repoLink}>Repository</a>
            {data.demoLink &&<a href={data.demoLink}>Demo Link</a>}
        </div>
    </div>
}

const Github = ({windowName, windowsState, setwindowState}) => {
  return (
   <MacWindows windowName={windowName} windowsState={windowsState} setWindowState={setwindowState}>
    <div className="cards">
        {githubData.map((project,id) =>{
            return <GitCard key={id} data={project}/>
        })}
    </div>
   </MacWindows>
  )
}

export default Github
