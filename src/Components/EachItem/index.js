import { useContext, useState } from 'react'
import './index.css'

import {Para, Span} from './styledComponents'
import RestaurantContext from '../../Context/restaurantContext'

const EachItem = props => {
    const {details} = props
    const {dishId, dishImage, dishName, dishPrice, dishAvailability, dishType, dishCalories, dishCurrency, dishDescription, nexturl, addonCat} = details
    // console.log(dishName)

    const [count, setCount] = useState(0)

    // setOrderCount(prevState => ({setOrderCount: prevState.setOrderCount + count}))

    return(
        <RestaurantContext.Consumer>
            {value => {
                const {orderCount, setOrderCount} = value
                console.log(orderCount)
                
                const changeIncreaseCount = event => {
                    setCount(count + 1)
                    setOrderCount(orderCount + 1)
                }

                const changeDecreaseCount = event => {
                    setCount(count - 1)
                    setOrderCount(orderCount - 1)
                }

                
                return (
                    <li className="listContainer" >
                        <div>
                            <div className='typeContainer' >
                                <Para dishType={dishType} ><Span dishType={dishType} ></Span></Para>
                                <h1 className='itemName' >{dishName}</h1>
                            </div>
                            <p className='itemCurrency' >{dishCurrency} {dishPrice}</p>
                            <p className='itemDescription' >{dishDescription}</p>
                            {dishAvailability ? (
                                <div>
                                    <div className='buttonContainer' >
                                        <button className='buttons' onClick={changeDecreaseCount} >-</button>
                                            <p>{count}</p>
                                        <button className='buttons' onClick={changeIncreaseCount} >+</button>
                                    </div>
                                    {addonCat.length > 0 ? (
                                        <p className='custom' >Customization available</p>
                                    ) : undefined}
                                </div>
                            ) : (
                                <>
                                    <p className='notAvail' >Not available</p>
                                </>
                            )}
                        </div>
                        <p className='calories' >{dishCalories} calories</p>
                        <img src={dishImage} alt={dishName} className='itemImg' />
                    </li>
                )
            }}
        </RestaurantContext.Consumer>
    )
}

export default EachItem