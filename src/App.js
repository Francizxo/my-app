import {useState, useEffect} from "react";

function App() {
  const [data, setData] = useState(null)
   useEffect(() => {
     getData();
   }, [setData])

  const getData = async () => {
    try {
       const request = await fetch('https://dummyjson.com/products');
       const response = await request.json();
       
       setData(response);
     } catch (error) {
       console.error(error)
     }
  }

  return (
    <div>
     <h1>Products List</h1>
     
         {data && data.products.map((item) => (
          <div>
            <p key={item.title}>{item.title}</p>
            <p key={item.description}>{item.description}</p>
            <p key={item.price}>{item.price}</p>
            <img src={item.thumbnail} />
          </div>
             
         ))}
     </div>
  );
 }
export default App;
