import "../styles/productCard.css"


export default function ProductCard(props){
	const {
		addToCartHandler, 
		quantityIncreaseHandler,
		quantityDecreaseHandler,
		details: productDetails,
		productCartDetail
	} = props;

	return (<div 
		className="product" 
		id={`product-${productDetails.id}`}
	>
		<h2>{productDetails.name}</h2>
		<p style={{marginBottom: "5px"}}>{productDetails.price} Rs</p>
		{ !productCartDetail ? 
		<button 
			className="add-to-cart" 
			data-product-id={`${productDetails.id}`} 
			onClick={addToCartHandler}
		>
			Add to Cart
		</button> : 
		<div className="quantityController">
			<button
				data-product-id={`${productDetails.id}`} 
				onClick={quantityDecreaseHandler}
			>-</button>
			<h4>{productCartDetail.quantity}</h4>
			<button
				data-product-id={`${productDetails.id}`} 
				onClick={quantityIncreaseHandler}
			>+</button>
		</div>
		}
	</div>)
}