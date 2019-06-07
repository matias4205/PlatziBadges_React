/* Modules */
import React from 'react';
import { Link } from 'react-router-dom';

/* CSS */
import './styles/Badges.css'

/* Images */
import confLogo from '../images/badge-header.svg';

/* Components */
import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';


/* API */
import api from '../api';

class Badges extends React.Component{
    state = {
        loading: true,
        error: null,
        data: []
    }

    fetchData = async() => {
        this.setState({
            loading: true,
            error: null
        });

        try {
            const data = await api.badges.list();
            this.setState({
                loading: false,
                data: data
            });
        }catch (err) {
            this.setState({
                loading: false,
                error: err
            });
        }
    }

    componentDidMount(){
        this.fetchData();
    }

    render(){
        if (this.state.loading) {
            return (
                <PageLoading />
            );
        }

        if (this.state.error){
            return (
                <PageError error={this.state.error} />
            );
        }


        return (
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={confLogo} alt="confLogo"/>
                        </div>
                    </div>
                </div>

                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary"> New Badge </Link>
                    </div>

                    <div className="Badges__list">
                        <div className="Badges__container">
                            <BadgesList badges={this.state.data}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default Badges;