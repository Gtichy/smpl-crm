import React, { Component } from 'react';

// Components
import TaskDetail from '../TaskDetail/TaskDetail';
import CreateNewTask from '../CreateNewTask/CreateNewTask';

class LeadDetail extends Component {
    render() {
        const currentLead = this.props.leadDetails;
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
                        <hr/>
                        <CreateNewTask leadId={lead.id} onCreateTask={this.props.onCreateTask} /> 
                        <TaskDetail leadDetails={this.props.leadDetails} onUpdateTaskStatus={this.props.onUpdateTaskStatus} onDeleteTask={this.props.onDeleteTask} />
                        </div>
                    )
                })
            }
            </div>
        )
    }
}

export default LeadDetail;  