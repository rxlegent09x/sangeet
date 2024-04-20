import {useNavigate} from "react-router-dom";



export default function Navigators_Bar({x=1}){
    const nav = useNavigate();
    
  const clr = {
    color:"black"
  };
  
    return (
  
  
  
      <>
      <div id="foot_bar">
  
  <section style={x==1?clr:{}} ><i className="fa fa-home" onClick={()=>nav("/")} ></i><p>Home</p></section>
  <section style={x==2?clr:{}} ><i className="fa fa-search" onClick={()=>nav("/search")} ></i><p>Search</p></section>
  <section style={x==5?clr:{}}><i className="fa fa-add" onClick={()=>nav("/addmusic")} ></i><p>Add Music</p></section>
  <section style={x==3?clr:{}} ><i className="fa fa-heart" onClick={()=>nav("/wishlist")} ></i><p>Wishlist</p></section>
  <section style={x==4?clr:{}} ><i className="fa fa-leaf" onClick={()=>nav("/leafshorts")} ></i><p>Leaf Shorts</p></section>
  
      </div>
      
      
      </>
    )
  
  
  
  
  
  }