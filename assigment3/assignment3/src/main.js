
import React from 'react'
import {BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom'

import About from './component/about'
import Product from './component/product'

function Main()
{
    return(
        <Router>
            <div>
                <nav>
                    <ul>
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
                  
                </Routes>
            </div>
        </Router>


    )
    
}
export default Main