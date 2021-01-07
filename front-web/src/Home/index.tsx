import './styles.css';
import {ReactComponent as MainImage} from './main.svg'
function Home(){
  return(
  <div className="home-container">
    <div className="home-content">
      <div className="home-actions">
        <h1 className="home-title">
          Make your order <br />and we will deliver it <br /> to you!!!
        </h1>
        <h3 className="home-subtitle">
          Choose your order, and in a few minutes, <br />
          we will take it to your door
        </h3>
        <a href="orders" className="home-btn-order">
          PLACE AN ORDER
        </a>
      </div>
      <div className="home-image">
        <MainImage />
      </div>
    </div>
  </div>
  )
}
export default Home;