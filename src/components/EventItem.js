import React, { useRef } from "react";
import { Col, Card, Button } from "react-bootstrap";
import { AiFillEdit } from "react-icons/ai";
import {IoClose } from "react-icons/io5";

const EventItem = (props) => {

  const { item, editMyEvent, deleteMyEvent } = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      //here 13 is key code for enter key
      editMyEvent({ id, item: value });
      inputRef.current.disabled = true;
    }
  };
  return (
    <Col
      xs={12}
      md={6}
      lg={4}
      key={item.id}
      className="card"
    >
      <Card>
        <Card.Body>
      <textarea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
      />
      <div className="btns">
        <Button  onClick={() => changeFocus()}>
          {" "}<AiFillEdit />{" "}
        </Button>
        <Button
          style={{ color: "red" }}
          onClick={() => deleteMyEvent(item.id)} >

          {" "}<IoClose /> {" "}
        </Button>
      </div>
      </Card.Body>
      </Card>
    </Col>
  );
};

export default EventItem;