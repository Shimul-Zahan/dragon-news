import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../../Context/ContextAuth';

const DynamicCategory = ({ catagory }) => {

    const { name, id } = catagory;
    const { setNewsCatagory } = useContext(MyContext);
    // console.log(setNewsCatagory)

    const HandleCategory = () => {
        console.log("clicked")
    }

    return (
        <div>
            <Link onClick={() => setNewsCatagory(id)} className="text-lg">{name}</Link>
        </div>
    )
}

export default DynamicCategory