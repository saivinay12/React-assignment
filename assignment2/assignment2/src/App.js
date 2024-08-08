import logo from './logo.svg';
import './App.css';

function App() {
  const data=[
    {
      id:1,
      productName:'Moto G5',
      Quantity:2,
      Price:'RS 13000'
    },
    {
      id:2,
      productName:'Racold Geyser',
      Quantity:3,
      Price:'RS 6000'


    },
    {
      id:3,
      productName:'Dell Television',
      Quantity:4,
      Price:'RS 50000'
    }


  ];


  return (
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
          { data.map((item,index)=>(

         
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
  );
}

export default App;
