import React, { Fragment, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Image,
  Badge,
  Button,
  Card,
} from "react-bootstrap";
import { FaStar } from "react-icons/fa";

const DetailCard = (props) => {
  const {
    title,
    buttons,
    imageUrl,
    rating,
    category,
    description,
    rowWithMultipleValues,
    rowWithSingleValues,
  } = props;

  return (
    <Container className="text-dark">
      <Row>
        <Col md={4} className="mb-3">
          <Image
            src={imageUrl}
            className="img-fluid mb-4 rounded shadow-lg"
            alt={title}
          />
          {buttons ? (
            <div className="text-center">
              <Button variant="danger" className="mr-3">
                <FaStar /> Rate It
              </Button>
              <Button variant="success">Watch Now</Button>
            </div>
          ) : (
            <></>
          )}
        </Col>
        <Col md={8}>
          <h1 className="text-center mb-4 text-light">{title}</h1>
          <h5 className="mb-3">
            <Badge variant="primary">{rating}</Badge>{" "}
            <Badge bg="warning" text="dark">
              {category}
            </Badge>
          </h5>
          <p className="text-justify text-light">{description}</p>
          <Card className="mt-4 shadow-lg">
            <Card.Body>
              {rowWithSingleValues?.map((data, index) => {
                return (
                  <Fragment key={index}>
                    <h5>{data.name}</h5>
                    <hr />
                    <p>{data.text}</p>
                  </Fragment>
                );
              })}
              {rowWithMultipleValues?.map((data, index) => {
                return (
                  <Fragment key={index}>
                    {" "}
                    <h5>{data.name}</h5>
                    <hr />
                    {data?.data?.length > 0 ? (
                      <p>
                        {data.data.map((linkItem, linkIndex) => {
                          if (linkItem.url) {
                            return (
                              <Link
                                className="text-dark"
                                key={linkIndex}
                                to={linkItem.url}
                              >
                                {linkIndex == 0 ? "" : ", "}
                                {linkItem.text}
                              </Link>
                            );
                          } else {
                            return `${linkIndex == 0 ? "" : ", "}${
                              linkItem.text
                            }`;
                          }
                        })}
                      </p>
                    ) : (
                      <></>
                    )}
                  </Fragment>
                );
              })}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default DetailCard;
