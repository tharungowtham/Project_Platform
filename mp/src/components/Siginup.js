import React,{useState} from 'react'

export default function Siginup() {
  const [email,setemail] = useState(null);
  const [password,setpassword] = useState(null);
  async function submitfunc (e) {
    e.preventDefault();
    const Email = email;
    const Password = password;
    console.log(Email,Password,"ajshvdjasvd");
    await fetch("http://localhost:5000/signup",{
      method:"POST",crossDomain: true,
      headers :{
        "Content-Type" :"application/json",
        "Accept" : "application/json",
        "Access-Control-Allow-Orgin":true,
      },
      body:JSON.stringify({
        Email,
        Password
      }
      ),
    }).then((res)=>res.json())
        .then((data) =>{
          if(data.error=="User Exists"){
            alert("User already exists");
          }
          console.log(data,"userRegistered");
        })

  };
  return (
    <>
    <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
          <div className="modal-content bg-dark">
            <div className="container-fluid my-3">
              <div className="row">
                <div className="col-xl"> 
                  <div className="row">
                    <div className="col-xl-6">
                      <button type="button" className="btn-close btn-secondary" data-bs-dismiss="modal" aria-label="Close"></button>
                      <div  className="text-secondary h5 mx-auto strong col"><strong>Ping Intelligence</strong></div>
                      <br />
                      <div className="text-secondary h5 mx-auto wel">
                        <b className="mx-auto wel">Stay up to date</b><br />Be the first to know about new projects and its code
                      </div>
                      <br />
                      <form className="form" onSubmit={submitfunc}>
                          <div className="pb-4">
                            <div className="input-container">
                              <input type="email"  placeholder=" " name ="email" className="input-field input" autoComplete="off" required onChange={(e)=>
                              setemail(e.target.value)} value={email} />
                              <label>Email Address</label>
                              <i id="email-icon" className="fa-regular fa-envelope icon"></i>
                              <span className="toast-msg invalid-toast" id="invalid-toast"><p>Please enter the correct email format!</p></span>
                              <span className="toast-msg success success-toast" id="success-toast"><p>Great! your email successfuly submitted.</p></span>
                            </div>
                          </div>
                          <div>
                            <div className="input-container">
                              <input type="password"  placeholder=" " name = "password" className="input-field input" autoComplete="off" required onChange={(e)=>{
                                setpassword(e.target.value)
                              }} value={password}/>
                              <label >Password</label>
                              <i className="material-symbols-outlined icon">
                                lock
                              </i>
                              <span className="toast-msg invalid-toast size">
                                <p>Please enter correct password</p>
                              </span>
                              <span className="toast-msg success success-toast">
                                <p>Great! your password look good </p>
                              </span>
                            </div>
                          </div>
                          <br />
                          <div className="qqwe mx-auto"><button type="submit"  className="btn btn-secondary px-5 rounded-pill">SiginUp</button></div>
                          <br />
                          <div className="text-secondary">Already have an Account?<a id="siginup" href="#" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">Login</a></div>
                      </form>
                    </div>
                    <img src="left.jpg" alt="right" className="col-12 col-xl-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
