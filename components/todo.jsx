import React from 'react';
import Todolist from './todolist';
const Todo = ({ listToShow }) => {
  return (
    <div className='list2show'>
      <h4>
        {listToShow.map((list, index) => (
        <Todolist key={index} list={list} />
        ))}
      </h4>
    </div>
  );
};

export default Todo;
