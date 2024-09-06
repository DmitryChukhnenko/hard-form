import React from 'react';
import { useState } from 'react'

function HomePage(props) {
    const [yourData, setYourData] = useState({
        isSize: false,
        size: 37,

        isColor: false,
        color: "#000000",

        isBrand: false,
        brand: "Nike",
    })
    const handleChange = (event) => {
        const { name, value } = event.target;
        setYourData((prevState) => ({ ...prevState, [name]: value }));
        
    }
    return (
        <>
        <h1>Sneakers</h1>
        <form>
            <div><label>
                Size
                <input type="checkbox"
                    onChange={handleChange}
                    value={yourData.isSize} />
                <input type="number" name="size"
                    className={yourData.isSize ? "" : "invisible"}
                    onChange={handleChange}
                    value={yourData.size} />
            </label></div>            
            <div><label>
                Color
                <input type="checkbox"
                    onChange={handleChange}
                    value={yourData.isColor} />
                <input type="color" name="color"
                    className={yourData.isSize ? "" : "invisible"}
                    onChange={handleChange}
                    value={yourData.color} />
            </label></div>
            <div><label>
                Brand
                <input type="checkbox"
                    onChange={handleChange}
                    value={yourData.isBrand} />
                <input type="text" name="brand"
                    className={yourData.isSize ? "" : "invisible"}
                    onChange={handleChange}
                    value={yourData.brand} />
            </label></div>
        </form>
        </>
    )
  }
  
  export default HomePage