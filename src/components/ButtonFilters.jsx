import { useContext, useState } from "react";
import {categories} from "../components/untils.jsx"
import { PostsContext } from "../App";


function ButtonFilters() {
const [tabActive, setTabActive] = useState("all")
const { post , setFilterPost} = useContext(PostsContext)

const handleClickFilter = (value) =>{
  setTabActive(value);
  const filterPost = post.filter(post => post.Categories.includes(value))
  console.log(filterPost)

  if(value === "All") {
    setFilterPost(post);
  } else {
    setFilterPost(filterPost);
  }

}
  return (
    <div className="btn_filter">
      {categories.map((item) => (
        <button key={item.value}
        onClick={()=> handleClickFilter(item.value)}
        >
        {item.label}</button>
      ))}
    </div>
  );


}

export default ButtonFilters

