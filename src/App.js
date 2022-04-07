import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import { Navbar,Nav,Container,NavDropdown } from "react-bootstrap";
import './App.css';
import home from './img/unsplash.png';
import home_one from './img/unsplash-one.png';
import img from './img/image-18.png';
import img_one from './img/image-21.png';
import home_img from'./img/image-11.png';
import home_img_one from'./img/image-10.png';
import home_img_two from'./img/image-12.png';
import {Accordion,Carousel} from "react-bootstrap";
import home_img_there from'./img/Ellipse-1.png';
import social_twiter from './img/twitter.png';
import social_facebook from './img/facebook.png';
import social_insta from './img/instagram-logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar bg="White" expand="lg" >
  <Container>
    <Navbar.Brand href="#home"className='log'><h1>Cootels</h1></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home" className='c_auto'>Rooms</Nav.Link>
        <Nav.Link href="#link" className='c_auto'>Reservation</Nav.Link>
        <Nav.Link href="#link" className='c_auto'>Contacs</Nav.Link>
      </Nav>
    </Navbar.Collapse>
   <Button  className='bt_button'>Get Started</Button>{' '}
  </Container>
</Navbar>
      </header>
      <section>
      <div class="container">
  <div class="row">
    <div class="col-sm-5">
      <div class="text-coll">
      <h2>Nature, Warmth, and Beauty in One Space</h2>
      <p>One place to release all the stress, bring back happines, and get back to nature. 
        We provide the best room and nature for you. Come visit us anytime you want.</p>
      <Button  className='bt-collt'>Reservation</Button>{' '}
    </div>
   </div> 
    <div class="col-sm-7">  
      <img src={home} class="img-fluid"></img>
    </div>
  </div> 
  </div>
      </section>
      <section>
      <div class="container">
  <div class="row">
    <div class="col-sm-6">  
      <img  src={home_one} class="img-fluid"></img>
    </div>
    <div class="col-sm-6">
      <div class="text-coll">
      <h2>Cozy and Down to Earth Cootage Hotel in Norway.</h2>
      <p>Our Cootage Hotel is an intimate hideway concieved for dicerning travelers. 
        It faces directly the unique and spectacular panorama of the Hallerbos Jungle.</p>
        <p>Cootels extends along a private, quiet, and beautiful nature. 
          Stay away from crowd and enjoy the cozy and beauty with us.</p>
      <Button  className='bt-collt'>Learn More</Button>{' '}
    </div>
   </div> 
  </div> 
  </div>
   </section>
      <section>
      <div class="container">
      <div class="row">
    <div class="col-sm-5">
      <div class="text-coll">
      <h2>Cabin Activities</h2>
      <p>Don’t worry to get bored easily in our cabin. We have so many cabin activities for you to do it alone or with group.
         Maybe this is the best chance for you to make new friends or even a lover.</p>
    </div>
   </div> 
    <div class="col-sm-5">  
     <img  src={img_one} class="img-fluid float-left"></img>
    </div>
    <div class="col-sm-6">  
    <div class="img_cool">  <img  src={img} class="img-fluid"></img></div>
    </div><div class="col-sm-6">
      <div class="text-coll">
      <h2>100% Organic Food</h2>
      <p>We served 100% organic, low process and delicious food.
         We allow our guest to have breakfast or dinner request.What ever made your taste buds happy.</p>
    </div>
   </div> 
  </div> 
  </div>
   </section>
   <section>
      <div class="container">
  <div class="row">
    <div class="col-md-8 mx-auto">
      <div class="section_text">
      <h2>Many Rooms to Choose</h2>
      <p>There is a room for every needs. We have room for 
        individuals until family size, we also have a cabin for more private experience</p>
      <Button  className='bt-collt'>Explore more</Button>{' '}
    </div>
   </div> 
  </div> 
  </div>
      </section>
      <section>
      <div class="container">
  <div class="row">
    <div class="col-sm-4">
      <div class="section_four">
    <img  src={home_img} class="img-fluid"></img>
    <h3>Single Room</h3>
    <p>Best for a brave lone wolf who need comfort and quiet quality time,
       but you still have a chance to meet others.</p>
       <a href='#'>Learn more</a>
       </div>
    </div>
    <div class="col-sm-4">
    <div class="section_four">
    <img  src={home_img_one} class="img-fluid"></img>
    <h3>Double Room</h3>
    <p>Best for couple, seek happiness in intimacy without worry of being disturbed. 
      Feel the whole world just for you two</p>
       <a href='#'>Learn more</a>
    </div>
    </div>
    <div class="col-sm-4">
    <div class="section_four">
    <img  src={home_img_two} class="img-fluid"></img>
    <h3>Cootage</h3>
    <p>Best for family or group. One cootage can fit up to 5 people.
       Made stronger bond with your family or friends</p>
       <a href='#'>Learn more</a>
    </div>
    </div>
   </div> 
  </div> 
      </section>
      <section>
      <div class="container">
        <div class="bloc_fifth">
  <div class="row">
    <div class="col-sm-6">
      <div class="section_fiftn">
      <span>Start your journey!</span>
      <h2>How to Get My Room?</h2>
      <p>You can contact us by phone or email us.
         Easily tap the contact button below and it will take you to our contact point</p>
         <div class="row">
         <div class="col-sm-3">
      <Button  className='bt-collt'>Contact us</Button>{' '}
      </div>
      <div class="col-sm-4">
     <p>Explore more room</p>
      </div>
      </div>
    </div>
   </div> 
   <div class="col-sm-6">
   <Accordion defaultActiveKey="0">
     <div class="accordion_name">
  <Accordion.Item eventKey="0">
    <Accordion.Header><h2>1. Choose a room and date</h2></Accordion.Header>
    <Accordion.Body>
   <p>Contact us via phone or email, ask for availability 
    of you choice of room. We might offer you something exciting.</p>   
    </Accordion.Body>
  </Accordion.Item>  
  <Accordion.Item eventKey="1">
    <Accordion.Header><h2>2. Check for room availability</h2></Accordion.Header>
    <Accordion.Body>
    <p>Contact us via phone or email, ask for availability 
    of you choice of room. We might offer you something exciting.</p> 
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header><h2>3. Enjoy your room</h2></Accordion.Header>
    <Accordion.Body>
    <p>Contact us via phone or email, ask for availability 
    of you choice of room. We might offer you something exciting.</p> 
    </Accordion.Body>
  </Accordion.Item>
  </div>
</Accordion>
   </div>
   </div>
  </div> 
  </div>
      </section>
      <section>
      <div class="container">
        
  <div class="row">
    <div class="col-md-8 mx-auto">
    <Carousel>
  <Carousel.Item interval={1000}>
    <div class="carousel_block">
  <h2>Hear From Our Happy Customers</h2>
  <img src={home_img_there} class="img-fluid"></img>
    <p>“Great service, great food, great people. The scenery is also beautiful, you can do so much activity even with your famility. Worth every penny! you should come and see for your self. 
       5 out of 5! the waffle is great!”</p>
       <span>Kirana Dunham</span>
      </div>
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
  <div class="carousel_block">
  <h2>Hear From Our Happy Customers</h2>
  <img src={home_img_there} class="img-fluid"></img>
    <p>“Great service, great food, great people. The scenery is also beautiful, you can do so much activity even with your famility. Worth every penny! you should come and see for your self. 
       5 out of 5! the waffle is great!”</p>
       <span>Kirana Dunham</span>
      </div>
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <div class="carousel_block">
  <h2>Hear From Our Happy Customers</h2>
  <img src={home_img_there} class="img-fluid"></img>
    <p>“Great service, great food, great people. The scenery is also beautiful, you can do so much activity even with your famility. Worth every penny! you should come and see for your self. 
       5 out of 5! the waffle is great!”</p>
       <span>Kirana Dunham</span>
      </div>
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
   </div> 
   </div>
  </div> 
      </section>
      <footer class="footer">
      <div class="container">
  <div class="row">
    <div class="col-md-3 mx-auto">
    <h1>Cootels</h1>
    <p>Your Best Private Hideway From Crowd. Back to Nature.</p>
 <div class ='row'>
 <div class="col-sm-2">
      <img src={social_twiter}></img>
      </div>
      <div class="col-sm-2">
      <img src={social_facebook}></img>
      </div>
      <div class="col-sm-2">
      <img src={social_insta}></img>
      </div>
 </div>
      </div>
      <div class="col-sm-2">
        <span>Rooms</span>
      <ui>
        <li><a href = "#">Single Room</a></li>
        <li><a href = "#">Double Room</a></li>
        <li><a href = "#">Cabin</a></li>
        <li><a href = "#">Custom Room</a></li>
      </ui>
      </div>
      <div class="col-sm-2">
      <span>Reservation</span>
      <ui>
        <li><a href = "#">See the Steps</a></li>
        <li><a href = "#">Best Time</a></li>
      </ui>
      </div>
      <div class="col-sm-2">
      <span>Contact</span>
      <ui>
        <li><a href = "#">Our Number</a></li>
        <li><a href = "#">Our Emai</a></li>
        <li><a href = "#">Our Location</a></li>
      </ui>
      </div>
      </div>
      </div>
      </footer>
    </div>
  );
}

export default App;
