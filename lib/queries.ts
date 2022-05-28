import { gql } from '@apollo/client';

export const GET_MESSAGES = gql`
  subscription Messages {
    messages(order_by: { createdAt: asc }) {
      id
      text
      createdAt
      author {
        id
        avatarUrl
        displayName
      }
    }
  }
`;
