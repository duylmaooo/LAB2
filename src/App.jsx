import "bootstrap/dist/css/bootstrap.min.css";
import { FaShoppingCart } from "react-icons/fa";
import { Navbar, Nav, Button, Container, Carousel, Row, Col } from "react-bootstrap";
import { useState } from "react";
import sp5 from "./assets/sp5.jpg";
import sp2 from "./assets/sp2.jpg";
import sp4 from "./assets/sp4.jpg";
import spx1 from "./assets/spx1.jpg";
import spx2 from "./assets/spx2.jpg";
import spx3 from "./assets/spx3.jpg";
import spx4 from "./assets/spx4.jpg";
import spx5 from "./assets/spx5.jpg";
import spx6 from "./assets/spx6.jpg";

const products = [
  { id: 1, img: spx1, name: "tuong ot",    price: "450,000 VND" },
  { id: 2, img: spx2, name: "binh sieu toc",   price: "650,000 VND" },
  { id: 3, img: spx3, name: "May xay",   price: "250,000 VND" },
  { id: 4, img: spx4, name: "May ep",  price: "850,000 VND" },
  { id: 5, img: spx5, name: "Boi chien",     price: "550,000 VND" },
  { id: 6, img: spx6, name: "Binh nuoc",   price: "350,000 VND" },
];

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [added, setAdded] = useState({});

  const handleAddToCart = (id) => {
    setCartCount((prev) => prev + 1);
    setAdded((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <>
      
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">🌿 SHOP CUA DUY</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Products</Nav.Link>
              <Nav.Link href="#">Men</Nav.Link>
              <Nav.Link href="#">Women</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
            <Nav className="align-items-center">
              <Button variant="success">
                <FaShoppingCart /> Cart ({cartCount})
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Carousel>
        <Carousel.Item>
          <img src={sp5} alt="slide1"/>
          <Carousel.Caption>
            <h3>FASHION COLLECTION 2026</h3>
            <p>Discover the latest fashion trends</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={sp2} alt="slide2"/>
          <Carousel.Caption>
            <h3>SUMMER SALE UP TO 50%</h3>
            <p>Enjoy special discounts</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={sp4} alt="slide3"/>
          <Carousel.Caption>
            <h3>NEW ARRIVALS</h3>
            <p>Explore our newest clothing collection</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      
      <Container className="my-4">
        <h2 className="text-center mb-4">Our Products</h2>
        <Row xs={1} md={3} className="g-4">
          {products.map((p) => (
            <Col key={p.id}>
              <div className="card h-100">
                <img
                  src={p.img}
                  alt={p.name}
                  className="card-img-top"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">{p.price}</p>
                  <button
                    type="button"
                    className={`btn mt-auto ${added[p.id] ? "btn-secondary" : "btn-success"}`}
                    onClick={() => handleAddToCart(p.id)}
                    disabled={added[p.id]}
                  >
                    {added[p.id] ? "✓ Added to Cart" : "Add to Cart"}
                  </button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      
      <footer>
        <p className="footer">Duong Duy Anh</p>
        <p className="footer">MSSV: HE201161</p>
        <p className="footer">Lớp: DE-333</p>
        <p className="footer">Email: duya47421@gmail.com</p>
      </footer>
    </>
  );
}

export default App;