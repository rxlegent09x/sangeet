import Navigators_Bar from "./components/Navigators_Bar"
import Header from "./components/Header";



export default function Leafshorts() {
  return (
    <div className='container leafshorts'>
<Header nm={"Leaf shorts"}></Header>
<h1>Leafshorts</h1>


<Navigators_Bar x={4}/>
    </div>
  )
}
