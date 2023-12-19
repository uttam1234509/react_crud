import React, { useState } from 'react'
export const Login = () => {
    const [inputdata, setinputdata] = useState({
        name: "",
        password: ""
    })
    console.log(inputdata)
    const tender = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setinputdata({ ...inputdata, [e.target.name]: e.target.value })
    }
    const [search, setsearch] = useState([])
    console.log(search)
    const tender2 = (e) => {
        setsearch([...search, inputdata])
    }
    const [update, updatedata] = useState(-1)
    const editdata = (inx) => {
        const editrecord = search.find((item, index) => { return index === inx })
        console.log(editrecord)
        updatedata(inx)
        setinputdata(editrecord)
    }

    const deletedata = (index) => {
        const deleterecord = search.filter((item, idx) => idx !== index)
        console.log(deleterecord)
        setsearch(deleterecord)
    }

    return (
        <div>
            <div style={{ textAlign: "center", backgroundColor: "lightgrey", padding: "30px" }}>
                <label htmlFor='text'>Full Name</label><br />
                <input type='text' id='name' name='name' value={inputdata.name} onChange={e => tender(e)} /><br /><br />
                <label htmlFor='pass'>Password</label><br />
                <input type='password' id='pass' name='password' value={inputdata.password} onChange={e => tender(e)} /><br /><br />
                <button onClick={tender2}>Login</button>
            </div>
            <table className='table table-bordered'>
                <thead>
                    <th>Full Name</th>
                    <th>Password</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </thead>
                <tbody>{
                    search.map((item, index) => {
                        return (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.password}</td>
                                <td><button onClick={() => deletedata(index)}>Delete</button></td>
                                <td><button onClick={() => editdata(index)}>Edit</button></td>
                            </tr>
                        )
                    })
                }</tbody>
            </table>
        </div>
    )
}
