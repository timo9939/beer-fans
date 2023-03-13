import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      username
      email
    }
  }
`;
