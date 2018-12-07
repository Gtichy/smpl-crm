import React, { Component } from 'react';

// Material UI
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

class CreateNewNote extends Component {
    constructor(props){
        super(props);

        this.state = {
            dialogOpen: false,
            newNote: ''
        }
    }

    handleOpenDialog = () => {
        this.setState({dialogOpen: true})
    }
  
    handleSubmit = () => {
        this.setState({dialogOpen: false})

        const uniqueId = Math.random().toString(36).substr(2, 9);
        const note = {
          id: uniqueId,
          newNote: this.state.newNote
        }
        this.props.onCreateNote(this.props.leadId, note);
  
    }
  
    handleCloseDialog = () => {
        this.setState({dialogOpen: false})
    }

    handleNoteChange = (e) => {
        this.setState({newNote: e.target.value});
    }
    
  
    render(){
        const { fullScreen } = this.props;
        return (
            <div>
            <Button onClick={this.handleOpenDialog}>Add New Note</Button>
            <Dialog
              fullScreen={fullScreen}
              open={this.state.dialogOpen}
              onClose={this.handleCloseDialog}
              ria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{"Create A New Note"}</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                        To create a new note fill out the form below and hit create.  
                        </DialogContentText>
                          <TextField
                          id="lead-note"
                          placeholder="New Note"
                          multiline
                          margin="normal"
                          onChange={this.handleNoteChange}
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

export default CreateNewNote;