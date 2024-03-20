
import './App.css'
import Table from './Component/Table/Table'
import React, { useEffect, useState } from "react";

import axios from "axios";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import View from './Component/View/View';
import Edit from './Component/Edit/Edit';

function App() {

  let [user, setUser] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      console.log(res);
      setUser(res.data)
    }).catch(() => {
      console.log(err);
    })

  }, []);




  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Table data={{ user, setUser }} />} />
          <Route path='/:id' element={<View data={user} />} />
          <Route path='/edit/:id' element={<Edit data={{user,setUser}} />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
