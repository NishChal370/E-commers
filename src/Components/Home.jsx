import React, { Component } from 'react'
import {Link} from 'react-scroll'

import Data from '../Database/Data'
export default class Home extends Component {
    render() {//https://letswebify.com/wp-content/uploads/2019/03/0a6500480b10f.png
        return (
            <div className='home-div'>
                <div  className='home-img'>
                    <img className="img-fluid"  src="https://valuegrowthaudit.com/wp-content/uploads/2020/06/Ecommerce-01.png" alt="home-img" />
                </div>
                <div className='home-info'>
                    <h1 className='home-title'>{Data.Home.title}</h1>
                    <p className="home-desc">{Data.Home.description}</p><br/>
                    <Link  to="body" spy={true} smooth={true} duration={2}>
                        <button className="btn">{Data.Home.buttonName}</button>
                    </Link>
                </div>
            </div>
        )
    }
}
