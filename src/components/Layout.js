/* Modules */
import React from 'react'

/* Components */
import Navbar from './Navbar'


function Layout(props){
    // const children = props.children;

    return (
        <React.Fragment>
            <Navbar />
            {props.children}
        </React.Fragment>
    );
}

export default Layout;