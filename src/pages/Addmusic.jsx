import Navigators_Bar from "./components/Navigators_Bar"
import Header from "./components/Header";


export default function Addmusic() {
  return (
    <div className="container addmusic">
<Header nm={"Add music"}></Header>

<h1>Addmusic</h1>
<Navigators_Bar x={5}/>
    </div>
  )
}
