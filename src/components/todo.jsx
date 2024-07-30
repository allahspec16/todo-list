import React from 'react';
import Todolist from './todolist';
const Todo = ({ TodoItems, lists, setLists }) => {
  return (
    <div className='list2show'>
      <h4>
        {TodoItems.map((item, index) => (
          <Todolist key={index} item={item} lists={lists} setLists={setLists} />
        ))}
      </h4>
    </div>
  );
};

export default Todo;
