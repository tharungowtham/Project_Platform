import React from 'react'
import Forgot from './Forgot'
import Login from './Login'
import Siginup from './Siginup'

export default function Navigation() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid" >
            <a className="navbar-brand ms-5" href="/main"><img src="logo.png" alt="logo" />Ping Intelligence</a>
            <div className="right"> 
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="/main">Home</a>
                        <a className="nav-link" href="/upload" tabIndex="-1" aria-disabled="true">upload</a>
                        <a className="nav-link  me-4"  data-bs-toggle="modal" href="#exampleModalToggle">login<img id="imf" src="login.png" alt="asd" /></a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <Login/>
    <Siginup/>
    <Forgot/>
    </>
  )
}
