import React from 'react'


function Navbar() {
  return (
    <>
    <div>
    <nav className="navbar sticky-top navbar-expand-lg navbar-light"  >
  <div className="container-fluid"  >
    <a className="navbar-brand text-white" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-3 mb-lg-0">
        <li className="nav-item ml-2 mr-2"  >
          <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item ml-2 mr-2">
          <a className="nav-link text-white" href="/">Link</a>
        </li>
        <li className="nav-item ml-2 mr-2">
          <a className="nav-link text-white" href="/">Link</a>
        </li>
        <li className="nav-item ml-2 mr-2">
          <a className="nav-link text-white" href="/">Link</a>
        </li>
        
        
      </ul>
      <button type="button" className="btn btn-light"> SignUp / Login </button>
      
    </div>
    
  </div>
  
</nav>
</div>

    </>
  )
}

export default Navbar