import ButtonFilters from "./components/ButtonFilters"
import Posts from "./components/Posts"
import React, { useState, useEffect, createContext } from 'react';

export const PostsContext = createContext();

function App() {
  const [post, setPost] = useState([]);
  const [filterPost, setFilterPost] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`https://cms-server.rene-huber.eu/api/posts`);
    const data = await response.json();
     setPost(data.docs);
     setFilterPost(data.docs);
     
    
  }

  useEffect(() => {
    fetchData();
  }, []);



  if (post === null) {
    return <p>Loading data...</p>;
  }

const value ={
  post,
  filterPost,
  setFilterPost
}

  return (
    <PostsContext.Provider value={value}>
    <div className="App">
      <ButtonFilters />
      <Posts />
    </div>
    </PostsContext.Provider>
  )
}

export default App
