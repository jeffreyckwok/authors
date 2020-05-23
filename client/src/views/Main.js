import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import AuthorList from '../components/AuthorList';

export default () => {
  const [authors, setAuthors] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(()=> {
    axios.get('http://localhost:8000/api/authors')
      .then(res=>{
        console.log(res.data);
        setAuthors(res.data);
        console.log(authors);
        setLoaded(true);
      });
  }, [])

  const removeFromDom = authorId => {
    const updatedAuthors = authors.filter(author => author._id !== authorId);
    setAuthors(updatedAuthors);
    console.log(authors);
    console.log(updatedAuthors);
  }

  return (
    <div>
      <Link to={"/new"}>Add an author</Link>
      {loaded && <AuthorList authors={authors}/>}
    </div>
  )
}
