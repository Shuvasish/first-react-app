import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const person = {
    name: "Shuvasish Talukder Shuvo",
  };

  const products = [
    { pName: "Photoshop", price: "$99.99" },
    { pName: "Illustrator", price: "$49.99" },
    { pName: "Premier Pro", price: "$39.99" },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <Count></Count>
        <User></User>
        {products.map((pro) => {
          console.log(pro.pName);
          return <Product name={pro.pName} price={pro.price}></Product>;
        })}
      </header>
    </div>
  );
}

function User() {
  const [users, setUsers] = useState([]);
  useEffect(async () => {
    try {
      const a = await fetch("https://jsonplaceholder.typicode.com/users");
      const b = await a.json().then((data) => setUsers(data));
      // console.log(b);

      // console.log(users);
    } catch (err) {
      console.error(err);
    }
    // .then((data) => setUsers(data));
  }, []);
  // console.log(users);
  return (
    <div>
      <h1>Dynamic users: </h1>
      <ul>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

function Count() {
  const [count, setCount] = useState(0);
  const handleCount = () => setCount(count + 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

function Product(props) {
  const productStyle = {
    border: "1px solid gray",
    borderRadius: "5px",
    backgroundColor: "lightgray",
    height: "200px",
    width: "200px",
    float: "left",
  };
  return (
    <div style={productStyle}>
      <h2>{props.name}</h2>
      <h5>{props.price}</h5>
      <button>Bye now</button>
    </div>
  );
}

function Products(props) {
  const divStyle = {
    width: "300px",

    // height: "300px",
    background: "yellow",
    border: "2px solid red",
    color: "gray",
    margin: "10px",
  };
  return (
    <div style={divStyle}>
      <img src="props.src" alt="" />
      <h4>{props.heading}</h4>
      <h3>{props.price}</h3>
      <p>{props.title}</p>
      <a href="{props.link}">{props.details}</a>
      <small>{props.conditions}</small>
      <button>Bye now</button>
    </div>
  );
}

function Person(props) {
  console.log(props);
  return (
    <div
      style={{
        color: "white",
        border: "2px solid red",
        padding: "10px ",
        margin: "10px",
        borderRadius: "5px",
      }}
    >
      <p>
        my name is <span className="link">{props.fullName}</span>
      </p>
      <h2>I am trying to develop my {props.course} skills</h2>
    </div>
  );
}

export default App;
