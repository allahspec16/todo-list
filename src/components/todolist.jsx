import { useEffect, useState } from 'react';
// import cross from '../images/icon-cross.svg';

const Todolist = (props) => {
  const { item, lists, setLists } = props

  function handleCompleted() {
    const updatedLists = lists.map((listItem) => {
      if (listItem.completed === item.completed) {
        return { ...listItem, completed: !listItem.completed };
      }
      return listItem;
    });
    setLists(updatedLists);
  }


  return ( 
    <div className='todolist'>
        <div className='mark' onClick={handleCompleted}>
          <input type='checkbox' checked = {""} className='check' readOnly></input>
          <label htmlFor ='check'></label>
        </div>
        <div>
          <p className={props.item.completed ? 'checked' : ''}>
          {props.item.name}
          </p>
        </div>
        {/* <div>
          <img src= {cross} className='cross'/>
        </div> */}
    </div>
   
   );
}
 
export default Todolist;