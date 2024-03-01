import React from 'react'

export default function Footer() {
  return (
    <>
    <nav aria-label="Page navigation example" className="right mx-5">
          <ul className="pagination">
            <li className="page-item "><a className="page-link" href="#">Previous</a></li>
            <li className="page-item active"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">Next</a></li>
          </ul>
        </nav>
        <br/>
        <br/>
        <br/>
        <footer className="bg-dark text-center text-white">
            
            <div className="container p-4">
             
              <section className="mb-4">
                
                <a className="btn btn-outline-light btn-floating m-1 rounded-pill" href="/" role="button"><i className="fab fa-facebook-f"></i></a>
          
                
                <a className="btn btn-outline-light btn-floating m-1 rounded-pill" href="/" role="button"><i className="fab fa-twitter"></i></a>
          
                
                <a className="btn btn-outline-light btn-floating m-1 rounded-pill" href="/" role="button"><i className="fab fa-google"></i></a>
          
                
                <a className="btn btn-outline-light btn-floating m-1 rounded-pill" href="/" role="button"><i className="fab fa-instagram"></i></a>
          
                
                <a className="btn btn-outline-light btn-floating m-1 rounded-pill" href="/" role="button"><i className="fab fa-linkedin-in"></i></a>
          
                
                <a className="btn btn-outline-light btn-floating m-1 rounded-pill" href="/" role="button"><i className="fab fa-github"></i></a>
              </section>
              </div>
            <div className="text-center p-3 lk">
              © 2022 Copyright:
              <a className="text-white" href="#">ping intelligence.com</a>
            </div>
            </footer>
            </>
  )
}
