import React, { Component } from 'react';

// Material UI

// Components
import LeadList from './Components/LeadList/LeadList';
import CreateNewLead from './Components/CreateNewLead/CreateNewLead';

class App extends Component {
  
  constructor(props){
    super(props);
    
    this.state = {
      currentLeadId: '',
      leads: [
        {
          id: 1,
          leadName: 'Garrett',
          leadEmail: 'garrett@smpl.io',
          leadPhone: '704-577-3936',
          leadMembershipLevel: '',
          leadStatus: 'New'
        },
       {
          id: 2,
          leadName: 'Sean Rogers',
          leadEmail: 'sean@smpl.io',
          leadPhone: '980-222-3032',
          leadMembershipLevel: 'Dedicated Desk',
          leadStatus: 'New'
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
    console.log(currentLeads);
    this.setState({ leads: currentLeads });
    
  }

  UpdateLead = (leadId, field, updates) => {
    const { leads } = this.state;
    const currentLeadIndex = leads.findIndex(lead => lead.id === leadId);

    const newLeads = leads;
    newLeads[currentLeadIndex][field] = updates;
    
    this.setState({leads: newLeads});
  }

  render() {
    return (
      <div>
        <LeadList leads={this.state.leads} onUpdate={this.UpdateLead} onDelete={this.DeleteLead}/>
        <CreateNewLead onCreate={this.CreateNewLead} />
      </div>
    );
  }
}

export default App;
