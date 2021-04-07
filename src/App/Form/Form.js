import React from 'react'

import './form.css'

const Form = () => {
    return (
        <section class="sign_up">
          <div class="dark_item">
            <div class="conteiner">
                <div class="row header-row">
                    <div class="col-sm-12">
                        <div class="sign_up_item">
                            <div class="sign_title">
                                Sign Up Here To Hear About Our Divi Theme Launches, Discounts And More!
                            </div>
                            <div class="arrow"> </div>
                            <div class="sign_text">
                                EXCLUSIVE DISCOUNTS ON THEME RELEASES JUST FOR MEMBERS
                            </div>
                            <div class="take_text">
                                I don't often send newsletters, but when I do, it will contain something to really pique
                                your interest.
                            </div>
                            <form class="form-search">
                                <input type="text" class="input-search-text" placeholder="Name"/>
                                <input type="text" class="input-search-text" placeholder="Email"/>
                            </form>
                            <button class="btn_form">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    )
}
export default Form