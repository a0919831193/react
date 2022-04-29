// import React, { useState } from 'react';
import App from "../App";



const initialState = {count: 0, page: true};

function reducer(state, action) {
  switch (action.type) {
    case 'change':
        console.log(state);
      return Object.assign({}, state, {page:!state});
    
      case 'decrement':
      return {count: -1};
    default:
      throw new Error();
  }
}

export {initialState, reducer};
