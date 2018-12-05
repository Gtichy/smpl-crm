import React, { Component } from 'react';

// Material UI

// Components
import LeadList from './Components/LeadList/LeadList';
import CreateNewLead from './Components/CreateNewLead/CreateNewLead';
import LeadDetail from './Components/LeadDetail/LeadDetail';

class App extends Component {
  
  constructor(props){
    super(props);
    
    this.state = {
      selectedLead: [],
      leads: [
        {
          id: 1,
          leadName: 'Garrett',
          leadEmail: 'garrett@smpl.io',
          leadPhone: '704-577-3936',
          leadMembershipLevel: '',
          leadStatus: 'New',
          tasks: [
            {
              id: 1,
              taskName: 'Make Contact',
              taskDueDate: '12/19/2018',
              taskAssignee: 'Garrett',
              taskStatus: 'completed'
            },
            {
              id: 2,
              taskName: 'Second Follow Up',
              taskDueDate: '12/24/2018',
              taskAssignee: 'Alyssa',
              taskStatus: 'not completed'
            },
            {
              id:3,
              taskName: 'Did a tour',
              taskDueDate: '12/25/2018',
              taskAssignee: 'Alyssa',
              taskStatus: 'not completed'
            }
          ]
        },
       {
          id: 2,
          leadName: 'Sean Rogers',
          leadEmail: 'sean@smpl.io',
          leadPhone: '980-222-3032',
          leadMembershipLevel: 'Dedicated Desk',
          leadStatus: 'New',
          tasks: [
            {

            }
          ]
        }
      ] 
    }
  }

  CreateNewLead = (lead) => {
    let currentState = this.state.leads;
    const newLead = {
      id: lead.id,
      leadName: lead.leadName,
      leadEmail: lead.leadEmail,
      leadStatus: 'New'
    };
    currentState.push(newLead);
    this.setState({leads: currentState});
  }

  DeleteLead = (leadId) => {
    const { leads } = this.state;
    const currentLeads = leads.filter(lead => lead.id !== leadId);
    this.setState({ leads: currentLeads });
    
  }

  UpdateLead = (leadId, field, updates) => {
    const { leads } = this.state;
    const currentLeadIndex = leads.findIndex(lead => lead.id !== leadId);

    const newLeads = leads;
    newLeads[currentLeadIndex][field] = updates;
    
    this.setState({leads: newLeads});
  }

  ViewLead = (leadId) => {
    const { leads } = this.state;
    const currentLead = leads.filter(lead => lead.id === leadId);
    this.setState({selectedLead: currentLead});
  }

  render() {
    return (
        <div>
        <LeadList leads={this.state.leads} onUpdate={this.UpdateLead} onDelete={this.DeleteLead} viewLead={this.ViewLead}/>
        <CreateNewLead onCreate={this.CreateNewLead} />
        <LeadDetail leadDetails={this.state.selectedLead}/>
        </div>
    );
  }
}

export default App;
