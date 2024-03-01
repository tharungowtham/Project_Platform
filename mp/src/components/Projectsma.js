import React from 'react'

export default function Projectsma(prop) {
  return (
    <>
    <div className="card PRO">
        <div className="card-header">
            <a className="btn container" data-bs-toggle="collapse" href="#collapseOne">
                <span className="h6">{prop.title}</span>
            </a>              
        </div>
        <div id="collapseOne" className="collapse show" data-bs-parent="#accordion">
            <div className="card-body">
                {prop.problem_statement}<a data-bs-toggle="modal" data-bs-target="#exampleModal4" className="view right">+view more</a>
            </div>
            <hr />
            <div className="card-body">
                <span>tech Used:</span>
                <span className="tech-used">{prop.tech_used}</span>
            </div>
        </div>
        <div className="card-header">
        Author:{prop.author} 
        </div>
    </div>  
    </>
  )
}
