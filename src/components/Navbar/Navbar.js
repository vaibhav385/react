import React, { Component } from 'react';
import { MenuItems } from "./Menuitems"
import Logo from '../../images/y.png';
import './Navbar.css'
import { Button } from "../Button"
// import images './yifff'
class Navbar extends Component{
    state= {clicked:false}
    handleClick=() =>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarItems">
                <div className="navii">

                    <h3 className="navbar-logo">
                    <img src={Logo} alt="logo"/>
                    
                    
                    </h3>
                </div>
                
                {/* <NavLink to='/'>
                <img src={require('../images/yifff.jpg')} alt='logo' />
                </NavLink> */}
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked?'fas fa-times':'fas fa-bars'}>

                    </i>

                </div>
                <ul className={this.state.clicked?'nav-menu active' :'nav-menu'}>
                    {MenuItems.map((item, index)=>{
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>

                        )
                    })}
                    
                </ul>
                <Button>Sign Up</Button>
            </nav>

        )
    }
}


export default Navbar

