import Header from "./components/Header"
import { TextField,Button } from "@mui/material"
import { useNavigate } from "react-router-dom";

export default function Account() {



const User_Details = ()=>{
  const nav = useNavigate();

  return (<>
  <section>
<TextField
label="User name"
color="warning"
readOnly
value="nothing"
></TextField>

<TextField
label="Gmail id"
color="warning"
readOnly
value="nothing"
></TextField>

<TextField
label="Join time"
color="warning"
readOnly
value="nothing"></TextField>

<TextField
label="Upload count"
color="warning"
readOnly
value="0"
></TextField>

<section className="xbtns">
<Button color="warning" variant="contained" >Logout</Button>
<Button color="primary" variant="contained" onClick={()=>nav("/signup")}>Signup</Button>
    <Button color="success" variant="contained" onClick={()=>nav("/login")}>Login</Button></section>
</section></>

);

}





  return (<>
    <Header nm={"Account"}/>
    <div className="container account">
       
    <User_Details></User_Details>


    
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

    </div>



    </>
  )
}
