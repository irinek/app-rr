import React from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "Tytuł artykułu 1",
    author: "John Doe",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, eligendi. Animi omnis alias odio placeat? Blanditiis, deleniti, nesciunt, unde est doloremque praesentium molestias iure ullam a laborum placeat labore suscipit?"
  },
  {
    id: 2,
    title: "Tytuł artykułu 2",
    author: "John Doe",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, eligendi. Animi omnis alias odio placeat? Blanditiis, deleniti, nesciunt, unde est doloremque praesentium molestias iure ullam a laborum placeat labore suscipit?"
  },
  {
    id: 3,
    title: "Tytuł artykułu 3",
    author: "John Doe",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, eligendi. Animi omnis alias odio placeat? Blanditiis, deleniti, nesciunt, unde est doloremque praesentium molestias iure ullam a laborum placeat labore suscipit?"
  },
  {
    id: 4,
    title: "Tytuł artykułu 4",
    author: "John Doe",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, eligendi. Animi omnis alias odio placeat? Blanditiis, deleniti, nesciunt, unde est doloremque praesentium molestias iure ullam a laborum placeat labore suscipit?"
  }
];

const HomePage = () => {
  const articlesList = articles.map(article => (
    <Article key={article.id} {...article} />
  ));
  return <div className="home">{articlesList}</div>;
};

export default HomePage;
