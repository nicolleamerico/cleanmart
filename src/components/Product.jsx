import React from "react";
import DATA from "../Data";
//import {Button} from 'react-bootstrap';

const Product = () => {
  const cardItem = (item) => {
    return (
      <div class="card my-5 py-4" key={item.id} style={{ width: "18rem", height: "24rem" }}>
        <div className="tudo">
          <img src={item.img} class="img-card" alt={item.title} style={{ width: "15rem", height: "15rem" }} />
          <div class="card-body text-center">
            <h5 class="card-title">{item.title}</h5>
            <p className="lead">R${item.price}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="text-dark fw-bold mb-4">Produtos</h1>
            <hr style={{ color: "orangered" }}/>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">{DATA.map(cardItem)}</div>
      </div>
    </div>
  );
};

export default Product;
