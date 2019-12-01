import { gql } from "apollo-boost";

const getArticles = gql`
    {
      articles {
        title
        category {
          title
        }
        text {
          text
        }
      }
    }
  `;

  export {
    getArticles
  };