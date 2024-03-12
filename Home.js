import logo from './logo/logopic.jpg';
import './index.css';
import Menu from './Menu';
function Home(){
    return(
        <div className='homepage'>
        <img src={logo} alt='bj'/>
        <h1 className='heading'>Welcome to Chipotle Mexican Grill</h1>
         <Menu></Menu>
        </div>
    )

}
export default Home