/* Modules */
import React from 'react';
import { Link } from 'react-router-dom';

/* CSS */
import './styles/Badges.css'

/* Images */
import confLogo from '../images/badge-header.svg';

/* Components */
import BadgesList from '../components/BadgesList';

/* Moks */
// import Moks from '../../server/db.json'

class Badges extends React.Component{

    constructor(props){
        super(props);
        console.log('1. El constructor es el que primero se ejecuta');

        this.state = {
            data: []
        }
    }

    componentDidMount(){
        console.log('3. ComponentDidMount() se ejecuta tercero');

        this.timeoutId = setTimeout(() => {
            this.setState({
                data: [
                    {
                        "id": "2de30c42-9deb-40fc-a41f-05e62b5939a7",
                        "firstName": "Freda",
                        "lastName": "Grady",
                        "email": "Leann_Berge@gmail.com",
                        "jobTitle": "Legacy Brand Director",
                        "twitter": "FredaGrady22221-7573",
                        "avatarUrl": "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon&s=120"
                    },
                    {
                        "id": "d00d3614-101a-44ca-b6c2-0be075aeed3d",
                        "firstName": "Major",
                        "lastName": "Rodriguez",
                        "email": "Ilene66@hotmail.com",
                        "jobTitle": "Human Research Architect",
                        "twitter": "MajorRodriguez61545",
                        "avatarUrl": "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon&s=120"
                    },
                    {
                        "id": "63c03386-33a2-4512-9ac1-354ad7bec5e9",
                        "firstName": "Daphney",
                        "lastName": "Torphy",
                        "email": "Ron61@hotmail.com",
                        "jobTitle": "National Markets Officer",
                        "twitter": "DaphneyTorphy96105",
                        "avatarUrl": "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon&s=120"
                    },
                    {
                        "id": "a9748581-dfdc-4a78-930d-5205a2ccef48",
                        "firstName": "Tatyana",
                        "lastName": "Von",
                        "email": "Herminio.Schmeler@hotmail.com",
                        "jobTitle": "Central Branding Representative",
                        "twitter": "TatyanaVon35871-3686",
                        "avatarUrl": "https://www.gravatar.com/avatar/98c382edd93414c1649b9db866000f97?d=identicon&s=120"
                    },
                    {
                        "id": "1921a734-cc05-4f71-a677-ffe38dda6958",
                        "firstName": "Maude",
                        "lastName": "Effertz",
                        "email": "Dan_Weimann0@yahoo.com",
                        "jobTitle": "Product Solutions Analyst",
                        "twitter": "MaudeEffertz73114",
                        "avatarUrl": "https://www.gravatar.com/avatar/01d0de92ec9ca4fdfbb99edf6a1abfea?d=identicon&s=120"
                    },
                    {
                        "id": "3629db36-14f9-4f24-b139-200f3a1b9af7",
                        "firstName": "Breanna",
                        "lastName": "Runolfsdottir",
                        "email": "Laurianne.Lynch@gmail.com",
                        "jobTitle": "Lead Marketing Director",
                        "twitter": "BreannaRunolfsdottir70705-1477",
                        "avatarUrl": "https://www.gravatar.com/avatar/684697e194c66d338c5ee91d030121cc?d=identicon&s=120"
                    },
                    {
                        "id": "8c734836-1f7a-4493-b903-37db30fc7224",
                        "firstName": "Jan",
                        "lastName": "Oberbrunner",
                        "email": "Estella8@gmail.com",
                        "jobTitle": "Regional Data Assistant",
                        "twitter": "JanOberbrunner86906-8430",
                        "avatarUrl": "https://www.gravatar.com/avatar/7a4de3ec254747b304a82a14270e72be?d=identicon&s=120"
                    },
                    {
                        "id": "04479bae-a34a-448e-bb20-a10920d48c1f",
                        "firstName": "Kaelyn",
                        "lastName": "Hoppe",
                        "email": "Deshaun_Steuber@gmail.com",
                        "jobTitle": "Senior Implementation Architect",
                        "twitter": "KaelynHoppe15215",
                        "avatarUrl": "https://www.gravatar.com/avatar/d5a91308668dd768e955e2efd0fcdb37?d=identicon&s=120"
                    },
                    {
                        "id": "a878c84d-8f49-45da-bbda-313503f9898f",
                        "firstName": "Nova",
                        "lastName": "Bergstrom",
                        "email": "Darrell10@gmail.com",
                        "jobTitle": "Lead Interactions Officer",
                        "twitter": "NovaBergstrom48167",
                        "avatarUrl": "https://www.gravatar.com/avatar/e65037a095cfcc6aec56cad1a2128207?d=identicon&s=120"
                    }
                ]
            })
        }, 3000);
    }

    componentDidUpdate(prevProps, prevState){
        console.log('5. componentDidUpdate()');
        console.log({
            prevProps: prevProps, prevState: prevState
        });
        console.log({
            props: this.props, state: this.state
        });
    }

    componentWillUnmount(){
        console.log('6. componentWillUnmount');
        clearTimeout(this.timeoutId);
    }

    render(){
        console.log('2/4. El render se ejecuta segundo, luego del constructor');
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