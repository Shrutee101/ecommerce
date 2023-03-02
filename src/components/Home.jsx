import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage
} from 'mdb-react-ui-kit';




export const Home = () => {
  return (
    <>
   
          {/* <div className="container mt-2">
          <img
            className="d-block w-100"
           
            src="../c22.jpg"

            alt="First slide"
          />
          </div> */}

        
    
      <Carousel style={{marginTop:"40px"}}>
        <Carousel.Item>
          <img
            className="d-block w-100"
           
            src="../western wear.jpg"

            alt="First slide"

            height={"400px"}
          />
          
        </Carousel.Item>
       
        <Carousel.Item>
          <img className="d-block w-100" src="../Kurtis2.jpg" alt="2nd slide"  height={"400px"}/>

       
       
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="../hoodie4.jpg" alt="Third slide"  height={"400px"}/>

       
       
        </Carousel.Item>
      </Carousel>
      <div className="mt-5">
        <center>
        
          <h3>DEAL OF THE DAY</h3>
          <hr className="mx-auto" style={{ width: "500px" }} />
        </center>
      </div>
      <div className="mt-5">

      </div>

      <Container>
        <Row className="mt-3">
          <Col xs={{ order: "last" }}>
            <div class="col-sm">
              <Card style={{ width: "15rem" ,border:"none"}}>
                <Card.Img variant="top" src="../hoodie.webp" style={{borderRadius:"20px"}}/>
                <Card.Body>
                  <Card.Title><b>Hoodies under 399</b></Card.Title>
                  <Card.Text>
                    <h5>Min.10% Off</h5>
                  </Card.Text>
                  {/* <Button variant="primary">Buy Now</Button> */}
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col xs={{ order: "last" }}>
            <div class="col-sm">
              <Card style={{ width: "15rem",border:"none" }}>
                <Card.Img variant="top" src="../frocks.webp"style={{borderRadius:"20px"}} />
                <Card.Body>
                  <Card.Title><b>Frocks under 699</b></Card.Title>
                  <Card.Text>
                    <h5>Min.20% Off</h5>
                  </Card.Text>
                  {/* <Button variant="primary">Buy Now</Button> */}
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col>
            <div class="col-sm">
              <Card style={{ width: "15rem" ,border:"none"}}>
                <Card.Img variant="top" src="../top.webp" style={{borderRadius:"20px"}}/>
                <Card.Body>
                  <Card.Title><b>Tops under 499</b></Card.Title>
                  <Card.Text>
                    <h5>Min.40% Off</h5>
                  </Card.Text>
                  {/* <Button variant="primary">Buy Now</Button> */}
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col xs={{ order: "first" }}>
            <div class="col-sm">
              <Card style={{ width: "15rem" ,border:"none"}}>
                <Card.Img variant="top" src="../kurta.jpg"style={{borderRadius:"20px"}} />
                <Card.Body>
                  <Card.Title><b>Kurtis under 299</b></Card.Title>
                  <Card.Text>
                    <h5>Min.10% Off</h5>
                  </Card.Text>
                  {/* <Button variant="primary">Buy Now</Button> */}
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col xs={{ order: "first" }}>
            <div class="col-sm">
              <Card style={{ width: "15rem",border:"none" }}>
                <Card.Img variant="top" src="../girljeans.avif" style={{borderRadius:"20px"}} />
                <Card.Body>
                  <Card.Title><b>Jeans under 799</b></Card.Title>
                  <Card.Text>
                    <h5>Min.30% Off</h5>
                  </Card.Text>
                  {/* <Button variant="primary">Buy Now</Button> */}
                </Card.Body>
              </Card>
            </div>
          </Col>

          
           
        </Row>
        
      </Container>
      <div className="mt-5">
      
      
      </div>
     

      <Carousel>
        {/* <Carousel.Item>
        
          <img
            className="d-block w-100"
            src="../jacketsale.jpg"
            alt="First slide"
          />
         
        </Carousel.Item> */}
        <Carousel.Item>
        
        <img
          className="d-block w-100"
          src="../trendycollection.jpg"
          alt="Second slide"
        />
       
      </Carousel.Item>
      </Carousel>

      <div className="mt-5" id="c1">
        <center>
      
          <h3>OUR PRODUCTS</h3>
          <hr className="mx-auto" style={{ width: "500px" }} />
        </center>
      </div>

      <div className="mt-5">

      </div>

      <div id="div2">
      <Container>
        <Row >
          <Col xs={{ order: "last" }}>
            <div class="col-sm">
              <Card style={{ width: "13rem" }}>
                <Card.Img variant="top" src="../skirt.jpg" />
                <Card.Body>
                  <center><Card.Title>Skirts</Card.Title></center>
                  {/* <Card.Text>
                    <h2>Min.10% Off</h2>
                  </Card.Text> */}
                  {/* <Button variant="dark">Buy Now</Button> */}
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col xs={{ order: "last" }}>
            <div class="col-sm">
              <Card style={{ width: "13rem" }}>
                <Card.Img variant="top" src="../DenimJacket.jpg" />
                <Card.Body>
                  <center><Card.Title>Denim Jackets</Card.Title></center>
                  {/* <Card.Text>
                    <h2>Min.10% Off</h2>
                  </Card.Text> */}
                  {/* <Button variant="dark">Buy Now</Button> */}
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col xs={{ order: "last" }}>
            <div class="col-sm">
              <Card style={{ width: "13rem" }}>
                <Card.Img variant="top" src="../jumpsuit.avif" />
                <Card.Body>
                  <center><Card.Title>Jumpsuits</Card.Title></center>
                  {/* <Card.Text>
                    <h2>Min.10% Off</h2>
                  </Card.Text> */}
                  {/* <Button variant="dark">Buy Now</Button> */}
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col xs={{ order: "last" }}>
            <div class="col-sm">
              <Card style={{ width: "13rem" }}>
                <Card.Img variant="top" src="../Denimjacket.webp" />
                <Card.Body>
                  <center><Card.Title>Denim Jeans</Card.Title></center>
                  {/* <Card.Text>
                    <h2>Min.10% Off</h2>
                  </Card.Text> */}
                  {/* <Button variant="dark">Buy Now</Button> */}
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col xs={{ order: "last" }}>
            <div class="col-sm">
              <Card style={{ width: "13rem" }}>
                <Card.Img variant="top" src="../activewear.webp" />
                <Card.Body>
                  <center><Card.Title>Active Wears</Card.Title></center>
                  {/* <Card.Text>
                    <h2>Min.10% Off</h2>
                  </Card.Text> */}
                  {/* <Button variant="dark">Buy Now</Button> */}
                </Card.Body>
              </Card>
            </div>
          </Col>


        </Row>

        <Row className="mt-3">
          <Col xs={{ order: "last" }}>
            <div class="col-sm">
              <Card style={{ width: "13rem" }}>
                <Card.Img variant="top" src="../nightwear.jpg" />
                <Card.Body>
                  <center><Card.Title>Night Wears</Card.Title></center>
                  {/* <Card.Text>
                    <h2>Min.10% Off</h2>
                  </Card.Text> */}
                  {/* <Button variant="dark">Buy Now</Button> */}
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col xs={{ order: "last" }}>
            <div class="col-sm">
              <Card style={{ width: "13rem" }}>
                <Card.Img variant="top" src="../westerntop.webp" />
                <Card.Body>
                  <center><Card.Title>Western Tops</Card.Title></center>
                  {/* <Card.Text>
                    <h2>Min.10% Off</h2>
                  </Card.Text> */}
                  {/* <Button variant="dark">Buy Now</Button> */}
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col xs={{ order: "last" }}>
            <div class="col-sm">
              <Card style={{ width: "13rem" }}>
                <Card.Img variant="top" src="../officewear.avif" />
                <Card.Body>
                  <center><Card.Title>Office Wears</Card.Title></center>
                  {/* <Card.Text>
                    <h2>Min.10% Off</h2>
                  </Card.Text> */}
                  {/* <Button variant="dark">Buy Now</Button> */}
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col xs={{ order: "last" }}>
            <div class="col-sm">
              <Card style={{ width: "13rem" }}>
                <Card.Img variant="top" src="../frock1.webp" />
                <Card.Body>
                 <center><Card.Title>Stylish Frocks</Card.Title></center>
                  {/* <Card.Text>
                    <h2>Min.10% Off</h2>
                  </Card.Text> */}
                  {/* <Button variant="dark">Buy Now</Button> */}
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col xs={{ order: "last" }}>
            <div class="col-sm">
              <Card style={{ width: "13rem"}}>
                <Card.Img variant="top" src="../hoodie1.jpg" />
                <Card.Body>
                  <center><Card.Title>Hoodies</Card.Title></center>
                  {/* <Card.Text>
                    <h2>Min.10% Off</h2>
                  </Card.Text> */}
                  {/* <Button variant="dark">Buy Now</Button> */}
                </Card.Body>
              </Card>
            </div>
          </Col>

        </Row>
      </Container>  
      </div>



      <div className="mt-5">
        
        {/* <hr className="mx-auto" style={{ width: "1700px" }} /> */}
        <img
            className="d-block w-100"
            // src="../stylebetter (1).jpg"
            src="../flashsale.jpg"

            alt="First slide"
          />
          
        
      </div>

      

      <div className="mt-5">
        <center>
        
          <h3>POPULAR BRANDS</h3>
          <hr className="mx-auto" style={{ width: "500px" }} />
          
        </center>
      </div>

      

      <Container className="mt-5">
        <Row className="mt-3">
          <Col xs={{ order: "last" }}>
            <div class="col-sm">
              <Card style={{ width: "8rem" }}>
                <Card.Img variant="top" src="../h&mlogo.jpg" />
               
              </Card>
            </div>
          </Col>
          

          <Col xs={{ order: "last" }}>
            <div class="col-sm">
              <Card style={{ width: "8rem" }}>
                <Card.Img variant="top" src="../zaralog.jpg" />
               
              </Card>
            </div>
          </Col>

          <Col xs={{ order: "last" }}>
            <div class="col-sm">
              <Card style={{ width: "8rem" }}>
                <Card.Img variant="top" src="../bibalogo.jpg" />
               
              </Card>
            </div>
          </Col>



          <Col xs={{ order: "last" }}>
            <div class="col-sm">
              <Card style={{ width: "8rem" }}>
                <Card.Img variant="top" src="../adidaslogo.jpg" />
               
              </Card>
            </div>
          </Col>

          <Col xs={{ order: "last" }}>
            <div class="col-sm">
              <Card style={{ width: "8rem" }}>
                <Card.Img variant="top" src="../souledstorelogo.jpg" />
               
              </Card>
            </div>
          </Col>

          <Col xs={{ order: "last" }}>
            <div class="col-sm">
              <Card style={{ width: "8rem" }}>
                <Card.Img variant="top" src="../zudiologo.jpg" />
               
              </Card>
            </div>
          </Col>

          <Col xs={{ order: "last" }}>
            <div class="col-sm">
              <Card style={{ width: "8rem" }}>
                <Card.Img variant="top" src="../etsylogo.jpg" />
               
              </Card>
            </div>
          </Col>

          <Col xs={{ order: "last" }}>
            <div class="col-sm">
              <Card style={{ width: "8rem" }}>
                <Card.Img variant="top" src="../westsidelogo.jpg" />
               
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
      
      {/* <div className="mt-5">
        <center>
        <hr className="mx-auto" style={{ width: "1500px" }} />
         
          
        </center>
      </div> */}

      {/* <div class="mt-3">
        <center>
          <h3>BEST OF PRETTY FITS</h3>
          <hr className="mx-auto" style={{ width: "300px" }} />
        </center>
      </div> */}
      <div className="mt-5"></div>

      <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='mb-4'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
            voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          hype.com
        </a>
      </div>
    </MDBFooter>

   
    </>
  );
};
