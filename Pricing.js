import React, { Component } from 'react';
import data from './data';

class Pricing extends Component {
    constructor() {
        super();
        this.state = {
            data: data,
        }
    }
    render() {

        return (
            <>
                {this.state.data.map(({ plan, price, features },index) => {
                    {data[index].key=index};
                    return (
                        <div className="col-lg-4" key={index}>
                            <div className="card mb-5 mb-lg-0">
                                <div className="card-body">
                                    <h5 className="card-title text-muted text-uppercase text-center">{plan}</h5>
                                    <h6 className="card-price text-center">${price}<span className="period">/month</span></h6>
                                    <hr />
                                    <ul className="fa-ul">
                                        {features.map((feature) => {
                                            if (feature.flag) {
                                                return (
                                                    <li><span className="fa-li"><i className="fas fa-check"></i></span>{feature.value}</li>
                                                )
                                            }
                                            else {
                                                return (
                                                    <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{feature.value}</li>
                                                )
                                            }
                                        })}
                                    </ul>
                                    <a href="#" className="btn btn-block btn-primary text-uppercase">Button</a>
                                </div>
                            </div>
                        </div>
                    )

                })
                }
            </>

        )


    }

}

export default Pricing;
