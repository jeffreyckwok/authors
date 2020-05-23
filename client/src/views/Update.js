import React, { useEffect, useState } from 'react';
import Form from '../components/Form';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

export default props => {
  const { id } = props;
  const [author, setAuthor] = useState();
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/authors/' + id)
      .then(res => {
        setAuthor(res.data);
        setLoaded(true);
      })
  }, [])

  const updateAuthor = author => {
    axios.put('http://localhost:8000/api/authors/' + id, author)
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
      <p>Edit this author</p>
      {errors.map((err, index) => <p key={index}>{err}</p>)}
      {loaded &&
        (
        <>
        <Form
        onSubmitProp={updateAuthor}
        initialName={author.name}
        />
        </>
      )}
    </div>
  )
}
