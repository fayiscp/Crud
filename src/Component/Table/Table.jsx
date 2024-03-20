

import { Link, useNavigate } from 'react-router-dom'
import './Table.css'

function Table(props) {
    
    let { data } = props
    let { user, setUser } = data
    let navigate = useNavigate()


    let removeItem = (id) => {

        let res = confirm('do you want to delete?')

        if (res) {
            let newArr = user.filter((obj, i) => {

                if (i != id) {
                    return obj
                }
            })

            setUser(newArr)
        }
    }

    let viewData = (id) => {

        navigate(`/${id}`)
    }

    let  editData = (id) => {
        navigate(`/edit/${id}`)
    }

    return (
        <div className='table-container'>

            <table border='1px'>
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>USERNAME</th>
                        <th>VIEW</th>
                        <th>EDIT</th>
                        <th>DELETE</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        user.map((obj, index) => {
                            return (

                                <tr key={index}>
                                    <td>{obj.name}</td>
                                    <td>{obj.email}</td>
                                    <td>{obj.username}</td>
                                    <td>
                                        
                                        <button onClick={() => { viewData(index) }}>VIEW</button>
                                    </td>
                                    <td>
                                        <button onClick={() =>{ editData(index) }}>EDIT</button>
                                    </td>
                                    <td>
                                        <button onClick={() => { removeItem(index) }}>DELETE</button>
                                    </td>
                                </tr>

                            )
                        })
                    }

                </tbody>
            </table>

        </div>


    )
}

export default Table
