import React from 'react'
import DesignerImage from './DesignerImage'
import Designer_item from './Designer_item'
import './main.css'



const Main = () => {
    return (
     <section className="designers">
        <div className="conteiner">
            <div className="row header-row">
                <div className="col-sm-12">
                    <div className="wrapper">
                        <div className="col-sm-4">
                            <DesignerImage/>
                        </div>
                        <div className="col-sm-8">
                            <Designer_item/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Main