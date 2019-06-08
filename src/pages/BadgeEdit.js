/* Modules */
import React from 'react';

import api from '../api';

/* CSS */
import './styles/BadgeEdit.css'

/* Images */
import confImg from '../images/platzi_conf-logo.svg';

/* Components */
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading';


class BadgeEdit extends React.Component{
    state = {
        loading: true,
        error: null,
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: ''
        }
    }

    handleFormSubmit = async (event) => {
        event.preventDefault();
        this.setState({
            loading: true,
            error: null
        });

        try {
            await api.badges.update(this.props.match.params.badgeId, this.state.form);
            this.setState({
                loading: false,
                error: null
            });

            this.props.history.push('/badges');
        } catch (error) {
            this.setState({
                loading: false,
                error: error
            })
        }
    }
    
    handleChange = ({ target }) => {
        this.setState({
            form: {
                ...this.state.form,
                [target.name]: target.value
            }
        });
    }

    fetchData = async() => {
        this.setState({
            loading: true,
            error: null
        });

        try {
            const data = await api.badges.read(this.props.match.params.badgeId);
            this.setState({
                loading: false,
                error: null,
                form: {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    jobTitle: data.jobTitle,
                    twitter: data.twitter
                }
            });
        } catch (error) {
            this.setState({
                loading: false,
                error: error
            });
        }
    }

    componentDidMount(){
        this.fetchData();
    }

    render(){
        if(this.state.loading){
            return (
                <PageLoading />
            )
        }

        return (
            <React.Fragment>
                <div className="BadgeEdit__hero">
                    <img className="BadgeEdit__hero-image img-fluid" src={confImg} alt="Logo"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge firstName={this.state.form.firstName || 'FIRST_NAME'} lastName={this.state.form.lastName || 'LAST_NAME'} twitter={this.state.form.twitter || 'TWITTER'} jobTitle={this.state.form.jobTitle || 'JOB_TITLE'} email={this.state.form.email || 'EMAIL'} avatarUrl=""/>
                        </div>
                        <div className="col-6">
                            <h1>Edit Attendant</h1>
                            <BadgeForm onSubmit={this.handleFormSubmit} onChange={this.handleChange} formValues={this.state.form} error={this.state.error} />
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }

}

export default BadgeEdit;