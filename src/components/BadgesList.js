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

function useSearchBadges(badges){
    const [ query, setQuery ] = React.useState(''); 
    const [ filteredBadges, setFilteredBadges ] = React.useState(badges);

    React.useMemo(() => {
        const results = badges.filter((badge) => {
            return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase());
        });
        
        setFilteredBadges(results);
    }, [badges, query]);

    return {filteredBadges, setQuery, query};
}

function BadgesList(props){
    const badges = props.badges;

    const {filteredBadges, setQuery, query} = useSearchBadges(badges);


    if(filteredBadges.length === 0){
        return (
            <React.Fragment>
                <div className="form-group">
                    <label>Filter Badges</label>
                    <input type="text" className="form-control" value={query} onChange={(e)=>{ setQuery(e.target.value) }}/>
                </div>
                <div>
                    <h3>No badges where found</h3>
                    <Link className="btn btn-primary" to="/badges/new"> Create new badge </Link>
                </div>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <div className="form-group">
                <label>Filter Badges</label>
                <input type="text" className="form-control" value={query} onChange={(e)=>{ setQuery(e.target.value) }}/>
            </div>
            <ul className="list-unstyled">
                {filteredBadges.map((badge)=>{
                    return (
                        <li key={badge.id}>
                            <Link className="text-reset text-decoration-none" to={ `/badges/${ badge.id }` }>
                                <BadgeListItem badge={badge} />
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </React.Fragment>
    );
}
export default BadgesList;