import './index.css'
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
import Blogs from './components/blogs/Blogs'
import { useState } from 'react'

function App() {

  const [bookmarks, setBookmarks] = useState([])

  const handleAddToBookmarks = Blog =>{
    console.log('add to bookmarks');
  }

  return (
    <>
      <Header></Header>
     <div className='md:flex container mx-auto max-w-7xl text-[#111]'>
     <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs>
     <Bookmarks></Bookmarks>
     </div>
    </>
  )
}

export default App
