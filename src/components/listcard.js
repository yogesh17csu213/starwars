import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, ListGroup } from "react-bootstrap";
import "../assets/css/card.css";
const ListCard = (props) => {
  const { color, heading, title, url, body, rowWithSingleValues } = props;

  return (
    <Col md={3}>
      <Card
        bg={color.toLowerCase()}
        key={color}
        text={color.toLowerCase() === "light" ? "dark" : "white"}
        style={{ width: "18rem" }}
        className="m-2"
      >
        {heading ? (
          <Card.Header className="card-header">{heading}</Card.Header>
        ) : (
          <></>
        )}
        <Card.Body>
          {title ? (
            <Link
              className={color.toLowerCase() === "light" ? "dark" : "light"}
              to={url ? url : "#"}
            >
              <Card.Title>{title}</Card.Title>
            </Link>
          ) : (
            <></>
          )}
          {body ? <Card.Text>{body}</Card.Text> : <></>}
          <ListGroup pill="true">
            {rowWithSingleValues?.map((item, index) => {
              return (
                <ListGroup.Item
                  key={index}
                  className="d-flex justify-content-around align-items-start "
                >
                  <Row>
                    <Col>{item.heading}</Col>
                    <Col>{item.text}</Col>
                  </Row>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default ListCard;
