import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import Table from './components/Table'

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  useEffect(()=>{
    axios.get("https://randomuser.me/api/?results=200&nat=us").then(({data})=>{
      setUsers(data.results);
      setFilteredUsers(data.results)
    })
  },[])

  const handleFilter = input => {
    //do some filtering on the users state, and change it
    const filtered = users.filter(item=> item.name.first.toLowerCase().includes(input) || item.name.last.toLowerCase().includes(input) || item.email.includes(input) )
    setFilteredUsers(filtered)
  }

  return <>
    <div className="jumbotron">
      <h1 style={{textAlign:"center"}}>Employee Directory</h1>
    </div>
    <div className="container">
      <input onChange={(e)=> handleFilter(e.target.value.toLowerCase())} style={{width:"80%",marginLeft:"10%"}} placeholder="Type in a name to search the directory"/>
      <Table users={filteredUsers}/>
    </div>
  </>
}

export default App;
