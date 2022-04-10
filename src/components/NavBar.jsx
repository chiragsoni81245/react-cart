import "../styles/navBar.css"
import cartIcon from "../static/cart-icon.png"

export default function(props){
	return (
		<nav className="navbar">
			<h3>My-Cart</h3>
			<button type="button" className="cart-btn" onClick={props.toggleCart}>
				<img src={cartIcon}/>
			</button>
		</nav>
	)
}



