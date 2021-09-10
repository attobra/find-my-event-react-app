import React, {useState} from 'react'
import { connect } from "react-redux";
import { addAllEvents } from '../redux/reducer';
import { Container, Row, Card } from 'react-bootstrap';

const mapStateToProps = (state) => {
  return {
    allEvents: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMyEvent: (obj) => dispatch(addAllEvents(obj)),
  };
};

const Events = (props)=> {

  console.log("props", props);

  const [myEvent, setMyEvent] = useState("");

  const add = () => {
    if (myEvent === "") {
      alert("Enter an event");
    } else {
      props.addMyEvent({
        id: Math.floor(Math.random() * 1000),
        item: myEvent,
      });
      setMyEvent("");
    }
  };

  const handleChange = (e) => {
    setMyEvent(e.target.value);
  };

  return (
    <div className="addAllEvents">
      <h4>Add an Event Here:</h4>
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="event-input"
        value={myEvent}
      />
      <button
      className="add-btn"
      onClick={()=> add()}>
        Add Event
      </button>
      <br />

      <Container>
        <Row>
        {props.allEvents.length >0 &&
        props.allEvents.map((item)=>{
          return <Card key={item.id}>{item.item}</Card>
        })}
        </Row>
      </Container>
    </div>
  );
};


//we can use connect method to connect this component with redux store
export default connect(mapStateToProps, mapDispatchToProps)(Events);