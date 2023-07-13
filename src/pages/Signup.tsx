import React, { useState, useRef } from 'react';
import { getAuth,createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

export interface ISignUpProps {}

const SignUp: React.FunctionComponent<ISignUpProps> = (props) => {
  const emailRef = useRef<any>()
  const passwordRef = useRef<any>()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const auth = getAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e:any) => {
      e.preventDefault()
      try {
        setError("")
        setLoading(true)
        await createUserWithEmailAndPassword(auth,emailRef?.current?.value, passwordRef?.current?.value)
        .then(()=> {
          toast("Sign Up Successful");
          navigate('/login')
        })
      } catch {
        setError("Error: Failed to Sign Up")
      }
      setLoading(false)
    }

    return (
      <>
      <Card>
        <Card.Body>
        <ToastContainer />
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
         
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Link to="/login">Go Back</Link>
      </div>
    </>
    );
};

export default SignUp;