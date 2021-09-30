import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export const Individualbots = () => {
    const data=useSelector(state=> state.bots);
    console.log('From Indivualbots'+data);
    return (
        <div className='Individual-Bot'>
            HEY
        </div>
    )
}
