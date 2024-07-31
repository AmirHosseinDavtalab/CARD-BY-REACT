import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="container">
      <CardHeader srcAdress="/Boo.png" name="Boo" />
      <CardBody
        title="Boo is a developer"
        description="he learned many langueges like python , c# , c++, django, js, and react that this card was created by react. that's why this card is very cool ."
      />
      <section className="footer-wrapper">
        <CardFooter BgColor="#ff2c2c" achivment="python" emoji="🤩" />
        <CardFooter BgColor="#5849f1" achivment="django" emoji="🙌" />
        <CardFooter BgColor="#8c14da" achivment="js" emoji="🏆" />
        <CardFooter BgColor="#ff617c" achivment="c++" emoji="🎉" />
      </section>
    </div>
  );
}

function CardHeader(props) {
  return <img className="img" src={props.srcAdress} alt={props.name} />;
}
function CardBody(props) {
  return (
    <div className="content-card">
      <h4>{props.title}</h4>
      <p>{props.description}</p>
    </div>
  );
}
function CardFooter(props) {
  return (
    <section>
      <p
        className="achivment"
        style={{ backgroundColor: props.BgColor, color: "#fbfbfb" }}
      >
        {props.achivment} <span>{props.emoji}</span>
      </p>
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
