import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        return (
            <div>
                <div className="py-5">
                    <div className="px-lg-5">
                        <div className="p-4 p-lg-5 bg-light rounded-3">
                            <div className="m-4 m-lg-5">
                                <h1 className="display-5">A Warm Welcome!</h1>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus rerum neque adipisci quod deserunt, maxime, impedit odit voluptatibus et architecto.</p>
                                <a className="btn btn-primary btn-lg" href="#">Call to action</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
