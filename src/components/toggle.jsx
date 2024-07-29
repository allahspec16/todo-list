import './toggle.css';
import moon from '../images/icon-moon.svg';
import sun from '../images/icon-sun.svg';
const Toggle = (props) => {
  return ( 
    <div className='toggle-container' onClick={props.handleChange}>
    {/* <input type='checkbox' id='check' className='toggle' onChange={props.handleChange} checked={props.isChecked}></input>
      <label htmlFor='check'>Dark-Mode</label> */}
      <img src={props.isChecked? sun :moon}></img>
    </div>
   );
}
 
export default Toggle;