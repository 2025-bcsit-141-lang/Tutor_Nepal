import "../styles/Navigation.css"

function Navigation(){
    return(
       <nav className="navigation">
        <img src="./public/logo.png" alt="" height={80} />
        <ul className="nav-links">
            <li><a href="\">Home</a></li>
             <li><a href="\">Find Tutor</a></li>
              <li><a href="\">Become a Tutor</a></li> 
              <li><a href="\">Login</a></li>


        </ul>
       </nav>
    )
}

export default Navigation;