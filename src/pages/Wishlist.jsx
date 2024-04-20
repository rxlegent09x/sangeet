import Navigators_Bar from "./components/Navigators_Bar";
import Header from "./components/Header";


export default function Wishlist() {
  return (
    <div className="container wishlist">
<Header nm={"Wishlist"}></Header>
<h1>Wishlist</h1>

<Navigators_Bar x={3}></Navigators_Bar>
    </div>
  )
}
