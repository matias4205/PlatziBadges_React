import React from 'react';

import './styles/BadgesList.css';

class BadgesList extends React.Component{

    render(){
        return (
            <ul className="list-unstyled">
                {this.props.badges.map((badge)=>{
                    return (
                        <li key={badge.id}>
                            <div className="BadgeList__container">
                                <figure className="BadgeList__IMG">
                                    <img className="BadgeList__IMG" src={badge.avatarUrl} alt=""/>
                                </figure>
                                <div className="BadgeList__Data">
                                    <h3 className="">{badge.firstName} {badge.lastName}</h3>
                                    <i className="fa fa-twitter text-primary BadgeList__icon"></i>
                                    <span className="">@{badge.twitter}</span>
                                    <h4>{badge.jobTitle}</h4>
                                </div>
                                <i className="fa fa-minus-circle text-danger BadgeList__Remove"></i>
                            </div>
                        </li>
                    );
                })}
            </ul>
        );
    }

}

export default BadgesList;