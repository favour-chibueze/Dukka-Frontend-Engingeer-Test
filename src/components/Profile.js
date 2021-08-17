import React from 'react';
import ProfileImage from '../assets/img/me.jpg';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Swal from 'sweetalert2'; 
import withReactContent from 'sweetalert2-react-content'
import { 
    Link
 } from "react-router-dom";

const MySwal = withReactContent(Swal);

class Profile extends React.Component {
    constructor (props) {
        super(props);
          this.handleError = this.handleError.bind(this);
          this.handleDelete = this.handleDelete.bind(this);
        };
    
        handleError() {
            MySwal.fire({  
                icon: 'error',  
                title: 'Oops...',
                type: 'error', 
                text: 'Feature is not available.',  
             });  
        }

        handleDelete(e) {
            MySwal.fire({
                title: 'Delete Profile?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.isConfirmed) {
                    let allProfiles = JSON.parse(localStorage.getItem("profile"))
                    let deleteProfileId = this.props.profile.id
                    const index = allProfiles.findIndex((profile, index) => {
                        return profile.id === deleteProfileId
                    })
                    allProfiles.splice(index, 1)
                    this.setState({
                        profiles: allProfiles
                    }, () => {
                        window.localStorage.setItem("profile", JSON.stringify(allProfiles));
                        this.props.updateProfile();
                        MySwal.fire(
                            'Deleted!',
                            'Your profile has been deleted.',
                            'success'
                          )
                    });
                }
              })
            
        }

    render() {
        return(
            <div className="profile-card-parent">
                    <div className="profile-card">
                        <div className="user-img">
                            <Link to={`/loan-record/${this.props.profile.id}`}>
                                <img src={ProfileImage} alt="favour" width="100" height="113"/>
                            </Link>
                        </div>
                        <div className="user-details">
                            <Link to={`/loan-record/${this.props.profile.id}`} >
                                 <p className="text-decoration-none">{this.props.profile.fullName}</p>
                            </Link>

                            <p>{this.props.profile.position}</p>
                            <p>{this.props.profile.phoneNumber}</p>
                            <p>{this.props.profile.email}</p>
                        </div>
                    </div>
                   
                        <div className="hover-content">
                            <div className="icon" onClick={this.handleError}>
                                <FontAwesomeIcon icon={faEdit} /> 
                            </div>
                            <div className="icon" onClick={this.handleDelete}>
                                <FontAwesomeIcon icon={faTrashAlt} />
                            </div>
                        </div>
               </div>
            
        );
    }
}


export default Profile;