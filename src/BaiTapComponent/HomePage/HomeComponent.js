import React, { Component } from 'react'
import Banner from './Body/Banner'
import Item from './Body/Item'
import Footer from './Footer/Footer'
import Header from './Header/Header'

export default class HomeComponent extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    {/* Header */}
                    <Header />
                </div>
                <div className="banner container">
                        {/* Banner */}
                        <Banner />
                </div>
                <div className="item container px-lg-5 py-sm-5">                    
                    <div className="row">
                        {/* Item */}
                        <div className="col-md-6 col-xl-3 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-0 ">
                            <Item />
                        </div>
                        <div className="col-md-6 col-xl-3 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-0 ">
                            <Item />

                        </div>
                        <div className="col-md-6 col-xl-3 mb-sm-5">
                            <Item />

                        </div>
                        <div className="col-md-6 col-xl-3 ">
                            <Item />
                        </div>

                    </div>
                </div>
                <div className="footer">
                    {/* Footer */}
                    <Footer/>
                </div>
            </div>




        )
    }
}
