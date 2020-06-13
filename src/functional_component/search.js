import React,{useState, useContext,useEffect} from "react";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import "../css/search.css"
import { BlogContext } from "../App";
import { Link,useHistory } from "react-router-dom";
const Search = () => {
   const blogContext = useContext(BlogContext);
   const history = useHistory();
   const[search,setSearch] = useState('');
   const[placeholder,setPlaceholder] = useState('');

   useEffect(() => {
      setPlaceholder(blogContext.blogState.searchWord);
    }, [blogContext.blogState.searchWord]);

    return ( 
 <div className="search-bar">
  <div className="p-inputgroup">
  
   <InputText value={search}
   onKeyDown={e=>{
      if(e.key === 'Enter'){
         blogContext.blogDispatch({type:'SET_SEARCH',searchWord:e.target.value})
         history.push(`/home/${e.target.value}`)
      }
   }}
   onChange={e=>setSearch(e.target.value)} 
   placeholder={placeholder}/>
  
     <Link to={`/home/${search}`}>
     <Button onClick={e => {blogContext.blogDispatch({type:'SET_SEARCH',searchWord:search})}} icon="pi pi-search"/>
     </Link>
     {blogContext.blogState.current === 'search'?
     <div className="colored-line" />
     :
     <div/>
     }
     </div>
        </div>
     );
}
 
export default Search;