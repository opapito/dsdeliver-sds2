import './styles.css';
import StepsHeader from './StepsHeader';

/*
(1) Installing react-router: 
  npm install react-router-dom

(2) As we use typescript in our project, it is necessary to install the types for react-router-dom: 
  npm install @types/react-router-dom
*/

function Orders(){
  return(
    <div className="orders-container">
      <StepsHeader />
    </div>

  )
}
export default Orders;