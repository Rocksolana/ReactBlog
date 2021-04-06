import React from 'react'
const Header = () =>{
    return (
        <header class="header">
        <div class="dark">
            <div class="conteiner">
                <div class="row header-row">
                    <div class="col-sm-3 col-xs-hidden">
                            <img src="images/logo.png" alt="Logo" class="logo">
                         </div>
                    <div class="col-sm-9">
                        <nav class="navigation hidden-menu">
                            <ul class="menu">
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">Themes</a>
                                </li>
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                                <li>
                                    <a href="#">Services</a>
                                </li>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                                <li>
                                    <a href="#">Cart</a>
                                </li>
                                <li>
                                    <div class="products-count"> </div>
                                </li>
                            </ul>
                        </nav>
                        <div class="nav-mobile-menu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    )
}
export default Header