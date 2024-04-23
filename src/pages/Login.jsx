import {useState} from 'react'
import { TextField,Button } from '@mui/material';
import { getQ } from './Util';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



export default function Login() {

const nav=useNavigate();

const [data,setData] = useState({
  gmail : "",
  pass : "",
  ans : ""
});
const [getq,setq] = useState(getQ());
const qn = getq[0];
const an = getq[1];
const [see,setSee] = useState(false);

const validate=()=>{
  if(an!=data.ans){
    toast.error("Please enter a valid answer .");
    return false;
  }
  if(!(data.gmail.endsWith("@gmail.com") && data.gmail.length>12 && data.gmail.length<=50)){
    toast.error("Please enter a valid gmail id .");
    return false;
  }

  if(!(data.pass.length >= 3 && data.pass.length <= 9)){
    toast.error("Please enter a valid user pass  .");
    return false;
  }


  toast.success("Info. validation successfully !");
  return true;
}

const login=()=>{
  if(validate()){
    
  }
 
}

  return (
    <div className="xtx">
    <section className="xtx_cop" style={{padding:"5rem 0rem"}} >
    <div className="register_Container">
      <h1>Login</h1>
        <img src="https://images.freeimages.com/fic/images/icons/1254/flurry_system/256/music.png?fmt=webp&w=500"></img>
<TextField color='error' label="user gmail"
value={data.gmail}
type="text"
onChange={(e)=>setData({...data,gmail:e.target.value.trim()})}
/>
<section><TextField color='error' label="user password" 
value={data.pass}
type={(see?"text":"password")}
onChange={(e)=>setData({...data,pass:e.target.value.trim()})}
/>
<i className='fa fa-eye' onClick={()=>setSee(!see)}></i>
</section>

<TextField color='error' label={`answer : ${qn}`} 
value={data.ans}
type="number"
onChange={(e)=>setData({...data,ans:e.target.value})}
></TextField>
<div>
<Button color='error' onClick={()=>nav("/signup")}>Signup</Button>
<Button  color='error' variant='contained' onClick={()=>login()} >Login</Button>
<Button color='error' onClick={()=>nav("/")}><i className='fa fa-music fa-2x'></i></Button>


</div>

</div>


</section>


</div>
  )
}
