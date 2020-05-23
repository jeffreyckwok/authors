import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
export default props => {
  const { initialName, onSubmitProp } = props;
  const [ name, setName ] = useState(initialName);

  const onSubmitHandler = e => {
    e.preventDefault();
    onSubmitProp({name});
  }

  return (
    <div>
    <form onSubmit={onSubmitHandler}>
      <p>
        <label>Name</label>
        <input type="text"
               name="name" value={name}
               onChange={(e)=>setName(e.target.value)}/>
      </p>
      <button onClick={e=>{navigate('/')}}>Cancel</button> <input type="submit"/>
    </form>
    </div>
  )
}
