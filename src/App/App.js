import React from 'react'
import '../common/reset.css'
import '../style.css'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import Content from './Content/Content'


const App = () => {
    return (
       <>
        <Header/>
        <Main/>
        <Content/>
        <Footer/>
       </>
    )
}
export default App