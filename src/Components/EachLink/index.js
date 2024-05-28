import { useState } from 'react'

import {CatMenuButton} from './styledComponents'

const EachMenuCat = props => {
    const {details, getCat} = props
    // console.log(details)
    const [selected, setSelected] = useState(false)

    const selectCat = () => {
        getCat(details.menuCategoryId)
        setSelected(true)
    }

    return (
            <li id={details.menuCategoryId}>
                <CatMenuButton onClick={selectCat} selected={selected} >{details.menuCategory}</CatMenuButton>
            </li>
    )
}

export default EachMenuCat