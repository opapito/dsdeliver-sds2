import './styles.css';
import StepsHeader from './StepsHeader';
import ProductsList from './ProductsList';
import { useEffect, useState } from 'react';
import { Product } from './types';
import { fetchProducts } from '../api';

/*
(1) Installing react-router: 
  npm install react-router-dom

(2) As we use typescript in our project, it is necessary to install the types for react-router-dom: 
  npm install @types/react-router-dom

(3) As we need to fetch data from backend, we chose to use the Axios package:
  npm install axios

********************  
Componente lifecycle
******************** 
useEffect receives two parameters: [<a function>, and <a dependence list>]. 
If the dependence list parameter is present, effect will only activate if the values in the list change.
An empty dependency list means the function passed as a parameter can be started without the need to wait for any dependency.

*/

function Orders(){
  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(()=>{
    fetchProducts()
      .then(response => setProducts(response.data)) // ".data" does not correspond to a field in our database. It is a convention of axios to returning data
      .catch(err => console.log(err))
  },[]);

  return(
    <div className="orders-container">
      <StepsHeader />
      <ProductsList products={products} />
    </div>

  )
}
export default Orders;