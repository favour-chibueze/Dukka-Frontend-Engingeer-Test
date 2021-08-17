import React from 'react';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class LoanList extends React.Component {
    render() {
        return(
            <div className="loan-card">
                <div className="loan-month">
                    <div>
                            <FontAwesomeIcon icon={faCalendarAlt} />
                        <p>JAN</p>
                    </div>
                </div>
                <div className="borrowed-amount">
                        <div className="borrowed">
                            BORROWED:  <span>#50, 000</span>
                        </div>
                        <div>
                            RECEIVABLE: <span>#50, 000</span>
                        </div>
                </div>
            </div>
        )
    }
}

export default LoanList;