import Layout from '../components/Layout';
import {skills,experiences,projects} from '../profile';



const Index = () => (

<Layout>
    {/**HeaderCard */}
   <header className="row">
      <div className="col-md-12">
          <div className="card card-body bg-secondary text-light">
              <div className="row">
                  <div className="col-md-4">
                      <img src="dev.jpg" alt="" className="img-fluid"/>  
                  </div>
                  <div className="col-md-8">
                    <h1>Rodrigo Bilbao</h1> 
                    <h3>Frelancer autodidacta</h3>
                    <p>Especializado en el mundo de la tecnologia web especialmente JavaScript y Python con sus respectivos frameworks ademas de HTML 5 y CSS 3. Incursionando en el desarrollo movil.</p>
                       <a href="/contratame">Contactame</a>  
                  </div>
              </div>
          </div>
         </div> 
    </header>

    {/**Second section */} 

    <div className="row py-2">
        <div className="col-md-4">
            <div className="card bg-light">
                <div className="card-body">
                   <h1>Skills</h1> 
               {
                   skills.map(({skill,percentage},i) => (
                        <div className="py-3" key={i}>
                            <h5>{skill}</h5>
                            <div className="progress"> 
                                <div
                                 className="progress-bar" 
                                 role="progressbar"
                                 style={{ width: `${percentage}%` }} 
                                 aria-valuenow="50" 
                                 aria-valuemin="0" 
                                 aria-valuemax="100">

                                </div>
                            </div>
                        </div>
                   ))
               }

                </div>
            </div>
        </div>
        <div className="col-md-8">
            <div className="card bg-light">
                <div className="card-body">
                    <h1>Experience</h1>

                        <ul>

                            {

                                experiences.map(({title,description,from,to}, index) => (
                                <li key={index}>
                                    <h3>{title}</h3>
                                    <h5>{from} - {to}</h5>
                                    <p>{description}</p> 

                                </li>   
                                ))

                            }




                        </ul>



                </div>
            </div>
        </div>
    </div>

                            {/**Portafolio */}
                            <div className="row">
                                <div className="col-md-12"> 
                                    <div className="card card-body bg-dark">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <h1 className="text-center text-light">Portafolio</h1>
                                            </div>
                                        {

                                            projects.map(({name,description,image}, i) => (
                                            <div className="col-md-4 P-2" key={i}>
                                                <div className="card h-100">
                                                    <div className="overflow">
                                                    <img src={`/${image}`} alt=""  className="card-img-top"/>
                                                    </div>
                                                        
                                                    <div className="card-body">
                                                        <h3>{name}</h3>
                                                        <p>{description}</p>
                                                    </div>
                                                </div>

                                            </div> 
                                            ))
                                        }



                                        </div>
                                    </div>
                                        <div className="col-md-12">
                                           <div className="text-center">
                                                
                                            </div>
                                        </div>
                                </div>

                            </div>
</Layout>

)

export default Index;