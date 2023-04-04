import React, {useEffect, useState} from "react";
import ProductSection from "./ProductSection";


function ProductFilter(){

    const [tomatoChecked, setTomatoChecked] = useState(false)
    const tomatoUpdate = (event) => {
        console.log("tomato checked", event.target.value)
        setTomatoChecked(!tomatoChecked)
    }

    const [lettuceChecked, setLettuceChecked] = useState(false)
    const lettuceUpdate = (event) => {
        console.log("lettuce checked", event.target.value)
        setLettuceChecked(!lettuceChecked)
    }

    const [flowersChecked, setFlowersChecked] = useState(false)
    const flowersUpdate = (event) => {
        console.log("lettuce checked", event.target.value)
        setFlowersChecked(!flowersChecked)
    }

    return(
        <div>
            <div className="container-fluid">
                <div className="row">
            <span className="col-md-2"><input onChange={tomatoUpdate} checked={tomatoChecked} className="checkbox form-check-input" value="Heirloom Tomato" type="checkbox"></input>Tomato</span>
            <span className="col-md-2"><input onChange={lettuceUpdate} checked={lettuceChecked}  className="checkbox form-check-input" value="Lettuce" type="checkbox"></input>Lettuce</span>
            <span className="col-md-2"><input onChange={flowersUpdate} checked={flowersChecked}  className="checkbox form-check-input" value="Lettuce" type="checkbox"></input>Flowers</span>
                </div>
            </div>
            <div>
            <ProductSection tomato={tomatoChecked} lettuce={lettuceChecked} flowers={flowersChecked}/>
            </div>
        </div>
    )

}

export default ProductFilter;