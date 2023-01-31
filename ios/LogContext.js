import React, {createContext, useReducer} from 'react';

const SET_NAME = 'SET_NAME';
const SET_AGE = 'SET_AGE';
const SET_NUM = 'SET_NUM';

export const personContext = createContext();

const initData = {
  name: '홍길동',
  age: '미상',
  num: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.data,
      };

    case SET_AGE:
      return {
        ...state,
        age: action.data,
      };

    case SET_NUM:
      return {
        ...state,
        num: action.data,
      };
  }
};

const PersonProvider = ({children}) => {
  const [data, contextDispatch] = useReducer(reducer, initData);

  const value = {
    state: {data},
    actions: {contextDispatch},
  };

  return (
    <personContext.Provider value={value}>{children}</personContext.Provider>
  );
};

export default PersonProvider;
