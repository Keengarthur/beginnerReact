// import ReactDOM from 'react-dom'
// import { Component } from 'react'
// import 'whatwg-fetch'
// import { Provider } from 'react-redux'
// import {propTypes} from 'prop-types'
// import img from './4.jpg'

// import {BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom'
// import { createStore } from 'redux'
// import { connect } from 'react-redux'
import React from 'react'
import reactDom from 'react-dom'
import { render } from 'react-dom'
import {useState,useEffect} from 'react'
import './index.css'
import List from './list'
import data from './data'
const App = ()=>{

  const [user,setUser] = useState(data)
  return <main>
    <section className='container'>
      <h3 className='user'>{user.length} birthdays</h3>
      <List users={user}/>
      <button onClick={()=>setUser([])}>clear user</button>
      
    </section>
    </main>
}

render(<App/>,document.getElementById('root'))



