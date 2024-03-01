import React from 'react'

export default function Forgot() {
  return (
    <div className="modal fade" id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
          <div className="modal-content bg-dark">
              <div className="container-fluid my-3">
                <div className="row">
                  <div className="col-xl"> 
                    <div className="row">
                      <div className="col-xl-6">
                        <button type="button" className="btn-close btn-secondary" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div className="text-secondary h5 mx-auto col"><strong>Ping Intelligence</strong></div>
                        <br />
                        <div id="ty" className="text-secondary h4 mx-auto">
                          Forgot Your Password 
                        </div>
                        <br />
                        <form className="form">
                          <div className="pb-4">
                            <div className="input-container">
                              <input type="email"  placeholder=" " className="input-field input" autoComplete="off" required />
                              <label>Email Address</label>
                              <i id="email-icon" className="fa-regular fa-envelope icon"></i>
                              <span className="toast-msg invalid-toast" id="invalid-toast"><p>Please enter the correct email format!</p></span>
                              <span className="toast-msg success success-toast" id="success-toast"><p>Great! your email successfuly submitted.</p></span>
                            </div>
                          </div>
                          <div>
                            <div className="input-container">
                              <input type="number" placeholder=" " className="input-field input" autoComplete="off" required />
                              <label >Phone number</label>
                              <i className="material-symbols-outlined icon">
                                call
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
                          <div className="we mx-auto"><button type="submit" id="sub" className="btn btn-secondary px-5 rounded-pill">Submit</button></div>
                        </form>
                          <br />
                          <br />
                          <div className="text-secondary rty mx-auto" >Remembered Your Password!!<a id="siginup" href="#" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">Login</a></div>
                    
                      </div>
                      <img src="left1.png" alt="right" className="col-12 col-xl-6" />
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}
