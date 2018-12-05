import React, { Component } from 'react';

// Components
import TaskDetail from '../TaskDetail/TaskDetail';

class LeadDetail extends Component {
    render() {
        const currentLead = this.props.leadDetails;
        console.log(currentLead);
        return (
            <div>
                <h3>These are the lead details</h3>
                {
                currentLead.map(lead => {
                    return (
                        <div>
                        <h4>Name: {lead.leadName}</h4>
                        <h4>Phone: {lead.leadPhone}</h4>
                        <h4>Email: {lead.leadEmail}</h4>
                        <h4>Membership Level: {lead.leadMembershipLevel}</h4>
                        <TaskDetail leadDetails={this.props.leadDetails} />
                        </div>
                    )
                })
            }
            </div>
        )
    }
}

export default LeadDetail;  