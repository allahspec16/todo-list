const Form = (props) => {
  return ( 
    <div>
      <form onSubmit={props.addList} className="form-input">
        <div className="circle">
          <p></p>
        </div>
        <div className="input">
          <input value={props.newList} onChange={props.handleListChange} placeholder="Create a new todo..."/>
        </div>
      </form>
    </div>
   );
}
 
export default Form;