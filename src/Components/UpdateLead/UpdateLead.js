import React, { Component } from 'react';

// Material UI
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';

class UpdateLead extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentLead: '',
            dialogOpen: false
        }
    }

    componentWillMount() {
        this.setState({currentLead: this.props.leadDetails});

    }

    handleOpenDialog = () => {
        this.setState({
            currentLead: this.props.leadDetails,
            dialogOpen: true
        });
    }
  
    handleSubmit = () => {
        const leadInfo = this.state.currentLead;
        this.props.onUpdateLead(this.props.leadId, leadInfo);
        this.setState({dialogOpen: false})

    }
  
    handleCloseDialog = () => {
        this.setState({dialogOpen: false})
    }

    handleChange = (field) => (e) => {
        const { currentLead } = this.state;
        const newLeads = currentLead;
        newLeads[0][field] = e.target.value;
    
    }

    render(){
        const { fullScreen } = this.props;
        return (
            <div>
            <IconButton onClick={this.handleOpenDialog} aria-label="Edit">
                <EditIcon fontSize="small" />
            </IconButton>
            <Dialog
            fullScreen={fullScreen}
            open={this.state.dialogOpen}
            onClose={this.handleCloseDialog}
            ria-labelledby="responsive-dialog-title"
            >
            <DialogTitle id="responsive-dialog-title">{"Edit Lead Info"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Update the fields and press save. 
                    </DialogContentText>
                    <TextField
                          id="lead-name"
                          placeholder="Lead Name"
                          defaultValue={this.state.currentLead[0].leadName}
                          onChange={this.handleChange('leadName')}
                          margin="normal"
                          /><br />
                    <TextField
                          id="lead-email"
                          placeholder="Lead Email"
                          defaultValue={this.state.currentLead[0].leadEmail}
                          onChange={this.handleChange('leadEmail')}
                          margin="normal"
                          /><br />
                    <TextField
                          id="lead-phone"
                          placeholder="Lead Phone"
                          defaultValue={this.state.currentLead[0].leadPhone}
                          onChange={this.handleChange('leadPhone')}
                          margin="normal"
                          /><br />
                    <TextField
                          id="lead-membership-level"
                          placeholder="Membership Level"
                          defaultValue={this.state.currentLead[0].leadMembershipLevel}
                          onChange={this.handleChange('leadMembershipLevel')}
                          margin="normal"
                          />
                </DialogContent>
                    <DialogActions>
                    <Button onClick={this.handleCloseDialog} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.handleSubmit} color="primary" autoFocus>
                        Save
                    </Button>
            </DialogActions>
            </Dialog>
            </div>
        )
    }
}

export default UpdateLead;