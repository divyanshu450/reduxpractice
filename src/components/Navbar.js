import React from 'react'
import { Bots } from '../components/Bots'
  
export const Navbar = () => {
    return (
        <div>
            <div className="Container">
                <div className='Dashboard-Items'>
                    DashBoard | Cart-Items 
                    <p>Select the best suited Algorithm</p>
                    <Bots />
                </div>
            </div>
        </div> 
            
    )
}
