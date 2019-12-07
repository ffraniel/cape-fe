import { gql } from "apollo-boost";

const getArticles = gql`
    {
      articles {
        title
        id
        category {
          title
        }
        text {
          html
        }
      }
    }
  `;

  const getArticlesPreview = gql`
  {
    articles {
      title
      id
      category {
        title
      }
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
    text {
      text
    }
  }
}
`

const getArticlesByTheme = gql`
query ($category: CategoryWhereInput) {
  articles (where: {category_every: $category}) {
    id
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

const getConstitution = gql`
  {
    permanents {
      title
      text {
        html
      }
    }
  }`;

  export {
    getArticles,
    getArticlesPreview,
    getArticle,
    getArticlesByTheme,
    getConstitution
  };