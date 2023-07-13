import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import './config/config';
import AuthRoute from './components/AuthRoute';
import 'react-toastify/dist/ReactToastify.css';
import { ApolloProvider } from 'react-apollo';
import createApolloClient from './apollo'

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
    return (
        <ApolloProvider client={createApolloClient('')}>
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <AuthRoute>
                            <HomePage />
                        </AuthRoute>
                    }
                />
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<SignUp/>} />
            </Routes>
        </BrowserRouter>
        </ApolloProvider>
    );
};

export default Application;