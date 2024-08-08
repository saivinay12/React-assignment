import React from 'react'
import {BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom'

import About from './component/about'
import Product from './component/product'
import AddProduct from './component/addproduct'

function Main()
{
    return(
        <Router>
            <div>
                <nav>
                    <ul style={{ listStyleType: 'none',display:'flex',justifyContent:'space-evenly'}}>
                        <li>
                            <Link to ='/about'>About</Link>
                            
                        </li>
                        <li>
                            <Link to='/product'>Product</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/product' element={<Product/>}/>
                    <Route path='/addproduct' element={<AddProduct/>}/>
                  
                </Routes>
            </div>
        </Router>


    )
    
}
export default Main