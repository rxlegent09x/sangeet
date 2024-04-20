import { useNavigate } from "react-router-dom"



export default function Header({nm}) {

const nav = useNavigate();

  return (
    <div className="head_of_home">


<section><i className="fa fa-angle-double-left lft" onClick={()=>nav(-1)}></i>
<img src="https://images.freeimages.com/fic/images/icons/1254/flurry_system/256/music.png?fmt=webp&w=500" className="ico_head" onClick={()=>nav("/")}></img>
</section>

<p className="ttl">{nm}</p>

<i className="fa fa-user-circle-o" onClick={()=>nav("/account")}></i>
    </div>
  )
}

