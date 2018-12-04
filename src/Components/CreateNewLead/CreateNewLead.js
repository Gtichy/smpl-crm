import React, { Component } from 'react';

// Material UI
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

class CreateNewLead extends Component {
    constructor(props){
        super(props);

        this.state = {
            dialogOpen: false,
            newLeadName: '',
            newLeadEmail: ''
        }
    }

    handleOpenDialog = () => {
        this.setState({dialogOpen: true})
    }
  
    handleSubmit = () => {
        this.setState({dialogOpen: false})

        const uniqueId = Math.random().toString(36).substr(2, 9);
        const lead = {
          id: uniqueId,
          leadName: this.state.newLeadName,
          leadEmail: this.state.newLeadEmail
        }
        this.props.onCreate(lead);
  
    }
  
    handleCloseDialog = () => {
        this.setState({dialogOpen: false})
    }

    handleNameChange = (e) => {
        this.setState({newLeadName: e.target.value});
    }
    
    handleEmailChange = (e) => {
       this.setState({newLeadEmail: e.target.value});
    }
  
    render(){
        const { fullScreen } = this.props;
        return (
            <div>
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
        )
    }
}

export default CreateNewLead;