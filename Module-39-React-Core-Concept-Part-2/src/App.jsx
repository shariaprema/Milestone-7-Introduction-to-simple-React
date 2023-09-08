import './App.css'
import Friends from './Friends';
import Users from './Users';
import Team from './assets/team';
import Counter from './counter';

function App() {

    {/* function for Evenhandling get Multi Type Btn  */}

  function handleClick(){
    alert('Button Clicked');
  }

  const handleClick2 = ()=>{
      alert ('hello There');
  }

  const addToFive = (num)=>{
      alert(num + 5);
  }
//----------------------------------------

  return (
    <>


      <h1>React Core Concept 2</h1>

      {/* Module:39-6 */}
      <Friends></Friends>

       {/* Module:39-5 */}
       <Users></Users>

      <Counter></Counter>
      <Team></Team>
      



{/* ------------------------------------------------- */}
       {/* Multi Type Btn  */}
      <button onClick={handleClick} >Click Me</button>
      <button onClick={handleClick2} >Click-2</button>
      <button onClick={()=>{alert('Third Click') }} >Click-3</button>

      {/* Vejaillahh */}
      <button onClick={()=>{addToFive(3)}} >Click-4</button>

      
     
    </>
  )
}

export default App
