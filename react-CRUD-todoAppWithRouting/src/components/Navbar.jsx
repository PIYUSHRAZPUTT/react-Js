import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{padding:"15px", background:"#eee"}}>
        <Link to="/" style={{marginRight:"20px", fontSize:"16px"}}>Home</Link>
        <Link to="/add" style={{marginRight:"20px",  fontSize:"16px"}}>Add Todo</Link>
    </nav>
  )
}

export default Navbar
