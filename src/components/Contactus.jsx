import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export const Contactus = () => {
  return (
    <>
    <div  style={{width:"700px",border:"2px solid black",marginLeft:"500px",marginTop:"100px"}}>
     <Form style={{margin:"40px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Query</Form.Label>
        <Form.Control type="text" placeholder="Enter Query" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </>
  )
}
