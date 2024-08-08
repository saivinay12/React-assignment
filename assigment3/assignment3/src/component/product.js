import {useState,useEffect} from 'react'
import axios from 'axios';

function Product()
{
    const [products,setProducts]=useState([])

    useEffect(() => {

        console.log('Fetching data from http://localhost:3000/products');
        axios.get("http://localhost:3004/products")
          .then(response => {
            console.log('Data fetched successfully:', response.data);
            setProducts(response.data);
          })
          .catch(error => {
            console.error('Fetch error:', error);
          });
      }, []);
      
return(
    <div className="App">
      <table style={{borderCollapse:'collapse', width: '100%'}}>
        <thead>
          <th style={{ border: '1px solid black',padding: '8px',textAlign: 'left'}}>
            ID
          </th>
          <th style={{ border: '1px solid black',padding: '8px',textAlign: 'left'}}>
            ProductName
          </th>
          <th style={{ border: '1px solid black',padding: '8px',textAlign: 'left'}}>
            Quantity
          </th>
          <th style={{ border: '1px solid black',padding: '8px',textAlign: 'left'}}>
            Price
          </th>
        </thead>
        <tbody>
          { products.map((item,index)=>(

         
          <tr key={index}>
            <td  style={{ border: '1px solid black',padding: '8px',textAlign: 'left'}}>
              {item.id}
            </td>
            <td style={{ border: '1px solid black',padding: '8px',textAlign: 'left'}}>
              {item.productName}
            </td>
            <td  style={{ border: '1px solid black',padding: '8px',textAlign: 'left'}}>
              {item.Quantity}
            </td>
            <td  style={{ border: '1px solid black',padding: '8px',textAlign: 'left'}}>
              {item.Price}
            </td>


          </tr>
           ))
}
          
        </tbody>
      </table>
     
    </div>
  
)

}
export default Product