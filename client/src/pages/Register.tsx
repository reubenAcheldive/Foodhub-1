import React, {useState } from "react";
import { Form, Button } from "react-bootstrap";
import { RegisterAuth } from "../api/NewUserAuth";
import { NewUserAuth } from "../interface/NewUserAuth.model";

function Register() {
  const [val, setVal] = useState<NewUserAuth>({
    firstname: "",
    lastname: "",
    email: "1",
    password: "",
  });

  const handelInputValue = (e: any) => {
    const { name, value } = e.target;
    if (name === "firstname") {
      setVal({ ...val, firstname: value });
      console.log(val);
    
    }
    if (name === "lastname") {
      setVal({ ...val, lastname: value });
      console.log(val);
    }
    if (name === "email") {
      setVal({ ...val, email: value });
      console.log(val);
    }
    if (name === "password") {
      setVal({ ...val, password: value });
      console.log(val);
    }
  };
  const handelSubmit = (e: any) => {
    e.preventDefault();
    if (val) RegisterAuth(val);
  };

  return (
    <div className="Register">
      <div className="col-2">
      <h1>Register</h1>
      <Form onSubmit={handelSubmit}>
       <Form.Group className="mb-3" controlId="formBasicFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control 
        type="firstname" 
        placeholder=" Enter FirstName"
        name="firstname"
        onChange={handelInputValue}
        
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicLastName">
      <Form.Label>Last Name</Form.Label>
     <Form.Control 
      type="lastname"
      placeholder="Enter LastName"
      name="lastname"
      onChange={handelInputValue} />
     </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
       <Form.Control 
       type="email" 
       placeholder="Enter Email"
       name="email"
      onChange={handelInputValue}
       />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control
     type="password" 
     placeholder="Enter Password"
     name="password"
      onChange={handelInputValue}
     />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Confrim Password</Form.Label>
    <Form.Control 
    type="password" 
    placeholder="Confrim Password"
    name="password"
    onChange={handelInputValue}
    />
  </Form.Group>
  <Button variant="success" type="submit">
    Register
  </Button>
</Form>
</div>
</div>
  );
}

export default Register;