import { gql } from "apollo-boost";

const getArticles = gql`
    {
      articles {
        title
        id
        categories {
          title
        }
        event
        membersOnly
        text {
          text
        }
      }
    }
  `;

const getArticlesPreview = gql`
  query articles ($first: Int, $skip: Int) {
    articles (first: $first, skip: $skip) {
      title
      id
      categories {
        title
      }
      event
      membersOnly
      text {
        text
      }
    }
  }  
`;

const getArticle = gql`
query ($id: ID) {
  article (where: {id: $id}) {
    id
    title
    categories {
      title
    }
    event
    membersOnly
    text {
      html
    }
  }
}
`

const getArticlesByTheme = gql`
query ($category: String) {
  articles(where: { categories_some: { title: $category } }) {
    id
    title
    categories {
      title
    }
    event
    membersOnly
    text {
      text
    }
  }
}
`;

const getConference = gql`
query ($membersOnly: Boolean) {
  articles (
    where: {
      AND: [
        { categories_some: { title: "Events" } },
        { event: true },
        { membersOnly: $membersOnly}
      ]
    }
  ) 
  {
    id
    title
    categories {
      title
    }
      event
      membersOnly
    text {
      text
      html
    }
  }
}
`;

const getConstitution = gql`
{
  permanents {
    title
    text {
      html
    }
  }
}`;
  
const idsForLength = gql`
{
  articles {
    id
  }
}
  `;

  export {
    getArticles,
    getArticlesPreview,
    getArticle,
    getArticlesByTheme,
    getConstitution,
    idsForLength,
    getConference
  };