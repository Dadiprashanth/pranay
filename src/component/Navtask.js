import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Footer from './footer';
import { useState, useEffect } from 'react'
import { setTag } from './Action';
import { useDispatch, useSelector } from 'react-redux';
import DashBoard from './DashBoard';



function NavHead() {

  const state = useSelector(e => e)

  const [val, setVal] = useState("")
  // const[valName,setValName]=useState([])

  const dispatch = useDispatch()

  const handleChange=(e)=>{
    e.preventDefault()
     setVal(e.target.value)
     
  }

  const handleSub = async() => {
    //setValName([...valName,val]) 
    dispatch(setTag(val))
    console.log(val,"val");
   setVal("")

  }

  return (
    <>
      {/* {console.log(val)}
      {console.log(valName)} */}
      <Navbar bg="primary" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            {
              state?.checked?.map((e, i) => (

                <Nav.Link >{e}</Nav.Link>
              ))
            }
          </Nav>
          <form className="d-flex" >
            <input
              type="text"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={val}
              onChange={handleChange}

            />
            <button type="button" onClick={handleSub}
              variant="outline-black">Add</button>
          </form>
        </Container>
      </Navbar>
      <DashBoard />
      <Footer />
    </>
  );
}

export default NavHead