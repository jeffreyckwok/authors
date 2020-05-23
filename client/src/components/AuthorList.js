import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';

export default props => {
  const { authors, setAuthors } = props;

  useEffect(() => {
    axios.get('http://localhost:8000/api/authors')
      .then(res=> setAuthors(res.data))
  }, [])

  const removeFromDom = authorId => {
    console.log(authorId);
    const updatedAuthors = authors.filter(author => author._id != authorId);
    setAuthors(updatedAuthors);
  }

  return (
    <div>
      {authors.map((author, index)=>{
        return (
          <div key={index}>
            <p>{author.name}</p>
            <Link to={"/edit/" + author._id}><button>Edit</button></Link>
            <DeleteButton authorId={author._id} successCallback={()=>removeFromDom(author._id)}/>
          </div>
        )
      })}
    </div>
  )
}
