import './App.css';
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export const Post = () => {
    
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handlePost = async () => {
    const postData = {
      title,
      body: content,
      userId: 1, 
    };
    
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        const newPost = await response.json();

        const existingPosts = JSON.parse(localStorage.getItem('posts')) || [];
        existingPosts.push(newPost);
        localStorage.setItem('posts', JSON.stringify(existingPosts));
        setTitle('');
        setContent('');
      } else {
        console.error('Failed to post data');
      }
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <div>
        <Header />
        <div className='post-form'>
          <div>
      <textarea className='text-area' name="bio" placeholder='Title, Bio' rows={4} cols={40}
      value={title}
      onChange={(e) => setTitle(e.target.value)}  />
      </div>
        <textarea name="bio" placeholder='Write your Blog' className='textarea2'
        value={content}
        onChange={(e) => setContent(e.target.value)} />
        
        </div>
        <Stack spacing={2} direction="row">
      <Button className='post-button' variant="contained" onClick={handlePost}>Post</Button>
    </Stack>
        {/* <button className='post-button' onClick={handlePost}>Post</button> */}
        <Footer />
    </div>
  )
}
