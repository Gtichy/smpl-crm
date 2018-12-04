import React, { Component } from 'react';

// Material UI
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

class DeleteLead extends Component {
    constructor(props){
        super(props);

        this.state = {
            openDialog: false
        }
    }

    handleOpenDialog = () => {
        this.setState({ dialogOpen: true })
    }
  
    handleSubmit = () => {
        this.props.onDelete(this.props.leadId);
        this.setState({dialogOpen: false})
    }
  
    handleCloseDialog = () => {
        this.setState({dialogOpen: false})
    }

    render(){
        const { fullScreen } = this.props;
        return (
            <div>
            <IconButton onClick={this.handleOpenDialog} aria-label="Delete">
                <DeleteIcon fontSize="small" />
            </IconButton>
            <Dialog
            fullScreen={fullScreen}
            open={this.state.dialogOpen}
            onClose={this.handleCloseDialog}
            ria-labelledby="responsive-dialog-title"
            >
            <DialogTitle id="responsive-dialog-title">{"Permanently Delete Lead"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you would like to delete {this.props.leadName}? 
                    </DialogContentText>
                </DialogContent>
                    <DialogActions>
                    <Button onClick={this.handleCloseDialog} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.handleSubmit} color="primary" autoFocus>
                        Delete
                    </Button>
            </DialogActions>
            </Dialog>
            </div>
        )
    }
}

export default DeleteLead;