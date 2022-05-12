import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Rating from "../components/Rating";

function Product({ product }) {
  return (
    <div>
      <Card className=" my-3 border-2 border-info">
        
        <Card.Header className="p-0 mt-3 text-center">
        
        <Card.Title as="p" className="mb-0">
            <strong>{product.name}</strong>
          </Card.Title>
        </Card.Header>

        <Card.Body className="p-0 mt-3">
          
          <Card.Text as="div" className="mb-1 ml-1 px-2">
          <p>{product.description}</p>
          </Card.Text >
          <Card.Text as="div" className="mb-1 ml-1 px-2">€{product.price}</Card.Text>
          <Link to={`/products/${product._id}`}>
        <Button variant="outline-info px-4 py-1 mt-3 text-center">+</Button>
        </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Product;
