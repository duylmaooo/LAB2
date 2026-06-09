import "bootstrap/dist/css/bootstrap.min.css";
import { FaShoppingCart } from "react-icons/fa";
import { Navbar, Nav, Button, Container, Carousel, Row, Col } from "react-bootstrap";
import { useState } from "react";
import sp5 from "./assets/sp5.jpg";
import sp2 from "./assets/sp2.jpg";
import sp4 from "./assets/sp4.jpg";
import ao1 from "./assets/ao1.jpg";
import ao2 from "./assets/ao2.jpg";
import ao3 from "./assets/ao3.jpg";
import ao4 from "./assets/ao4.jpg";
import ao5 from "./assets/ao5.jpg";
import ao6 from "./assets/ao6.jpg";

const products = [
  { id: 1, img: ao1, name: "ao1",    price: "450,000 VND", status: "ao moi1" },
  { id: 2, img: ao2, name: "ao2",   price: "650,000 VND", status: "ao moi2" },
  { id: 3, img: ao3, name: "ao3",   price: "250,000 VND", status: "ao moi3" },
  { id: 4, img: ao4, name: "ao4",  price: "850,000 VND", status: "ao moi4" },
  { id: 5, img: ao5, name: "ao5",     price: "550,000 VND", status: "ao moi5" },
  { id: 6, img: ao6, name: "ao6",   price: "350,000 VND",status: "ao moi6" },
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
        <Row xs={1} md={3} className="g-4">             {/*nho nhat la 1 sp */}
          {products.map((p) => (
            <Col key={p.id}>
              <div className="card h-100">
                <img
                  src={p.img}
                  alt={p.name}
                  style={{ height: "400px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">{p.price}</p>
                  <p className="status">{p.status}</p>
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