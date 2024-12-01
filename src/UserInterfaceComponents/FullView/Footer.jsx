import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'; // Importing random icons

const Footer = () => {
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");

  // Function to generate random colors
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Change background color every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundColor(getRandomColor());
    }, 3000);
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <footer style={{ backgroundColor, transition: 'background-color 2s ease', padding: '40px 0', color: 'black' }}>
      <Container fluid className='footerContainer'>
        <Row>
          {/* Left side: Contact Us and Social Icons */}
          <Col xs={12} md={6} lg={8} className="d-flex flex-column justify-content-center text-center">
            <h5>Contact Us</h5>
            <p className='emailStyle'>Email: <a href="mailto:tsrohithfsd@gmail.com" style={{ textDecoration: 'none', color: 'black' }}><b>tsrohithfsd@gmail.com</b></a></p>

            {/* Social Icons */}
            <div className="social-icons">
              <FaTwitter className="social-icon" />
              <FaFacebook className="social-icon" />
              <FaInstagram className="social-icon" />
              <FaLinkedin className="social-icon" />
              <FaGithub className="social-icon" />
            </div>

            {/* Instagram Link */}
            <p><a to="https://www.instagram.com/kagero_ryuzan/profilecard/?igsh=MTB2anFubGR1eDhrbw==" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black' }}></a></p>
          </Col>

          {/* Right side: Feedback Form with Name, Email, Phone, and Feedback */}
          <Col xs={12} md={6} lg={3} className="d-flex flex-column justify-content-center text-center">
            <h5>Feedback</h5>
            <Form action="mailto:tsrohithfsd@gmail.com" method="post" enctype="text/plain">
              {/* Name Input */}
              <Form.Group>
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" name="Name" placeholder="Enter your name" required />
              </Form.Group>

              {/* Email Input */}
              <Form.Group>
                <Form.Label>Your Email</Form.Label>
                <Form.Control type="email" name="Email" placeholder="Enter your email" required />
              </Form.Group>

              {/* Phone Number Input */}
              <Form.Group>
                <Form.Label>Your Phone Number</Form.Label>
                <Form.Control type="tel" name="Phone" placeholder="Enter your phone number" required />
              </Form.Group>

              {/* Feedback Input */}
              <Form.Group>
                <Form.Label>Your Feedback</Form.Label>
                <Form.Control type="text" name="Feedback" placeholder="Enter your feedback" required />
              </Form.Group>

              {/* Submit Button */}
              <Button variant="primary" type="submit">Send Feedback</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
