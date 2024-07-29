import { useState } from 'react';
// import cross from '../images/icon-cross.svg';

const Todolist = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };
  if (props.lists === 'checked') {
    console.log('subhanallah')
  }else if (props.lists !== isChecked){
    console.log('alhamdulilah')
  }

  return ( 
    <div className='todolist'>
        <div className='mark' onClick={handleCheckboxClick}>
          <input type='checkbox' checked = {isChecked} className='check' readOnly></input>
          <label htmlFor ='check'></label>
        </div>
        <div>
          <p className={isChecked ? 'checked' : ''}>
          {props.list.name}
          </p>
        </div>
        {/* <div>
          <img src= {cross} className='cross'/>
        </div> */}
    </div>
   
   );
}
 
export default Todolist;