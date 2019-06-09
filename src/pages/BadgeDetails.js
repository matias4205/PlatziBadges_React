import React from 'react';
import {Link} from 'react-router-dom';


import './styles/BadgeDetails.css';
import confLogo from '../images/conf-logo.svg'

import Badge from '../components/Badge';
import DeleteBadgeModal from '../components/DeleteBadgeModal';


function BadgeDetails (props){
    const { badge } = props;

    return (
        <React.Fragment>
            <div className="BadgeDetails__hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={confLogo} alt="Logo de la conferencia"/>
                        </div>
                        <div className="col-6 BadgeDetails__hero-attendant-name">
                            <h1>
                                {badge.firstName} {badge.lastName}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Badge firstName={badge.firstName || 'FIRST_NAME'} lastName={badge.lastName || 'LAST_NAME'} twitter={badge.twitter || 'TWITTER'} jobTitle={badge.jobTitle || 'JOB_TITLE'} email={badge.email || 'EMAIL'} />
                    </div>
                    <div className="col">
                        <h2>Actions</h2>
                        <div className="">
                            <div>
                                <Link className="btn btn-primary mb-3" to={`/badges/edit/${badge.id}`}>
                                    Edit
                                </Link>
                            </div>
                            <div>
                                <button onClick={props.onOpenModal} className="btn btn-danger" to={`/badges/edit/${badge.id}`}>Delete</button>
                                <DeleteBadgeModal modalIsOpen={props.modalIsOpen} onCloseModal={props.onCloseModal} onDeleteBadge={props.onDeleteBadge} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default BadgeDetails;