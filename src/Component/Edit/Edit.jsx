import React from 'react'
import { useParams } from 'react-router-dom';

function Edit(props) {

    console.log(props);

    let { id } = useParams()

    let { data } = props

    return (
        <div>
            <input type="text" placeholder='' />
            <h1>{data[id]?.name}</h1>
        </div>
    )
}

export default Edit