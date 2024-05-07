import { useReducer } from 'react';
import items from './cartData/item'

//global cart reducer
const cartReducer = (cart,action) => {
    switch(action.type){
        case "Add": return [...cart, action.item];
        case "Remove": return cart.filter(cartItem => cartItem.id !== action.item.id);
        default : return cart;
    }
}

const ShoppingCart = ()=>{

    //here setCart is dispatcher 
    const [cart,setCart] = useReducer(cartReducer, [])

    const itemList = items.map( item => 
        <div key={item.id} className='border border-2 border-success my-2 p-2 rounded'> 
            <h2>{item.brand} {item.name}</h2>
            <h3>&#8377; {item.price}</h3>
            <button className='btn btn-outline-primary' onClick={()=>handleAddToCart(item)}>Add to Cart</button>
        </div>
    )

    //event handlers
    const handleAddToCart= (item) => {
        setCart({ type:"Add", item:item})
    }

    const handleRemove= (cartItem) => {
        setCart({ type:"Remove", item:cartItem})
    }

    return(
        <div>
            {itemList}
            <div>
                <h1>Your Shopping Cart </h1>
                <h2>No of Items: {cart.length}</h2>
                <table className='table'>
                    <tbody>
                        {cart.map( cartItem =>                             
                            <tr>
                                <td>{cartItem.name}</td>
                                <td>{cartItem.brand}</td>
                                <td>{cartItem.price}</td>
                                <td><button className='btn-close' title='Remove'
                                    onClick={() => handleRemove(cartItem)}></button></td>
                            </tr>                            
                        )}
                  </tbody>
                </table>
            </div>
        </div>
    )
}

export default ShoppingCart