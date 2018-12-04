import React, { Component } from 'react';

// Material UI
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

// Components
import LeadDetail from './Components/LeadDetail/LeadDetail';
import LeadList from './Components/LeadList/LeadList';

let leadList;

class App extends Component {
  
  constructor(pr  ops){
    super(props);
    
    this.state = {
      dialogOpen: false,
      currentLeadId: '',
      NewLeadName: '',
      NewLeadEmail: '',
      leads: [
        {
          id: 1,
          leadName: 'Garrett',
          leadEmail: 'garrett@smpl.io',
          leadPhone: '704-577-3936',
          leadMembershipLevel: '',
        },
       {
          id: 2,
          leadName: 'Sean Rogers',
          leadEmail: 'sean@smpl.io',
          leadPhone: '980-222-3032',
          leadMembershipLevel: 'Dedicated Desk'
        }
      ] 
    }
  }

  handleOpenDialog = () => {
      this.setState({dialogOpen: true})
  }

  handleSubmit = () => {
      this.createNewLead(this.state.NewLeadName, this.state.NewLeadEmail);
      this.setState({dialogOpen: false})
  }

  handleCloseDialog = () => {
      this.setState({dialogOpen: false})
  }

  componentDidMount() {
  }

  handleNameChange = (e) => {
    this.setState({NewLeadName: e.target.value});
  }

  handleEmailChange = (e) => {
    this.setState({NewLeadEmail: e.target.value});
  }

  getAllLeads = () => {
    leadList = this.state.leads;
    console.log(leadList);
    return leadList;
    }

  createNewLead = (name, email) =>{
    const uniqueId = Math.random().toString(36).substr(2, 9);
    this.state.leads.push({
      id: uniqueId,
      leadName: name,
      leadEmail: email
    })
    console.log(this.state.leads);
  }

  render() {
    const { fullScreen } = this.props;
    return (
      <div>
        <LeadList leads={this.state.leads}/>
        <Button onClick={this.handleOpenDialog}>Create</Button>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.dialogOpen}
          onClose={this.handleCloseDialog}
          ria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title">{"Create A New Lead"}</DialogTitle>
              <DialogContent>
                <DialogContentText>
                    To create a new lead fill out the form below and hit submit.  
                    </DialogContentText>
                      <TextField
                      id="lead-name"
                      placeholder="Lead Name"
                      multiline
                      margin="normal"
                      onChange={this.handleNameChange}
                      /><br />
                      <TextField
                      id="lead-email"
                      placeholder="Lead Email"
                      multiline
                      margin="normal"
                      onChange={this.handleEmailChange}
                      />

                      </DialogContent>
                  <DialogActions>
                  <Button onClick={this.handleCloseDialog} color="primary">
                      Cancel
                  </Button>
                  <Button onClick={this.handleSubmit} color="primary" autoFocus>
                      Create
                  </Button>
            </DialogActions>
          </Dialog>
      </div>
    );
  }
}

export default App;
