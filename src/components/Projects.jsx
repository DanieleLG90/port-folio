
import MainProject from './projects-components/MainProject';
import SecondProject from './projects-components/SecondProject';
import "./Projects.css"

import { mainProjectsData } from './projects-components/projects-data/main-projects-data';
import { secondProjectsData } from './projects-components/projects-data/second-projects-data';

export default function Projects(){
    return(
        <div className='projects-container'>
            
            <div className='main-projects-container'>
                
                    {mainProjectsData.map(project => (
                            <MainProject 
                                key={project.id} 
                                project={project} 
                            />
                    ))}
            </div>

            <div className='secondary-projects-container'>
                {secondProjectsData.map(project =>(
                    <SecondProject
                        key={project.id}
                        project={project}
                    />
                ))}
                
            </div>
            
        </div>
        
    )
}