import React from 'react';

export default (props) => <table className="table mt-3">

    <thead>
        <tr>
            <th scope="col"></th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Gender</th>
            <th scope="col">Age</th>
        </tr>
    </thead>
    <tbody>
        {props.users.map(item => {
            console.log(item)
            return <tr key={item.email}>
                <th><img src={item.picture.thumbnail} /></th>
                <td>{item.name.first}</td>
                <td>{item.name.last}</td>
                <td>{item.email}</td>
                <td>{item.cell}</td>
                <td>{item.gender}</td>
                <td>{item.dob.age}</td>
            </tr>
        })}
    </tbody>
</table>