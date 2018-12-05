import React, { Component } from 'react';
import { map } from 'lodash';

// Material Ui
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

class TaskDetail extends Component {
    constructor(props){
        super(props);

        this.state = {
  
        }
    }
  
    handleTaskComplete = (leadId, taskId) => {
      this.props.onUpdateTaskStatus(leadId, taskId);
    }
        
    render(){
      const leadInfo = map(this.props.leadDetails);
      const taskInfo = map(this.props.leadDetails[0].tasks);
        return (
          <div>
            <FormControl component="fieldset">
            <FormLabel component="legend">To-Do List</FormLabel>
              <FormGroup>     
                {
                  leadInfo.map(lead =>
                    taskInfo.map(task => { 
                      return (
                      <FormControlLabel
                        control={
                          <Checkbox checked={task.taskStatus} onClick={() => { this.handleTaskComplete(lead.id, task.id)}} value="" />
                          }
                          label={task.taskName}
                          />
                          )
                    })
                  )}
              </FormGroup>
            </FormControl>
          </div>
        )
      }
    }

export default TaskDetail;