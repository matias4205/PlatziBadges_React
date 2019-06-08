import React from 'react';
import { Link } from 'react-router-dom';

import Gravatar from './Gravatar';

import './styles/BadgesList.css';


function BadgeListItem(props){
    const { badge } = props;

    return (
        <div className="BadgeList__container">
            <figure className="BadgeList__IMG">
                <Gravatar className="BadgeList__IMG" email={badge.email}/>
            </figure>
            <div className="BadgeList__Data">
                <h3 className="">{badge.firstName} {badge.lastName}</h3>
                <i className="fa fa-twitter text-primary BadgeList__icon"></i>
                <span className="">@{badge.twitter}</span>
                <h4>{badge.jobTitle}</h4>
            </div>
            <i className="fa fa-minus-circle text-danger BadgeList__Remove"></i>
        </div>
    );
}

class BadgesList extends React.Component{

    render(){
        if(this.props.badges.length === 0){
            return (
                <div>
                    <h3>No badges where found</h3>
                    <Link className="btn btn-primary" to="/badges/new"> Create new badge </Link>
                </div>
            )
        }

        return (
            <ul className="list-unstyled">
                {this.props.badges.map((badge)=>{
                    return (
                        <li key={badge.id}>
                            <Link className="text-reset text-decoration-none" to={ `/badges/edit/${ badge.id }` }>
                                <BadgeListItem badge={badge} />
                            </Link>
                        </li>
                    );
                })}
            </ul>
        );
    }

}

export default BadgesList;