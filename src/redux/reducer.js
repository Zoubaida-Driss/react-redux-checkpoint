import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  FILTER_TASK,
  HANDLE_FILTER_CHANGE,
} from "./actions-type";

const initialState = {
  data: [
    {
      id: Math.random(),
      name: "finish my project",
      date: "12/11/2022",
      description: "i want to finish the last part of the project",
      done: true,
    },
    {
      id: Math.random(),
      name: "buy new things",
      date: "22/10/2022",
      description: "t-shirts and jeans",
      done: true,
    },
    {
      id: Math.random(),
      name: "buy gift",
      date: "10/11/2022",
      description: "buy gift to my friend",
      done: false,
    },
    {
      id: Math.random(),
      name: "sport",
      date: "14/10/2022",
      description: "go to the gym today",
      done: false,
    },
  ],

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        data: [...state.data, action.payload],
      };
    case DELETE_TASK:
      return {
        data: state.data.filter((el) => el.id !== action.payload),
      };
    case EDIT_TASK:
      return {
        //{...el,...action.payload}:modifier les changement
        data:state.data.map(el=>el.id===action.payload.id?{...el,...action.payload}:el),
      };

    // case HANDLE_FILTER_CHANGE:
    //   if (
    //     action.payload.toLocaleLowerCase().includes("done".toLocaleLowerCase())
    //   ) {
    //     console.log("true");
    //     return {
    //       data: state.data.filter((el) => el.done === true),
    //     };
    //   } else {
    //     return {
    //       data: state.data,
    //     };
    //   }

    default:
      return state;
  }
};

export default reducer;
