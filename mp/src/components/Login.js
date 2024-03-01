import React from 'react'
import {useNavigate} from 'react-router-dom'
export default function Login() {
  const navigate = useNavigate();
  return (
    <>
    <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
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
                        <div id="wel" className="text-secondary h4 mx-auto">
                          Welcome to Ping Intelligence 
                        </div>
                        <br />
                        <form className="form">
                          <div className="pb-4">
                            <div className="input-container">
                              <input type="email"  placeholder=" " className="input-field input" autoComplete="off" required/>
                              <label>Email Address</label>
                              <i id="email-icon" className="fa-regular fa-envelope icon"></i>
                              <span className="toast-msg invalid-toast" id="invalid-toast"><p>Please enter the correct email format!</p></span>
                              <span className="toast-msg success success-toast " id="success-toast"><p>Great! your email successfuly submitted.</p></span>
                            </div>
                          </div>
                          <div>
                            <div className="input-container">
                              <input type="password" id="psw-input" placeholder=" " className="input-field input" autoComplete="off" required />
                              <label htmlFor="psw-input">Password</label>
                              <i className="material-symbols-outlined icon">
                                lock
                              </i>
                              <span className="toast-msg invalid-toast size ">
                                <p>Please enter correct password</p>
                              </span>
                              <span className="toast-msg success success-toast">
                                <p>Great! your password look good </p>
                              </span>
                            </div>
                          </div>
                        <div className="text-secondary right" ><a id="siginup" href="#" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal" data-bs-dismiss="modal">Forgot Password?</a></div>
                        <br/><br/>
                        <div className="qqwe mx-auto"><button type="submit" className="btn btn-secondary px-5 rounded-pill">Login</button></div>
                        </form>
                        <br/>
                        <div className="text-secondary qwe mx-auto" >new to ping intelligence?<a id="siginup" href="#" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Create Account</a></div>
                      </div>
                      <img src="right.jpg" alt="right" className="col-12 col-xl-6" />
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
