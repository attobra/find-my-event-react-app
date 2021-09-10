import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
//createSlice function takes 1 object having 3 parameters:
//1.name of the slice function
//2.initial state
//3.all reducer logic inside reducers {} object
const addMyEventReducer = createSlice({
  name: "allEvents",
  initialState,
  reducers: {
    //here we will write our reducer
    //We have created 1 action to Add all Events
    addAllEvents: (state, action) => {
      state.push(action.payload);
      return state;
    },
    //we create another action to delete the Events
    //it will filter the items whose id name is same as action payload
    deleteAllEvents: (state, action) => {
      return state.filter((item)=> item.id !== action.payload);
    },
    //we create another action to edit the events
    //it will check if id is the same as passed in action.payload
    //it will return all other properties of the item and change the text of events with the passed value
    editAllEvents: (state, action) => {
      return state.map((myEvent) => {
        if (myEvent.id === action.payload.id) {
          return {
            ...myEvent,
            item: action.payload.item,
          };
        }
        return myEvent;
      });
    },

  },

});
//we export addAllEvents, deleteAllevents and editAllEvents
// as action from addMyEventReducer
export const { addAllEvents, deleteAllEvents, editAllEvents, } = addMyEventReducer.actions;
//we export reducer function from addMyEventReducer
export const reducer = addMyEventReducer.reducer;