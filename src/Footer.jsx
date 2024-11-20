import './App.css'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    
    <div className='footer'>
    <div>
      <p className='about-me'>About Me</p>
      <p className='intro'>Hi I am Luna ,passionate traveler and adventure seeker.
        <br /> After catching the travel bug during my
         first trip abroad,I created this blog to share 
        <br /> my stories, tips, and inspiration with fellow travel enthusiasts around the world.</p>
         </div>
         <p className='intro'>Contact : 9087654321</p>
         <p className='intro'>Email: luna@gmail.com</p>
         <FaFacebookF className='fb-icon2'/>
      <FaInstagram className='insta-icon2' />
      <FaTwitter className='twitter-icon2' />
    <p className='intro'>© 2025 by Beyond Borders. Powered and secured by Wix</p>  
</div>
  )
}

export default Footer