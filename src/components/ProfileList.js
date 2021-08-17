import React from 'react';
import Profile from './Profile';

class ProfileList extends React.Component {
    constructor() {
        super();
        this.state = { 
            profiles: []
        };
        this.loadLocalStorage = this.loadLocalStorage.bind(this);
    }
    componentDidMount() {
        this.loadLocalStorage()
    }
    loadLocalStorage() {
        let profiles = JSON.parse(localStorage.getItem("profile"))
        this.setState({
            profiles
        })
    }
    render() {
        return(
            <div className="profile-container">
                    <h1>EMPLOYEES</h1>
                <div className="profile">
                    {this.state.profiles.map((profile, index) => (<Profile updateProfile={this.loadLocalStorage} profile={profile} key={index} />))}
                </div>
            </div>
        );
    }
}


export default ProfileList;