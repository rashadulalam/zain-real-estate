import React from 'react';
import './Menu.css';

const Menu = ( props ) => {

console.log(props)
let myStyle;
if(props.status == 'active') {
    myStyle = {
        display: 'flex',
        width: '100%'
    }
} else {
    myStyle = {
        display: 'none',
        width: '0',
    }
}
    return (
        <>
            <div className='menu-area' style={myStyle}>
                <div className='menu_inner'>
                    <a href="/about">About</a>
                    <a href="/services">Services</a>
                    <a href="/content">Contact</a>
                    <a href="/help">Help</a>
                </div>
            </div>
        </>
    );
};

export default Menu;