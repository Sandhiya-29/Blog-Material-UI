import './App.css';
import Header from './Header';
import Footer from './Footer';
import travel from './assets/ae5901bd4fda41009c4cc4a19bb70d05.webp';
import beach from './assets/f969ea5e4ea64a66af55f3cb06895101.webp';
import relax from './assets/5bfb6f_c667d0c9bd634b1aa2b29311795f3c51.webp';

const Travel = () => {
  return (
    <div>T
        <Header />
        <div>
            <p className='aboutme'>Travel</p>
            <p className='para'>Travel is the art of stepping out of the familiar and embracing the unknown. It is about waking up to new landscapes, connecting with people from different cultures, and discovering parts of yourself you didn’t know existed. 
             <img className='travel-img' src={travel} alt="travel" width="1000px" height="500px"/>
            </p>
            <p className='para'>Every journey has something unique to offer, whether it is hiking through a misty forest, tasting exotic dishes, or simply watching a sunset in a far-off place. Travel is a teacher; it challenges perspectives, inspires creativity, and fosters empathy. It’s about more than sightseeing it is about seeing the world through a different lens and feeling connected to something bigger.</p>
            <img className='travel-img2' src={beach} alt="beach" width="1000px" height="500px"/>
            <p className='para'>And with every new adventure, we carry a piece of each place within us. We return home with stories, memories, and sometimes even a new outlook on life. So here’s to travel—to the thrill of the unknown, the beauty of diversity, and the endless joy of exploring this amazing world!
            </p>
            <img className='travel-img3' src={relax} alt="relax" width="900px" height="500px"/>
        </div>
        <Footer />
    </div>
  )
}

export default Travel