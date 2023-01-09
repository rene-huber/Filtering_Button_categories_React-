import ButtonFilters from "./components/ButtonFilters"
import Posts from "./components/Posts"
import React, { useState, useEffect, createContext } from 'react';

export const PostsContext = createContext();

function App() {
  const [data, setData] = useState([]);

  // const fetchData = async () => {
  //   const response = await fetch(`http://localhost:8007/api/posts`);
  //   const data = await response.json();
  //    setData(data.docs);
     
  //   //console.log(movies.docs[0].Description[0].children[0].text)
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);


  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:8007/api/posts/');
      const data = await response.json();
      setData(data.docs);
      // console.log(data)
    }

    fetchData();
  }, []);

  if (data === null) {
    return <p>Loading data...</p>;
  }

const value ={
  data
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
