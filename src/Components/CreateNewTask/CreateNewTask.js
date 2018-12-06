import React, { Component } from 'react';

// Material UI
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

class CreateNewTask extends Component {
    constructor(props){
        super(props);

        this.state = {
            dialogOpen: false,
            newTaskName: '',
            newTaskDate: '',
            newTaskAssignee: ''
        }
    }

    handleOpenDialog = () => {
        this.setState({dialogOpen: true})
    }
  
    handleSubmit = () => {
        this.setState({dialogOpen: false})

        const uniqueId = Math.random().toString(36).substr(2, 9);
        const task = {
          id: uniqueId,
          taskName: this.state.newTaskName,
          taskDueDate: this.state.newTaskDate,
          taskAssignee: this.state.newTaskAssignee
        }
        this.props.onCreateTask(this.props.leadId, task);
  
    }
  
    handleCloseDialog = () => {
        this.setState({dialogOpen: false})
    }

    handleNameChange = (e) => {
        this.setState({newTaskName: e.target.value});
    }
    
    handleDateChange = (e) => {
       this.setState({newTaskDate: e.target.value});
    }

    handleAssigneeChange = (e) => {
        this.setState({newTaskAssignee: e.target.value})
    }
  
    render(){
        const { fullScreen } = this.props;
        return (
            <div>
            <Button onClick={this.handleOpenDialog}>Add New Task</Button>
            <Dialog
              fullScreen={fullScreen}
              open={this.state.dialogOpen}
              onClose={this.handleCloseDialog}
              ria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{"Create A New Task"}</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                        To create a new task fill out the form below and hit submit.  
                        </DialogContentText>
                          <TextField
                          id="task-name"
                          placeholder="Task Name"
                          multiline
                          margin="normal"
                          onChange={this.handleNameChange}
                          /><br />
                          <TextField
                            id="date"
                            label="Task Due Date"
                            type="date"
                            defaultValue=""
                            onChange={this.handleDateChange}
                            InputLabelProps={{
                            shrink: true
                            }}
                            /><br />
                            <TextField
                          id="task-assignee"
                          placeholder="Task Assignee"
                          multiline
                          margin="normal"
                          onChange={this.handleAssigneeChange}
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

export default CreateNewTask;