import {useState} from 'react'
import { TextField,Button } from '@mui/material';
import { getQ } from './Util';
import { useNavigate } from 'react-router-dom';
import {toast } from "react-toastify";


export default function Signup() {


  const nav = useNavigate();
  const [data,setData] = useState({
    name : "",
    gmail : "",
    pass : "",
    ans : ""
  });

  const [getq,setq] = useState(getQ());
const qn = getq[0];
const an = getq[1];
const [otp,setOtp] = useState("");
  const [see,setSee] = useState(false);

const [mode,setMode] = useState(1);

const validate=()=>{
    if(an!=data.ans){
      toast.error("Please enter a valid answer .");
      return false;
    }
    if(!(data.gmail.endsWith("@gmail.com") && data.gmail.length>12 && data.gmail.length<=50)){
      toast.error("Please enter a valid gmail id .");
      return false;
    }
    if(!(data.name.trim().length >= 3 && data.name.trim().length <= 25)){
      toast.error("Please enter a valid user name  .");
      return false;
    }
    if(!(data.pass.length >= 3 && data.pass.length <= 9)){
      toast.error("Please enter a valid user pass  .");
      return false;
    }


    toast.success("Info. validation successfully !");
    return true;
}

const signup=()=>{
    if(validate()){
      setMode(2);
    }
   
}


const get_Gotp=()=>{
          
}










  if(mode == 1){
  return (

 <div className="xtx">
          <section className="xtx_cop" style={{padding:"5rem 0rem"}} >
  
  
  
          <div className="register_Container">
            <h1>Signup</h1>
              <img src="https://images.freeimages.com/fic/images/icons/1254/flurry_system/256/music.png?fmt=webp&w=500"></img>
<TextField color='error' label="user name" 
value={data.name}
onChange={(e)=>setData({...data, name: e.target.value})}
/>
<TextField color='error' label="user gmail"
value={data.gmail}
onChange={(e)=>setData({...data, gmail: (e.target.value.trim().toLowerCase())})}

/>
<section><TextField color='error' label="user password" 
type={(see?"text":"password")}
value={data.pass}
onChange={(e)=>setData({...data, pass: e.target.value.trim()})}

/>
<i className='fa fa-eye' onClick={()=>setSee(!see)}></i>
</section>

<TextField color='error' label={`answer : ${qn}`}
type="number"
value={data.ans}
onChange={(e)=>setData({...data, ans: e.target.value})}

></TextField>
<div>
<Button color='error' onClick={()=>nav("/login")}>Login</Button>
<Button  color='error' variant='contained' onClick={()=>signup()} >Signup</Button>
<Button color='error' onClick={()=>nav("/")}><i className='fa fa-music fa-2x'></i></Button>

</div>

</div>
  
  
  </section>


</div>
    
  )
  }
  else{
    return(
    
    <>
    
    <div className="xtx">
          <section className="xtx_cop" style={{padding:"5rem 0rem"}} >
  
  
  
          <div className="register_Container">
            <i className='fa fa-angle-double-left lft fa-2x' onClick={()=>setMode(1)}></i>
            <h1>OTP Validation</h1>
              <img src="https://images.freeimages.com/fic/images/icons/1254/flurry_system/256/music.png?fmt=webp&w=500" style={{marginTop:"-3rem"}}></img>
              <TextField
              label="* OTP"
              color='warning'
                variant="standard"
                value={otp}
                onChange={(e)=>setOtp(e.target.value)}
                type="number"
              >
              </TextField>
              <Button
              color='warning'
              variant='contained'
              style={{marginTop:"2rem"}}
              
              >Verify<i className='fa fa-angle-double-right' style={{fontSize:"2rem",marginLeft:"3rem"}}></i></Button>
              <p style={{color:"grey",marginTop:"1rem",fontSize:"0.7rem",textAlign:"center"}}>*Sangeet.Team send a OTP for verification to your gmail {data.gmail} plase fill and register faster .</p>
    
    </div>
    </section>
    </div>
    </>
    );
  }
}
