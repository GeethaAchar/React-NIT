import image from './Images/images.jpeg';
import image1 from './Images/VeganBurrito.jpeg';
import image2 from './Images/BuddhaBowl.jpeg';
import './index.css';
function Dish(){
    return(
        <>
        <div className='dish'>
          <img  style={{ width:'300px',height:'200px'}} src={image} alt='pj'/>
          <h3>Rice Bowl</h3>
          <p>Rs 325</p>
          <button>Order Now</button>
        </div>
        <div className='dish'>
          <img  style={{ width:'300px',height:'200px'}} src={image1} alt='pj'/>
          <h3>Vegan Burrito</h3>
          <p>Rs 325</p>
          <button>Order Now</button>
        </div>
        <div className='dish'>
          <img  style={{ width:'300px',height:'200px'}} src={image2} alt='pj'/>
          <h3>Buddha Bowl</h3>
          <p>Rs 325</p>
          <button>Order Now</button>
        </div>
        </>
    )

}
export default Dish;