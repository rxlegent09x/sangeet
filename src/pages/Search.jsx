import Navigators_Bar from "./components/Navigators_Bar";
import Header from "./components/Header";



export default function Search() {
  return (
    <div className='container search'>
        <Header nm={"Search"}></Header>

<h1>Search</h1>


<Navigators_Bar x={2}></Navigators_Bar>

    </div>
  )
}
