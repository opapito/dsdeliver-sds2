import './styles.css';
import StepsHeader from './StepsHeader';
import ProductsList from './ProductsList';
import { useEffect, useState } from 'react';
import { Product, OrderLocationData } from './types';
import { fetchProducts, saveOrder } from '../api';
import OrderLocation from './OrderLocation';
import OrderSummary from './OrderSummary';
import Footer from '../Footer';
import { checkIsSelected } from './helpers'
import { toast } from 'react-toastify';
import { css } from "@emotion/core";
import BounceLoader from "react-spinners/BounceLoader";
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
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


function Orders(){
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
  const totalPrice = selectedProducts.reduce((sum, item) => {
    return sum + item.price;
  }, 0);
  const [loading, setLoading] = useState<boolean>();
  const [color, setColor] = useState("#FF0000");

  useEffect(()=>{
    setLoading(true);
    fetchProducts()
      .then(response =>{
        setProducts(response.data);
        setLoading(false);

      }) // ".data" does not correspond to a field in our database. It is a convention of axios to returning data
      .catch(err => {
        toast.warning('Error about listing products');
        console.log(err);
      })
  },[]);

  const handleSelectProduct = (product: Product) => {
    const isAlreadySelected = checkIsSelected(selectedProducts, product);
  
    if (isAlreadySelected) {
      const selected = selectedProducts.filter(item => item.id !== product.id);
      setSelectedProducts(selected);
    } else {
      setSelectedProducts(previous => [...previous, product]);
    }
  }

  const handleSubmit = () => {
    const productsIds = selectedProducts.map(({ id }) => ({ id }));
    const payload = {
      ...orderLocation!,
      products: productsIds
    }
  
    saveOrder(payload)
      .then((response) => {
        toast.error(`Order placed! Nº ${response.data.id}`);
        setSelectedProducts([]);
    })
      .catch(() => {
        toast.warning('Error in placing order');
      })
  }


  return(
    <>
      <div className="orders-container">
        <StepsHeader />
        {loading
        ? 
          <div className="sweet-loading">
            <BounceLoader color={color} css={override} loading={loading} />
          </div>
        :
          <ProductsList 
            products={products}
            onSelectProduct={handleSelectProduct}
            selectedProducts={selectedProducts}
          />        
        }
        <OrderLocation onChangeLocation={location => setOrderLocation(location)}/>
        <OrderSummary
          amount={selectedProducts.length}
          totalPrice={totalPrice}
          onSubmit={handleSubmit}
        />
      </div>
        <Footer />
    </>
  )
}
export default Orders;