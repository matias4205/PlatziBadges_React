import React from 'react';


import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import BadgeDetails from './BadgeDetails';

import api from '../api';

class BadgeDetailsContainer extends React.Component{
    state = {
        modalOpened: false,
        loading: true,
        error: null,
        data: undefined
    }

    handleCloseModal = (e) => {
        this.setState({
            modalOpened: false
        })    
    }

    handleOpenModal = (e) => {
        this.setState({
            modalOpened: true
        })    
    }

    handleDeleteBadge = async(e)=>{
        this.setState({
            loading: true,
            error: null,
        });

        try {
            await api.badges.remove(this.props.match.params.badgeId);
            this.setState({
                loading: false,
            });
            this.props.history.push('/badges');
        } catch (error) {
            this.setState({
                loading: false,
                error: error,
            });
        }
    }

    fetchData = async() => {
        this.setState({
            loading: true,
            error: null,
        });

        try {
            const data = await api.badges.read(this.props.match.params.badgeId);
            this.setState({
                loading: false,
                error: null,
                data: data
            });
        } catch (error) {
            this.setState({
                loading: false,
                error: error,
            });
        }
    }

    componentWillMount(){
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
            <BadgeDetails badge={this.state.data} onOpenModal={this.handleOpenModal} onCloseModal={this.handleCloseModal} modalIsOpen={this.state.modalOpened} onDeleteBadge={this.handleDeleteBadge} />
        );
    }
}

export default BadgeDetailsContainer;