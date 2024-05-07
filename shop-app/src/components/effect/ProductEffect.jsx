import { useEffect, useState } from "react"

const ProductEffect = () => {

    const [products, setProducts] = useState([])

    const PRODUCT_API_URL = "/assets/data/product.json"    
    //const PRODUCT_API_URL = "https://serverhost:port/product_api"  //real time API call
   
    useEffect( ()=>{
        //setup function
        //use fetch (AJAX) API to get data from backend server (call RestFull web service)
        
        fetch(PRODUCT_API_URL,{
            method:"Get", //send request using http method GET
            headers:{ //request  header configuration 
                'accept': 'application/json'
            }
        } ) // pass server URL & configure request headers
        .then( response => {
            if(response.ok)
                return response.json()
            else if(response.status == "404")
                return response.json()
            else 
                throw Error(`server error: ${response.status}`)
        }) // get the response object from server 
        .then(resData => setProducts(resData) ) //if response successful, then get response data
        .catch( err => console.error(err)) //handle server error, if any
    }, [products]); //dependancies as state of component - products

    //rendering logic
    return(
        <div className="container">
            <table className="table table-striped table-secondary">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Brand</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(p => <tr key={p.id}>
                        <td>{p.name}</td>
                        <td>{p.brand}</td>
                        <td>{p.price}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default ProductEffect