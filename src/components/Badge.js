import React from 'react';
import md5 from 'md5';

import confLogo from '../images/badge-header.svg'

import "./styles/Badge.css"

class Badge extends React.Component{
    render(){
        const {firstName, lastName, jobTitle, twitter, email, avatarUrl} = this.props;
        const mailHash = md5(email);

        return (
        <div className="Badge">
            <div className="Badge__header">
                <img src={confLogo} alt="Logo platzi conf"/>
            </div>
            <div className="Badge__section-name">
                <img className="Badge__avatar" src={`https://www.gravatar.com/avatar/${mailHash}?s=120`} alt="Avatar"/>
                <h1>{firstName} <br/> {lastName}</h1>
            </div>
            <div className="Badge__section-info">
                <h3>{jobTitle}</h3>
                <div>@{twitter}</div>
            </div>
            <div className="Badge__footer">
                #platziconf
            </div>
        </div>
        );
    }
}

export default Badge;