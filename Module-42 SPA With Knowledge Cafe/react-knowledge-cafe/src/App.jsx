import './index.css'
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
import Blogs from './components/blogs/Blogs'
import { useState } from 'react'

function App() {

  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)// amra number dekhabo r number default 0 thakbe


  const handleAddToBookmarks = (blog) =>{
    const addBookMarks = [...bookmarks, blog];
    setBookmarks(addBookMarks);

    
  }

  const handleMarksAsRead = (id,time)=>{
    setReadingTime(readingTime + time);

    // for Removeing Bookmarks:
    // console.log('removing', id)

    const remainingBookmark = bookmarks.filter(bookmark=> bookmark.id !== id);
    setBookmarks(remainingBookmark);
  }


  
  return (
    <>
        <Header></Header>

     <div className='md:flex container mx-auto max-w-7xl text-[#111]'>
        <Blogs handleAddToBookmarks={handleAddToBookmarks} handleMarksAsRead={handleMarksAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
     </div>

    </>
  )
}



export default App
