import './App.css';
import Header from './Header';
import Footer from './Footer';
import aboutme from './assets/90cf860d8e3548fdb4808f676ee3e05d.avif';
const About = () => {
  return (
    <div>
        <Header />
        <div>
            <p className='aboutme'>About Me</p>
            </div>
            <div className='about-para'>
            <p className='para'>Hey there! I am Luna a passionate traveler, storyteller, and tech enthusiast who 
                loves exploring new places and sharing the journey along the way. When I’m not working as a Frontend 
                Developer, you’ll probably find me planning my next adventure or capturing moments in a new city. 
                From bustling metropolises to tranquil hidden gems, every place I visit adds a new chapter to my 
                travel story.For me, travel is about more than just visiting famous landmarks. I love diving into the heart of each destination, getting to 
                know the culture, meeting locals, and tasting authentic cuisine. I believe that the best travel experiences
                 happen off the beaten path those spontaneous moments when you stumble upon a quaint café, a breathtaking view, or a friendly conversation with a local.
                 With a background in tech, I also enjoy exploring how travel and technology intersect. Whether it’s finding the best travel apps, using digital tools to navigate unfamiliar places, or capturing perfect shots to share, tech enhances my travel experience. I bring a bit of my digital world along for the ride, balancing my love for the outdoors with a few handy tools.
                 I hope this blog inspires you to explore, wander, and find joy in the journey—whether it’s to a nearby city or a faraway island. Let’s discover the world, one adventure at a time!

  </p>
           <img src={aboutme} alt="about me"  className='about-image' width="300px" height="350px"/>
            </div>
        <Footer />
    </div>
  )
}

export default About