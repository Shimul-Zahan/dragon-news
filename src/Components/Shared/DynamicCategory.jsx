import React from 'react'
import { Link } from 'react-router-dom'

const DynamicCategory = ({ catagory }) => {

    const { name, id } = catagory;

    const HandleCategory = () => {
        console.log("clicked")
    }

    return (
        <div>
            <Link onClick={HandleCategory} className="text-lg">{name}</Link>
        </div>
    )
}

export default DynamicCategory