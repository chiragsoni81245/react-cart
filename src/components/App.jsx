import {useEffect, useState} from 'react';
import "../styles/App.css";
import NavBar from "./NavBar";
import ProductGroup from './ProductGroup';
import Cart from './Cart';

function App() {

	const [productsDetail, setProductsDetail] = useState([])

	useEffect(()=>{
		//Some api call
		fetch("http://3.23.128.207/api/products").then(response =>{
			response.json().then(data=>{
				setProductsDetail(data);
			})
		})
	}, [])

	const [showCart, setShowCart] = useState(false)
	
	const toggleCart = () => {
		if(showCart){
			setShowCart(false)
		}else{
			setShowCart(true)
		}
	}

	const [cartDetails, setCartDetails] = useState([])
	// Cart Item Template
	// {
	// 	id: 1,
	// 	name: "Product 1",
	// 	price: 100,
	// 	quantity: 10
	// }

	const addToCartHandler = (e) => {
		const btnField = e.target;
		const productId = parseInt(btnField.dataset.productId)
		let product = {...productsDetail.find((product)=>{
			return product.id==productId
		})}
		product.quantity = 1;
		setCartDetails(prevCartDetails => [...prevCartDetails, product]);
	}

	const quantityIncreaseHandler = (e) =>{
		const productId = e.target.dataset.productId;
		const newCartDetails = [...cartDetails];
		const cartItem = newCartDetails.find(item=>item.id==productId);
		cartItem.quantity += 1;
		setCartDetails(newCartDetails);
	}

	const quantityDecreaseHandler = (e) =>{
		const productId = e.target.dataset.productId;
		let newCartDetails = [...cartDetails];
		const cartItem = newCartDetails.find(item=>item.id==productId);
		if(cartItem.quantity==1){
			newCartDetails = newCartDetails.filter(item=>item.id!=productId)
		}else{
			cartItem.quantity -= 1;
		}
		setCartDetails(newCartDetails);
	}

	return (
		<div className="App">
			<NavBar toggleCart={toggleCart}/>
			<div className="content">
				<Cart				
					showCart={showCart}
					cartDetails={cartDetails} 
					addToCartHandler={addToCartHandler} 
					quantityIncreaseHandler={quantityIncreaseHandler}
					quantityDecreaseHandler={quantityDecreaseHandler}
				/>
				<ProductGroup 
					cartDetails={cartDetails} 
					addToCartHandler={addToCartHandler} 
					quantityIncreaseHandler={quantityIncreaseHandler}
					quantityDecreaseHandler={quantityDecreaseHandler}
					products={productsDetail}
				/>
			</div>
		</div>
	);
}

export default App;
