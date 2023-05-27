import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
  return (
    /*
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>Copyright &copy; ProShop</Col>
        </Row>
      </Container>
    </footer>*/
    <footer className="bg-light-gray text-white py-3">
      <Container>
        <Row>
          <Col className="text-left">
            <h6 className="text-white">Accepted Payment Methods</h6>
            <div className="payment-methods">
              <img
                src="visa-logo.png"
                alt="Visa"
                className="payment-icon"
                style={{ width: "80px" }}
              />
              <img
                src="mastercard-logo.png"
                alt="Mastercard"
                className="payment-icon"
                style={{ width: "80px" }}
              />
              <img
                src="paypal-logo.png"
                alt="PayPal"
                className="payment-icon"
                style={{ width: "80px" }}
              />
            </div>
          </Col>
          <Col className="text-right">
            <ul className="footer-links list-unstyled">
              <li className="footer-link-item">
                <a href="/privacy-policy" className="footer-link text-white">
                  Privacy Policy
                </a>
              </li>
              <li className="footer-link-item">
                <a href="/refund-policy" className="footer-link text-white">
                  Refund Policy
                </a>
              </li>
              <li className="footer-link-item">
                <a
                  href="/terms-and-conditions"
                  className="footer-link text-white"
                >
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              src="mcafee.png"
              alt="Mcafee secure payment"
              className="payment-icon"
              style={{ width: "80px" }}
            />
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p className="text-white">
              &copy; {new Date().getFullYear()} Car Services. All rights
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
