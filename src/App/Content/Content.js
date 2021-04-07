import React from 'react'
import './content.css'
import ContentImage from './ContentImage'
import SecondContentImage from './SecondContentImage'
import ThirdContentImage from './ThirdContentImage'
import FourthContentImage from './FourthContentImage'



const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 2,
            marginTop: '15px'
        }}
    />
)

const Content = () => {
    return (
        <>
        <section className="blog_item">
        <div className="conteiner">
            <div className="row header-row">
                <div className="col-sm-12">
                    <div className="take_item">
                        <div className="col-sm-6">
                            <div className="category">
                            Category : Our latest Divi Child Theme
                            </div>
                            <div className="red_title">
                                Rebel Divi Coaching Theme
                            </div>
                            <ColoredLine color="rgb(209, 127, 127)"/>
                            <div className="text_item">
                                You are a Rebel and need a website that stands out from the rest. A dark, moody, chic
                                bohemian inspired Divi Child Theme.
                                
                                The Rebel Divi Theme is guaranteed to blow your website visitors away with her unique
                                styling and bold layout,
                                softly complimented with a feminine script font. Why be average, when you can stand out
                                from the crowd?
                            </div>
                            <button className="btn" id="btn-place"> Read more </button>
                        </div>
                        <div className="col-sm-6">
                           <ContentImage/>
                        </div>

                    </div>
                </div>

            </div>
            <div className="row header-row">
                <div className="col-sm-12">
                    <div className="take_item">
                        <div className="col-sm-6">
                            <SecondContentImage/>
                        </div>
                        <div className="col-sm-6">
                            <div className="category">
                            Category : Feminine Divi Child Theme
                            </div>
                            <div className="red_title">
                             Collaborate Divi Coaching Theme
                            </div>
                            <ColoredLine color="rgb(209, 127, 127)"/>
                            <div className="text_item">
                                Beautiful, fun feminine Divi Child Theme that is elegant and classNamey. Coaches! You need a
                                professional
                                online image and what better way to schmooz your clients with all this gorgeousness.
                                Built for creative digital businesses who are original and are wanting to add their
                                own personality to their website.
                            </div>
                            <button className="btn" id="btn-place"> Read more </button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="row header-row">
                <div className="col-sm-12">
                    <div className="take_item">
                        <div className="col-sm-6">
                            <div className="category">
                            Category : Best Selling Divi Child Theme
                            </div>
                            <div className="red_title">
                                Engage Divi Coaching Theme
                            </div>
                            <ColoredLine color="rgb(209, 127, 127)"/>
                            <div className="text_item">
                                Engage those visitors of yours with this bold, striking Divi Coaching Child Theme.
                                Engage is a
                                Divi custom designed child theme layout for business owners, podcasters and social media
                                entrepreneurs.
                                One of our top selling Divi Themes- so join the crowd that oozes confidence.
                            </div>
                            <button className="btn" id="btn-place"> Read more </button>
                        </div>
                        <div className="col-sm-6">
                          <ThirdContentImage/>
                        </div>

                    </div>
                </div>

            </div>
            <div className="row header-row">
                <div className="col-sm-12">
                    <div className="take_item">
                        <div className="col-sm-6">
                            <FourthContentImage/>
                        </div>
                        <div className="col-sm-6">
                            <div className="category">
                            Category : Panache Divi Child Theme
                            </div>
                            <div className="red_title">
                                Panache Divi Coaching Theme
                            </div>
                            <ColoredLine color="rgb(209, 127, 127)"/>
                            <div className="text_item">
                                Panache is a feminine, premium Divi child theme created for small biz
                                entrepreneurs and business women. This Divi child theme is largely built
                                for coaches, copywriters, virtual assistants and social media guru’s.
                                We have included a free landing page layout for your online course sales
                                pages and to market your coaching courses.
                            </div>
                            <button className="btn" id="btn-place"> Read more </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    </>
    )
}

export default Content