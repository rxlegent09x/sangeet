import {useState} from 'react'
import { TextField,Button } from '@mui/material';
import { getQ } from './Util';
import { useNavigate } from 'react-router-dom';



export default function Signup() {


  const nav = useNavigate();

  return (

 <div className="xtx">
          <section className="xtx_cop" style={{padding:"5rem 0rem"}} >
  
  
  
          <div className="register_Container">
            <h1>Signup</h1>
              <img src="https://images.freeimages.com/fic/images/icons/1254/flurry_system/256/music.png?fmt=webp&w=500"></img>
<TextField color='error' label="user name"/>
<TextField color='error' label="user gmail"/>
<section><TextField color='error' label="user password" type={"password"}/>
<i className='fa fa-eye'></i>
</section>

<TextField color='error' label={`answer : ${getQ()[0]}`} ></TextField>
<div>
<Button color='error' onClick={()=>nav("/login")}>Login</Button>
<Button  color='error' variant='contained' >Signup</Button>

</div>

</div>
  
  
  </section>


</div>
    
  )
}
