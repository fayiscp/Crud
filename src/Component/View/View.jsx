import React from 'react'
import { useParams } from 'react-router-dom'

function View(props) {

    console.log(props);
    let { id } = useParams()

    let { data } = props


    return (
        <div>

            <h1>NAME    :   {data[id].name}</h1> 
            <h1>EMAIL   :   {data[id].email}</h1> 
            <h1>PHONE   :   {data[id].phone}</h1> 
            <h1>WEBSITE :   {data[id].website}</h1> 

        </div>
    )
}

export default View