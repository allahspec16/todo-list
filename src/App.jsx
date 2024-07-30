import { useEffect, useState } from 'react';
import Todo from './components/todo';
import './App.css';
import Toggle from './components/toggle';
const App = () => {
  const [isDark, setIsDark] = useState(false);
  const [input, setInput] = useState('');

  const [lists, setLists] = useState(function() {
    const storedList = localStorage.getItem("todo-list");
    return storedList ? JSON.parse(storedList) : []
  });

  const listLength = lists.filter(item => item.completed === false).length; // derived state
  
  useEffect(function() {
    localStorage.setItem("todo-list", JSON.stringify(lists));
  }, [lists]);


  function handleSubmit(e) {
    e.preventDefault();

    if(!input) {
      alert('An item needs to be entered 😊');
    }

    const newItem = {
      name: input, id: Math.trunc(Math.random() * 1000000), completed: false,
    }
    setLists(prevLists => [...prevLists, newItem]);
    setInput("");
  }

  return (
    <div className='app'  data-theme = {isDark ? "dark" : "light"}>
      <div className='centered'>
        <div className='todo-app'>
          <h1>T O D O</h1>
          <div>
          <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)}/>
        </div>
        </div> 
    
        <div className='form'>
          <form onSubmit={handleSubmit} className="form-input">
            <div className="circle"><p></p></div>
            <div className="input">
              <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Create a new todo..."/>
            </div>
          </form>
        </div>
       
        <div className='todo-list'>
          <Todo TodoItems={lists} lists={lists} setLists={setLists} /> 
        </div>

        <div>
          <p>{listLength} items left</p>
        </div>
      </div>
    </div>
  )
}

export default App;






/*

[
    { name: 'Complete online Javascript course',id: 1, completed:false},
    { name: 'Jog around the park 5x', id: 2,completed:true },
    { name: '10 minutes meditation', id: 3,completed:false },
    { name: 'Read for 1 hour', id: 4,completed:true },
    { name: 'Pick up groceries', id: 5,completed:false },
    { name: 'Complete Todo App on Frontend Mentor', id: 6 ,completed:true}
  ]

  */