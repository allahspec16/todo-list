import { useState } from 'react';
import Form from './assets/components/form';
import Todo from './assets/components/todo';
import './App.css';
import Toggle from './assets/components/toggle';
const App = () => {
  const [lists, setLists] = useState([
    { name: 'Complete online Javascript course',id: 1, completed:false},
    { name: 'Jog around the park 5x', id: 2,completed:true },
    { name: '10 minutes meditation', id: 3,completed:false },
    { name: 'Read for 1 hour', id: 4,completed:true },
    { name: 'Pick up groceries', id: 5,completed:false },
    { name: 'Complete Todo App on Frontend Mentor', id: 6 ,completed:true}
  ]) 
  const [newList, setNewList] = useState('')
  const [count, setCount] = useState(lists.length || 0)
  const [isDark, setIsDark] = useState(false)

  // const [showAll, setShowAll] = useState(true)
  // const [isActive, setIsActive] = useState(false)

  const addList = (e) => {
    e.preventDefault();
    const listExists = lists.some(list => list.name === newList);
    if (listExists) {
      alert(`${newList} is already added to Todo List`);
    }else {
    const listObject = {
      name: newList
    };
    setLists(lists.concat(listObject));
    setNewList(''); 
    setCount(count + 1)
  }
}
// if (lists === isChecked) {
//   console.log('jhsdfeuifsdjhkjhs')
// }else if (lists !== isChecked){
//   console.log('alhamdulilah')
// }
  const handleListChange = (e) => {
    setNewList(e.target.value);
  };

  const listToShow = lists.filter(list => list.name.toLowerCase())

  return (
    <div className='app'  data-theme = {isDark ? "dark" : "light"}>

      <div className='centered'>
        <div className='todo-app'>
          <h1>T O D O</h1>
          <div>
          <Toggle isChecked = {isDark} handleChange = {() => setIsDark(!isDark)}/>
        </div>
        </div> 
    
        <div className='form'>
          <Form addList = {addList} newList = {newList} handleListChange = {handleListChange}/>
        </div>
       
        <div className='todo-list'>
          <Todo listToShow = {listToShow}/> 
        </div>

        <div>
          <p>{count} items left</p>
        </div>
      </div>
    </div>
  )
}

export default App;