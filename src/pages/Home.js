/* Modules */
import React from 'react';
import { Link } from 'react-router-dom';

/* CSS */
import './styles/Home.css';

/* IMAGES */
import conf_logo from '../images/conf-logo.svg';
import astronauts from '../images/astronautas.svg'

class Home extends React.Component{
    render(){
        return(
            <div className="Home">
                <div className="row Home__Banner">
                    <div className="col-6">
                        <img className="Home__Banner-img" src={conf_logo} alt="conf_logo"/>
                    </div>
                    <div className="col-6">
                        <img className="Home__Banner-img" src={astronauts} alt=""/>
                    </div>
                </div>
                <br/><br/>
                <div className="row Home__Text-area">
                    <div className="col-6 offset-3">
                        <h1 className="text-white">Platzi Badges</h1>
                        <h2 className="text-white font-italic">Administration System</h2>
                        <br/>
                        <Link className="btn btn-primary btn-lg" to="/badges"> Check it Out! <i className="fa fa-arrow-circle-right"></i> </Link>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Home;