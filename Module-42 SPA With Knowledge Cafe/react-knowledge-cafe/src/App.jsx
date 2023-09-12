import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
import Blogs from './components/blogs/Blogs'

function App() {

  return (
    <>
      <Header></Header>
     <div className='md:flex container mx-auto justify-center items-center'>
     <Blogs></Blogs>
     <Bookmarks></Bookmarks>
     </div>
    </>
  )
}

export default App
