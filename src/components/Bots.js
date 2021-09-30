import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { Individualbots } from './Individualbots'

export const Bots = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.bots);
    console.log(data)
    // const viewalgo=(event)=>
    // {
    //     event.preventDefault();
    //     <Link to="/" />
    //     dispatch({
    //         type:
    //     })
    // }
   
    return (
        <div className='Bot-Container'>
            {data.map((D) => {
                return (
                    <>
                        <div className='Bot-Name'>{D.bot}</div>
                        <div className='Index-value'>Index: {}</div>
                        <div className='CAGR'>CAGR : {D.cagr}%</div>
                        <div className='Button-Area'>
                            <Link to='/Botdetails' exact>
                                <button >View Algo</button>
                                </Link> <br />
                                {/* <Switch>
                                    <Route path='/Individualbots.js' exact >< Individualbots/></Route>
                                </Switch> */}
                            <button>Buy</button>
                        </div>
                    </>)
            })}


        </div>
    )
}
