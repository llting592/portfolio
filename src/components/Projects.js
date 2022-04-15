import ProjectCard from "./ProjectCard";
import {projectList} from '../Data';

function Projects(){
    return (
        <div className='pl'>
            <div className="pl-bg"></div>
            <div className="pl-texts">
               <h1 className='pl-title'>Projects</h1>
            </div>
            <div className="pl-list">
                {projectList.map((item)=>(
                    <ProjectCard key={item.id}img={item.img} deploy={item.deploy} repo={item.repo} name={item.name}/>
                ))}
                </div>
        </div>  
    )
}


export default Projects;