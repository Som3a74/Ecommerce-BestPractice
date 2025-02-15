import { Heading } from "@components/common";
import { Form, Button, Row, Col } from "react-bootstrap";


export default function Register() {
  
  return (
    <>
      <Heading title="User Registration" />
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form>

            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="First Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="lastName" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="confirmPassword" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Email Address">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="email" />
            </Form.Group>

            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>
    </>
  )
}