import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import "./main.css";
export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  const auth = getAuth();
  const FETCH_DATA = gql`
    query {
      numbers {
        id
        value
      }
    }
  `;

  return (
    <div className="container">
      <p>Home Page</p>
      <Query query={FETCH_DATA}>
        {({ data, error, loading }: any) => {
          if (error || loading) {
            return (
              <div>
                <p className="title">Loading ....</p>
              </div>
            );
          }
          return (
            <div>
              <p className="title">Current Number :{data?.numbers[0]?.value}</p>
            </div>
          );
        }}
      </Query>
      <button onClick={() => signOut(auth)}>Sign out of Firebase</button>
    </div>
  );
};

export default HomePage;
