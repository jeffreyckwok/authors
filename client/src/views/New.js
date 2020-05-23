import React, { useEffect, useState } from 'react';
import Form from '../components/Form';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

export default props => {
  const { id } = props;
  const [author, setAuthor] = useState();
  const [errors, setErrors] = useState([]);

  const createAuthor = author => {
    axios.post('http://localhost:8000/api/authors/', author)
    .then(res=>console.log(res))
    .then(res=>{navigate('/')})
    .catch(err=>{
      const errorResponse = err.response.data.errors;
      const errorArr= [];
      for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message)
      }
      setErrors(errorArr);
    })
  }

  return (
    <div>
      <Link to={"/"}>Home</Link>
      <p>Add a new author:</p>
      {errors.map((err, index) => <p key={index}>{err}</p>)}
      <Form
        onSubmitProp={createAuthor}
        initialName=""
      />
    </div>
  )
}
