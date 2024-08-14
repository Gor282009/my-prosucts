import './App.css';
import Header from './components/Header';
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [isDark, setIsDark] = useState(false)
  const [data, SetData] = useState([]);
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((res) => SetData(res.products));
  }, []);
  return (
    <div className="App" style={{background: isDark? "black":"white", transition:"1s"}}>
        <button className="isDark-btn" onClick={(e) => {
          setIsDark(!isDark);
          
        }}>
          {isDark? "Light Mode" : "Dark Mode"}
        </button>
        {
          data.map((e) => {
            return (
              <div key={e.id} className='home' style={{background: isDark? "black":"white",color:isDark? "white":"black",transition:"1s"}}>
                <h2>{e.name}</h2>
                <p>{e.description}</p>
                <p>${e.price}</p>
                <button className='add'>Add to Cart</button>
                <img src={e.images} alt=""  className='my-img'/>
              </div>
            )
          })
        }
    </div>
  );
}

export default App;
