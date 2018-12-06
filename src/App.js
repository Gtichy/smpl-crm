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
              taskStatus: true
            },
            {
              id: 2,
              taskName: 'Second Follow Up',
              taskDueDate: '12/24/2018',
              taskAssignee: 'Alyssa',
              taskStatus: false
            },
            {
              id:3,
              taskName: 'Did a tour',
              taskDueDate: '12/25/2018',
              taskAssignee: 'Alyssa',
              taskStatus: false
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
              id: 1,
              taskName: 'Make Contact',
              taskDueDate: '12/19/2018',
              taskAssignee: 'Garrett',
              taskStatus: true
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
      leadStatus: 'New',
      tasks: []
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
    const currentLeadIndex = leads.findIndex(lead => lead.id === leadId);

    const newLeads = leads;
    newLeads[currentLeadIndex][field] = updates;
    
    this.setState({leads: newLeads});
  }

  ViewLead = (leadId) => {
    const { leads } = this.state;
    const currentLead = leads.filter(lead => lead.id === leadId);
    this.setState({selectedLead: currentLead});
  }

  CreateTask = (leadId, task) => {
    const { leads } = this.state;
    const currentLeadIndex = leads.findIndex(lead => lead.id === leadId);

    const newLeads = leads;
    newLeads[currentLeadIndex].tasks.push(task);

    this.setState({leads: newLeads});
  }

  DeleteTask = (leadId, taskId) => {
    console.log(`${leadId} then delete ${taskId}`);
    const { leads } = this.state;
    const currentLead = leads.filter(lead => lead.id === leadId);
    const currentLeadIndex = leads.findIndex(lead => lead.id === leadId);
    const newTasks = currentLead[currentLeadIndex].tasks.filter(task => task.id !== taskId);

    const newLeads = leads;
    newLeads[currentLeadIndex].tasks = newTasks;

    this.setState({leads: newLeads});
  }

  updateTaskStatus = (leadId, field, taskId) => {
    const { leads } = this.state;
    const currentLead = leads.filter(lead => lead.id === leadId);
    const currentLeadIndex = leads.findIndex(lead => lead.id === leadId);
    const currentTaskIndex = currentLead[0].tasks.findIndex(task => task.id === taskId);
    const currentTaskStatus = currentLead[0].tasks[currentTaskIndex].taskStatus;

    let statusUpdate;
    if(currentTaskStatus === false){
      statusUpdate = true;
    }else{
      statusUpdate = false;
    }
    const newLeads = leads;
    newLeads[currentLeadIndex].tasks[currentTaskIndex][field] = statusUpdate;
    
    this.setState({leads: newLeads});
  }

  render() {
    return (
        <div>
        <LeadList leads={this.state.leads} onUpdate={this.UpdateLead} onDelete={this.DeleteLead} viewLead={this.ViewLead}/>
        <CreateNewLead onCreate={this.CreateNewLead} />
        <LeadDetail 
          leadDetails={this.state.selectedLead} 
          onUpdateTaskStatus={this.updateTaskStatus} 
          onCreateTask={this.CreateTask} 
          onDeleteTask={this.DeleteTask}
        />
        </div>
    );
  }
}

export default App;
