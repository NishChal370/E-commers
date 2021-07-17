import React, { Component } from 'react'

import Data from '../Database/Data';
class NavBar extends Component {

    render() {
        const NavItem= Data.Nav.Item.map((item, index)=>{
            return(
              <li key={'nvItm'+index} className="nav-item">
                {item}
              </li>
            );
        });

        const icons= Data.Nav.Icon.map( (icon, index)=> <img key={'icon'+index} src={icon}/> )

        return (
            <>
                <div className='nav-bar'>
                    <nav className="navbar fixed-top navbar-expand-lg "> 
                        <ul className="nav">
                            {NavItem}
                        </ul>
                        <div className='nav-icon'>
                            {this.props.selectedItem === 0
                                ? <p></p>
                                : <p>{this.props.selectedItem}</p> 
                            }
                            
                            {icons}
                        </div>
                    
                    </nav>
                </div>
            </>
        )
    }
}

export default  NavBar
