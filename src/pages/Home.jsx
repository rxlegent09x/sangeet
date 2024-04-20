import { toast } from "react-toastify"
import {useNavigate} from "react-router-dom";
import {useState} from "react";


import Navigators_Bar from "./components/Navigators_Bar";




export default function Home() {

const nav = useNavigate();





  return (


<>
<section className="container">

<div className="head_of_home">
<img src="https://images.freeimages.com/fic/images/icons/1254/flurry_system/256/music.png?fmt=webp&w=500"></img>
<h1>ସଙ୍ଗୀତ</h1>
<i className="fa fa-user-circle-o" onClick={()=>nav("/account")}></i>
</div>


<Navigators_Bar x={1}/>

</section>

</>
    )
}
