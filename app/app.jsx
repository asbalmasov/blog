const ReactDOM = require("react-dom/client");
const React = require("react");
const Header = require("./components/header.jsx");
const Article = require("./components/article.jsx");
  
const header = " Статья №1";
const article = "Тут должен быть текст первой статьи!";
  
ReactDOM.createRoot(
    document.getElementById("app")
)
.render(
  <div>
    <Header text={header} />
    <Article content={article} />
  </div>
);
