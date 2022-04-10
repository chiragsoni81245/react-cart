import "../styles/productGroup.css"
import ProductCard from "../components/ProductCard";

export default function ProductGroup(props){
	const {
		addToCartHandler,
		cartDetails,
		quantityIncreaseHandler,
		quantityDecreaseHandler
	} = props;

	return (<div className="product-group">
		{props.products.map(product=> {
			let productCartDetail = cartDetails.find(
				item=> item.id==product.id
			) 
			return (
			<ProductCard 
				key={product.id}
				addToCartHandler={addToCartHandler}
				quantityIncreaseHandler={quantityIncreaseHandler}
				quantityDecreaseHandler={quantityDecreaseHandler} 
				details={product}
				productCartDetail={productCartDetail}
			/>)
		})}
	</div>)
}