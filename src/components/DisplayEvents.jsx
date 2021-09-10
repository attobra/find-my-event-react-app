import React, { useState } from "react";
import { connect } from "react-redux";
import { Container, Row } from "react-bootstrap";
import {
  addAllEvents,
  deleteAllEvents,
  editAllEvents,
} from "../redux/reducer";
import EventItem from "./EventItem";


const mapStateToProps = (state) => {
  return {
    allEvents: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMyEvent: (obj) => dispatch(addAllEvents(obj)),
    deleteMyEvent: (id) => dispatch(deleteAllEvents(id)),
    editMyEvent: (obj) => dispatch(editAllEvents(obj)),
  };
};

const DisplayEvents = (props) => {
  const [sort, setSort] = useState("active");
  return (
    <div className="displayEvents">
      <div className="buttons">

        <button
          onClick={() => setSort("all")}
        >
          All Events
        </button>
      </div>

      <Container>
        <Row>
          {/* for all items */}
          {props.allEvents.length > 0 && sort === "all"
            ? props.allEvents.map((item) => {
                return (
                  <EventItem
                    key={item.id}
                    item={item}
                    deleteMyEvent={props.deleteMyEvent}
                    editMyEvent={props.editMyEvent}
                  />
                );
              })
            : null}
        </Row>
      </Container>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayEvents);