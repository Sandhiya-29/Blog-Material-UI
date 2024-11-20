import './App.css'
import Header from './Header';
import Footer from './Footer';
import banner from './assets/5bfb6f_26f1a5c736e544e09c63c82a4c792645~mv2_d_3839_1306_s_2.webp';
import travel from './assets/5bfb6f_9f2519d5fc2d41f990a10dd92eb8658d.webp';
import eat from './assets/5bfb6f_ea37f67cad544b348df9f3d0ff40f282.webp';
import relax from './assets/5bfb6f_c667d0c9bd634b1aa2b29311795f3c51.webp';
import beach from './assets/ae5901bd4fda41009c4cc4a19bb70d05.webp';
import pineapple from './assets/f969ea5e4ea64a66af55f3cb06895101.webp';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom'; 

function App() {
  
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(storedPosts);
  }, []);

  return (
    <>
      <div className='blog'>
        <Header />
        <div className="banner-container">
      <img src={banner} alt="banner" className="banner-image" />
      <p className="travelblog">Travel Blog</p>
      <p className="beyondborders">Beyond Borders</p>
    </div>
    <div>
      <p className='travel-des'>Travel is the movement of people between distant geographical locations,
        <br />this travel
        helps in gathering of information, visiting people, volunteer travel for charity, <br />
        migration to begin life somewhere.</p>
    </div>
    <div className="content-image">
      <div className="image-container">
        <img src={travel} alt="travel" width="300px" height="300px" />
        <Link to="/travel" className="text travel">Travel</Link>
      </div>
      <div className="image-container">
        <img src={eat} alt="eat" width="300px" height="300px" />
        <Link to="/eat" className="text eat">Eat</Link>
      </div>
      <div className="image-container">
        <img src={relax} alt="relax" width="300px" height="300px" />
        <p className="text relax">Relax</p>
      </div>
   </div>
   <div className='content-container'>
         <p className='feature-types'>As featured in </p>
         <p className='feature'>travel blog</p>
         <p className='feature'>PlaneTour</p>
         <p className='feature'>World Tour</p>
         <p className='feature'>Sky Cloud</p>
   </div>
   <div>
    <img className='beach-img' src={beach} alt="beach" width="1000px" height="450px" />
    <img className='beach-img' src={pineapple} alt="pineapple" width="1000px" height="450px" />
   </div>
   <div className='post-list'>
          <h2>Latest Posts</h2>
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <div key={index} className='post'>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            ))
          ) : (
            <p>No posts available</p>
          )}
        </div>
   <Footer />
      </div>
    </>
  )
}

export default App
