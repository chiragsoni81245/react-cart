import "../styles/cart.css"
import ProductGroup from "./ProductGroup"

export default function Cart(props){
	const {
		addToCartHandler,
		cartDetails,
		quantityIncreaseHandler,
		quantityDecreaseHandler,
		showCart
	} = props;

	let totalPrice = 0;
	cartDetails.forEach(item=>{
		totalPrice += item.price*item.quantity
	})

	return (<div id="cart" className={showCart ? "show" : ""}>
		{ !cartDetails.length==0 ? (
		<>
			<div className="cartContent">
				<ProductGroup 
					cartDetails={cartDetails} 
					addToCartHandler={addToCartHandler} 
					quantityIncreaseHandler={quantityIncreaseHandler}
					quantityDecreaseHandler={quantityDecreaseHandler}
					products={cartDetails}
				/>
				<div className="billingDetails">
					<h4>Total Price: {totalPrice}</h4>
				</div>
			</div>
		</>
		) : <h2 style={{textAlign: "center"}}>No items in cart...</h2> }
		
	</div>)
}