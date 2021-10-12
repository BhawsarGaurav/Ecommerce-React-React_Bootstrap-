import React, { Component } from 'react'
import NavBar from './NavBar'
import Header from './Header'
import MainBody from './MainBody'
import Footer from './Footer'
export class Home extends Component {
    render() {
        return (
            <>
              <Header />
              <MainBody />
              <Footer/>
              </>
    
        )
    }
}

export default Home
