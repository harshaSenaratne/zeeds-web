import React, { useState, useRef } from 'react';
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

export interface ILoginPageProps {}

const Login: React.FunctionComponent<ILoginPageProps> = (props) => {
  const emailRef = useRef<any>()
  const passwordRef = useRef<any>()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const auth = getAuth();
    const navigate = useNavigate();

    const  handleSubmit = async (e:any) => {
      e.preventDefault()
      try {
        setError("")
        setLoading(true)
        await signInWithEmailAndPassword(auth,emailRef?.current?.value, passwordRef?.current?.value)
        .then(()=> {
          toast("User Signed In");
          navigate('/')
        })
      } catch {
        toast("Failed to log in");
      }
      setLoading(false)
    }

    return (
      <>
      <Card>
        <Card.Body>
        <ToastContainer />
          <h2 className="text-center mb-4">Log In</h2>
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
              Log In
            </Button>
          </Form>
         
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
    );
};

export default Login;