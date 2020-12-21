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
  query articles($first: Int, $skip: Int) {
    articles(first: $first, skip: $skip) {
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

const getArticlesPreviewB = gql`
  query articles($first: Int, $after: String) {
    articles(first: $first, after: $after, orderBy: createdAt_DESC) {
      author
      createdAt
      updatedAt
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
      images {
        url
      }
    }
  }
`;

const getArticlesByThemeB = gql`
  query($category: String, $first: Int, $after: String) {
    articles(
      where: { categories_some: { title: $category } }
      first: $first
      after: $after
      orderBy: createdAt_DESC
    ) {
      author
      createdAt
      updatedAt
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
      images {
        url
      }
    }
  }
`;

const getArticle = gql`
  query($id: ID) {
    article(where: { id: $id }) {
      author
      createdAt
      updatedAt
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
      images {
        url
      }
    }
  }
`;

const getArticlesByTheme = gql`
  query($category: String, $first: Int, $skip: Int) {
    articles(
      where: { categories_some: { title: $category } }
      first: $first
      skip: $skip
    ) {
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

const getArticlesByIDList = gql`
  query($ids: [ID!]!) {
    articles(where: { id_in: $ids }) {
      author
      createdAt
      updatedAt
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
      images {
        url
      }
    }
  }
`;

const getEvents = gql`
  query($membersOnly: Boolean) {
    events(where: { AND: [{ membersOnly: $membersOnly }] }) {
      createdAt
      updatedAt
      id
      title
      membersOnly
      text {
        text
        html
      }
      images {
        url
      }
      date
    }
  }
`;

const getEvent = gql`
  query($id: ID) {
    event(where: { id: $id }) {
      createdAt
      updatedAt
      id
      title
      membersOnly
      text {
        text
        html
      }
      images {
        url
      }
      date
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
  }
`;

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
  getEvents,
  getEvent,
  getArticlesPreviewB,
  getArticlesByThemeB,
  getArticlesByIDList,
};
