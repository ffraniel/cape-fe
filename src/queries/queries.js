import { gql } from "apollo-boost";

const getArticles = gql`
    {
      articles {
        title
        id
        category {
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
      category {
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
    category {
      title
    }
    event
    membersOnly
    text {
      text
    }
  }
}
`

const getArticlesByTheme = gql`
query ($category: String) {
  articles(where: { category_some: { title: $category } }) {
    id
    title
    category {
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
        { category_some: { title: "events" } },
        { event: true },
        { membersOnly: $membersOnly}
      ]
    }
  ) 
  {
    id
    title
    category {
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