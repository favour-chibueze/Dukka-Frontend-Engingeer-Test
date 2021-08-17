import React from 'react';
import Profile from './Profile';
import LoanList from './LoanList';


class LoanRecord extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {}
        };
    }
    componentDidMount() {
        const profileId = this.props.match.params.profileId;
        let allProfiles = JSON.parse(localStorage.getItem("profile"))
        let profile = allProfiles.filter(currentProfile => currentProfile.id === profileId)[0]
        this.setState({
            profile
        })
    }
    render() {
        return(
            <div className="profile-container loan-profile">
                    <Profile profile={this.state.profile}/>
                    <h1>Loan Records</h1>
                    <div className="profile">
                        <LoanList />
                    </div>
            </div>
        );
    }
}


export default LoanRecord;