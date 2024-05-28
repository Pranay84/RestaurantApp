

import { Component } from "react";
import EachMenuCat from "../EachLink";
import EachItem from "../EachItem";
import './index.css'

import { HiOutlineShoppingCart } from "react-icons/hi";
import RestaurantContext from "../../Context/restaurantContext";

class Home extends Component{
    state = {allData:[], isLoading: false, menuCatId: null}

    componentDidMount(){
        this.getData()
    }

    getCat = id => {
        this.setState({menuCatId: id})
    }

    sortedArray = (data) => {
        const newList = data[0]

        const dataList = {
            restaurantId: newList.restaurant_id,
            restaurantName: newList.restaurant_name,
            restaurantImage: newList.restaurant_image,
            branchName: newList.branch_name,
            nexturl: newList.nexturl,
            tableId: newList.table_id,
            tableMenuList: newList.table_menu_list.map(each => ({
                menuCategory: each.menu_category,
                menuCategoryId: each.menu_category_id,
                menuCategoryImage: each.menu_category_image,
                nexturl: each.nexturl,
                categoryDishes: each.category_dishes.map(each => ({
                    dishId: each.dish_id,
                    dishImage: each.dish_image,
                    dishName: each.dish_name,
                    dishPrice: each.dish_price,
                    dishAvailability: each.dish_Availability,
                    dishType: each.dish_Type,
                    dishCalories: each.dish_calories,
                    dishCurrency: each.dish_currency,
                    dishDescription: each.dish_description,
                    nexturl: each.nexturl,
                    addonCat: each.addonCat.map(each => ({
                        addonCategory: each.addon_category,
                        addonCategoryId: each.addon_category_id,
                        addonSelection: each.addon_selection,
                        nexturl: each.nexturl,
                        addons: each.addons.map(each => ({
                            dishId: each.dish_id,
                            dishAvailability: each.dish_Availability,
                            dishType: each.dish_Type,
                            dishCalories: each.dish_calories,
                            dishCurrency: each.dish_currency,
                            dishDescription: each.dish_description,
                            dishImage: each.dish_image,
                            dishName: each.dish_name,
                            dishPrice: each.dish_price
                        }))
                    }))
                }))
            }))
        }
        this.setState({allData: dataList, isLoading: true})
        
    }

    getData = async () => {
        const url = 'https://run.mocky.io/v3/72562bef-1d10-4cf5-bd26-8b0c53460a8e'
        const response = await fetch(url)
        const data = await response.json()
        if (response.ok === true){
            this.sortedArray(data)
        }
    }

    render(){
        const {allData, isLoading, menuCatId} = this.state
        const {tableMenuList} = allData
        let filteredData
        if (isLoading){
            filteredData = tableMenuList.filter(each => {
                if (each.menuCategoryId === menuCatId){
                    return each
                }
                return null
            })
            // console.log(filteredData[0])
        }
        
        // console.log(filteredData)

        return (
            <RestaurantContext.Consumer>
                {value => {
                    const {orderCount} = value

                    return (
                        <div>
                            <div className="header" >
                                <h1 className="restaurant" >{allData.restaurantName}</h1>
                                <div className="OrdersContainer" >
                                    <p>My Orders</p>
                                    <div>
                                        <p>{orderCount}</p>
                                        <HiOutlineShoppingCart />
                                    </div>
                                </div>
                            </div>
                            {isLoading ? (
                                <div>
                                    <ul className="menuUnorderedList" >
                                        {tableMenuList.map(each => <EachMenuCat details={each} getCat={this.getCat} key={each.menuCategoryId} />)}
                                    </ul>
                                    <div>
                                        {filteredData.length > 0 ? (
                                        <ul className="itemsUnorderedList" >
                                            {filteredData[0].categoryDishes.map(each => <EachItem details={each} key={each.dishId} />) }
                                        </ul>): 
                                        (<div>Loading ...</div>)}
                                    </div>
                                </div>
                            ):(<div>Loading ...</div>)}
                        </div>
                    )
                }}
            </RestaurantContext.Consumer>
        )
    }
}

export default Home