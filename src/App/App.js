import React from 'react'
import '../common/reset.css'
import '../style.css'
import Header from './Header/Header'
import Main from './Main/Main'
import Content from './Content/Content'
import Form from './Form/Form'
import Footer from './Footer/Footer'


const App = () => {
    return (
       <>
        <Header/>
        <Main/>
        <Content/>
        <Form/>
        <Footer/>
       </>
    )
}
export default App