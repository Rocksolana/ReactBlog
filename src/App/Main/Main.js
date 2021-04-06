import React from 'react'
import DesignerImage from './DesignerImage'
import Designer_item from './Designer_item'
import './main.css'



const Main = () => {
    return (
        <>
     <section classNameName="designers">
        <div classNameName="conteiner">
            <div classNameName="row header-row">
                <div classNameName="col-sm-12">
                    <div classNameName="wrapper">
                        <div classNameName="col-sm-4">
                            <DesignerImage/>
                        </div>
                        <div classNameName="col-sm-8">
                            <Designer_item/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section classNameName="our_mission">
        <div classNameName="conteiner">
            <div classNameName="row header-row">
                <div classNameName="col-sm-12">
                    <div classNameName="designer_item">
                        <div classNameName="take_title">
                            THE BEST SELLERS
                        </div>
                        <div classNameName="red_big_title">
                            Our Latest Feminine Divi Themes & Divi Coaching Themes
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    <section className="take">
        <div className="conteiner">
            <div className="row header-row">
                <div className="col-sm-12">
                    <hr className="hr-line-take">
                    <div className="take_item">
                        <div className="col-sm-5">
                            <img src="images/divitheme-pepper-480x669.png" alt="Logo" className="take_image">
                        </div>
                        <div className="col-sm-7">
                            <div className="designer_item">
                                <div className="red_big_title">
                                    Take Your Website To The Next Level With Divi & And A Divi Child Theme
                                </div>
                                <div className="text_item">
                                    So they said ‘buy a website builder’, it would be easy to DIY your website,
                                    they said. What they didn’t tell you was that building a website isn’t easy.
                                    All this chatter about CSS, styling, branding, layouts – haven’t you got enough
                                    to do building your business without having to learn a new skill? This is where a
                                    Divi Child theme is the answer to your prayers. By purchasing a Divi Child Theme,
                                    you install, upload your content and launch – Yes, it is that simple.
                                    <br>
                                    Our Divi Themes are built from the ground up, so you get an original Divi design
                                    every time. Gone are the days where you have to hand over for your life savings to
                                    get a custom website you envision for your business, only to get a hot mess.
                                    <br>
                                    With our Divi Themes, what you see is what you get and all you have to do is click
                                    here and click there to get your very own unique personal style of branding on your
                                    website.
                                </div>
                                <hr className="hr-line">
                                <div className="take_text">
                                    It’s so easy and quick to have the website you have been dreaming of – just navigate
                                    to
                                    our feminine Divi child themes, select and purchase and you could have your website
                                    up and
                                    running within a couple of hours.
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="designer_item">
                        <div className="take_title">
                            THE BEST SELLERS
                        </div>
                        <div className="red_big_title">
                            Our Latest Feminine Divi Themes & Divi Coaching Themes
                        </div>
                        <hr className="hr-line">
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
    )
}

export default Main