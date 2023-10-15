import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  
  const loadData = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
    setData(response.data);
  }

  useEffect(() => {
    loadData();
  }, [])
  return (
    <>
      <ul>
          {data.map((item) => (
          <li key={item.id}>{item.title} <span>{item.id}</span></li>
          ))}
      </ul>
    </>
  )
}

export default App
