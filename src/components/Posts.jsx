import React, { useContext } from 'react'
import { PostsContext } from '../App'


const Posts = () => {

    const {filterPost} = useContext(PostsContext);

 
    
  return  filterPost.map( el => (
 <div key={el.id}>
     <h1>{el.Title}</h1>
     <p>{el.Description[0].children[0].text}</p>
     <p>{el.Categories.join(" ")}</p>
    

     <img src={el.Image.url} alt={el.Title} /> 

  
     
     
 </div>


  ))}

export default Posts
