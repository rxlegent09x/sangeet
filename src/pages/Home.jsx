import { toast } from "react-toastify"
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import { TypeAnimation } from 'react-type-animation';
import { TextField,Button } from "@mui/material";
import Navigators_Bar from "./components/Navigators_Bar";
import {TimeZ} from "./Util";


export default function Home() {

const nav = useNavigate();





  return (


<>
<section className="container home">

<div className="head_of_home">
<img src="https://images.freeimages.com/fic/images/icons/1254/flurry_system/256/music.png?fmt=webp&w=500"></img>
<h1><TypeAnimation
  sequence={[
    'Sangeet',
    1000,
    'ସଙ୍ଗୀତ',
    1000,
    'சங்கித்',
    1000,
    'సంగీత్',
    1000,
    'ಸಂಗೀತ್',
    1000,
    'സംഗീത്',
    1000,
    'サンギット',
    1000,
    '桑吉特',
    1000,
    
  ]}
  speed={50}
  repeat={Infinity}
  style={{fontFamily:"audiowide"}}
/></h1>
<i className="fa fa-user-circle-o" onClick={()=>nav("/account")}></i>
</div>


<h1 className="greed"><span>G</span>ood {TimeZ()}, Guest</h1>


<section className="section_first">

<img src="https://img.freepik.com/premium-photo/cute-lofi-boy-wearing-headphone_985092-2573.jpg"></img>

  <Button color="warning" variant="contained" onClick={()=>nav("/login")}  >Go To Login <i className="fa fa-angle-double-right"></i></Button>

  <p>
  <span style={{fontSize:"2rem"}}>Y</span>ou Can Add,Listen and Delete the songs what ever you want after register or login ...<br/>
  Play Unlimited Free Musics Listen and share your feelings ... Across the All Over World
  </p>
</section>
<br/>
<section className="musics_section">
<h1>Sangeet Suggested You</h1>



</section>






<section className="second_spons">
<h1>Sponser Partners</h1>
<img src="https://i.pinimg.com/originals/ae/84/4e/ae844e959e313cd5fc36f2ba77268661.jpg"></img>
<img src="https://asset.brandfetch.io/idi05GGxoD/idGPAOTrgb.jpeg"></img>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Youtube_Music_icon.svg/2048px-Youtube_Music_icon.svg.png"></img>
<img src="https://play-lh.googleusercontent.com/gUR8xEKvCngapSZGkZUgoNETAYuhhkCr0Npza-lPSjbRCM55zdS0SK_KxBj1tg2RoQ"></img>
<img src="https://blackhole-apk.com/assets/blackholeapk.webp"></img>

</section>

<section className="account">

<footer>

<p >@({new Date().getFullYear()}) All Copyrights Reserving By Rx_LegenT_09x</p>


<section>
<i className="fa fa-facebook"></i>
<i className="fa fa-whatsapp"></i>
<i className="fa fa-github"></i>
<i className="fa fa-instagram"></i>
<i className="fa fa-linkedin"></i>
</section>
<section>

<TextField label="Feed back & helps" color="secondary"
multiline
placeholder="enter your feedback & help related information ..."
>

</TextField>
<Button color="secondary" variant="contained" style={{width:"10rem",marginLeft:"auto"}}><i className="fa fa-send" style={{boxShadow:"0px 0px",fontSize:"2rem"}}></i></Button>

</section>
</footer>

</section>


<Navigators_Bar x={1}/>

</section>

</>
    )
}
