import React,{useState,useEffect} from "react"
import Projectsma from "./Projectsma"
export default function Project() {
  const [check1, setcheck1] = useState(false)
  const [check2, setcheck2] = useState(false)
  const [check3, setcheck3] = useState(false)
  const [check4, setcheck4] = useState(false)
  const [val, setval] = useState("css")
  useEffect(() => {
    const li=document.getElementsByClassName("PRO");
    const q=document.getElementsByClassName("tech-used");
    if(check1===true){
    for(let i=0;i<q.length;i++){
      if (q[i].innerHTML.toUpperCase().indexOf('html'.toUpperCase()) > -1) {
        li[i].style.display = ""; 
      } 
      else {
        li[i].style.display = "none";
      }
    }
  }
  else{
    for(let i=0;i<q.length;i++){
      li[i].style.display = ""; 
    }
  }
  }, [check1])
  useEffect(() => {
    const li=document.getElementsByClassName("PRO");
    const q=document.getElementsByClassName("tech-used");
    if(check2===true){
    for(let i=0;i<q.length;i++){
      if (q[i].innerHTML.toUpperCase().indexOf('css'.toUpperCase()) > -1) {
        li[i].style.display = ""; 
      } 
      else {
        li[i].style.display = "none";
      }
    }
  }
  else{
    for(let i=0;i<q.length;i++){
      li[i].style.display = ""; 
    }
  }
  }, [check2])
  useEffect(() => {
    const li=document.getElementsByClassName("PRO");
    const q=document.getElementsByClassName("tech-used");
    if(check3===true){
    for(let i=0;i<q.length;i++){
      if (q[i].innerHTML.toUpperCase().indexOf('js'.toUpperCase()) > -1) {
        li[i].style.display = ""; 
      } 
      else {
        li[i].style.display = "none";
      }
    }
  }
  else{
    for(let i=0;i<q.length;i++){
      li[i].style.display = ""; 
    }
  }
  }, [check3])
  useEffect(() => {
    const li=document.getElementsByClassName("PRO");
    const q=document.getElementsByClassName("tech-used");
    if(check4===true){
    for(let i=0;i<q.length;i++){
      if (q[i].innerHTML.toUpperCase().indexOf('python'.toUpperCase()) > -1) {
        li[i].style.display = ""; 
      } 
      else {
        li[i].style.display = "none";
      }
    }
  }
  else{
    for(let i=0;i<q.length;i++){
      li[i].style.display = ""; 
    }
  }
  }, [check4])
  return (
    <>
    <div className="container">
          <div className="row">
            <div className="col-xl-2 p-3 my-auto" id="tyu">
              <button className="btn btn-primary h6 " id="buttonshow"><strong>Show Filters:</strong></button>
                <div  id="sort-bar d-flex my-auto">
                  <form className="container">
                    <legend className="h6"><b>Tech Used</b></legend>
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="check1" name="option1"  onChange={(e) => setcheck1(e.target.checked)} checked={check1}/>
                      <label className="form-check-label" htmlFor="check1">HTML</label>
                    </div>
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="check2" name="option2" onChange={(e) => setcheck2(e.target.checked)}/>
                      <label className="form-check-label" htmlFor="check2">CSS</label>
                    </div>
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="check3" name="option3"  onChange={(e) => setcheck3(e.target.checked)}/>
                      <label className="form-check-label" htmlFor="check3">JavaScript</label>
                    </div>
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="check4" name="option4"  onChange={(e) => setcheck4(e.target.checked)} />
                      <label className="form-check-label" htmlFor="check4">Python</label>
                    </div>
                    </form>
                    <form action="asd.php" className="container">
                    <legend className="h6"><b>Sort By Time</b></legend>
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="scheck1" name="option1" value="something" />
                      <label className="form-check-label" htmlFor="scheck1">Todays top</label>
                    </div>
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="scheck2" name="option2" value="something" />
                      <label className="form-check-label" htmlFor="scheck2">All time top</label>
                    </div>
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="scheck3" name="option3" value="something" />
                      <label className="form-check-label" htmlFor="scheck3">Neweset</label>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-xl-10">
                <p className="mx-auto"><b>Projects</b></p>
                <Projectsma title="PROJECT NAME 1" problem_statement="problem_statement" tech_used="HTML" author="author" />
                <Projectsma title="PROJECT NAME 2" problem_statement="problem_statement" tech_used="CSS" author="author" />
                <Projectsma title="PROJECT NAME 3" problem_statement="problem_statement" tech_used="JS" author="author" />
              </div>
          </div>
        </div>
<div className="modal fade" id="exampleModal4" tabIndex="-1" aria-labelledby="exampleModalLabel4" aria-hidden="true">
  <div className="modal-dialog modal-xl">
    <div className="modal-content">
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      <div className="modal-header">
        
        <img src="pic2.png" alt="adsads" className="img21" /> <h5 className="modal-title po" id="exampleModalLabel">Problem Statement Details</h5>
      </div>
      <div className="modal-body">
        <table className="table table-striped table-bordered">
          <tbody>
          <tr>
            <td className="att">Description</td>
            <td>problem:</td>
          </tr>
          <tr><td className="att">College</td><td>college name</td></tr>
          <tr><td>Code</td><td><a href="#">View Code</a></td></tr>
          <tr><td className="att">Domain Bucket</td><td>a     </td></tr>
          <tr><td className="att">Datadet Link</td><td>     </td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
<br />
</>
  )
}
