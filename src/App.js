import logo from './logo.svg';
import './App.css';
import logoReact from "./react-logo.svg"
import Navbar from "./Navbar"
import Text from "./Text"
import Declarative from "./Declarative"
import Components from "./Components"
import Singleway from "./Singleway"
import Jsx from "./Jsx"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {
  return (

    <div className="background-image">
      <Navbar/>
      <Text/>
      <div class="flexing">
        <div class="box"><Declarative/></div>
        <div class="box"><Components/></div>
        <div class="box"><Singleway/></div>
        <div class="box"><Jsx/></div>
      </div>

    </div>
  );
}

export default App;
