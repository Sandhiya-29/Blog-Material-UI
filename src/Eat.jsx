import './App.css';
import Header from './Header';
import Footer from './Footer';
import eat from './assets/5bfb6f_ea37f67cad544b348df9f3d0ff40f282.webp';
import eat2 from './assets/e74ada189a6b4b21badde4860665a1ef.webp';
import eat3 from './assets/b819819803e24f53891d300c471ed80b.webp';

const Eat = () => {
  return (
    <div>
        <Header />
        <div>
            <p className='aboutme'>Eat</p>
            <p className='para'>Food isnt just about sustenance it is a gateway to culture, connection, and creativity. With every bite, we get a glimpse into the traditions, climate, and history of the place the food comes from. The spices, flavors, and techniques all tell a story, and eating becomes an experience of discovery. 
             <img src={eat} alt=" eat"width="1000px" height="500px"  className='travel-img'/>
             <p className='para'>Whether it is street food from a bustling market, a homemade dish shared with friends, or an experimental recipe in your own kitchen, eating brings people together and nourishes both body and soul. There a joy in trying new flavors, the comfort of familiar dishes, and the thrill of uncovering unexpected taste combinations.
</p>
           <img src={eat2} alt="eat" width="1000px" height="500px" className='travel-img'/>
           <p className='para'>And let’s not forget the power of food to connect us. A meal shared is an invitation for stories and laughter, a universal language that brings strangers together and deepens bonds with loved ones. So here’s to savoring each meal, exploring new cuisines, and embracing the joy of eating—one delicious bite at a time!</p>
        <img src={eat3} alt="eat" width="1000px" height="500px" className='travel-img' />
          </p>
        </div>
        <Footer />
    </div>
  )
}

export default Eat