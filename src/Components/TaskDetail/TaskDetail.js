import React, { Component } from 'react';
import { map } from 'lodash';

// Material Ui
import Checkbox from '@material-ui/core/Checkbox';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

// Components
import DeleteTask from '../DeleteTask/DeleteTask';

class TaskDetail extends Component {
    constructor(props){
        super(props);

        this.state = {
  
        }
    }
  
    handleTaskComplete = (leadId, taskId) => {
      this.props.onUpdateTaskStatus(leadId, 'taskStatus', taskId);
    }
        
    render(){
      const leadInfo = map(this.props.leadDetails);
      const taskInfo = map(this.props.leadDetails[0].tasks);
        return (
          <Table>
          <TableHead>
              <TableRow>
                  <TableCell>Task</TableCell>
                  <TableCell>Due Date</TableCell>
                  <TableCell>Assigned To</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
              </TableRow>
          </TableHead>
          <TableBody>
                {
                  leadInfo.map(lead =>
                    taskInfo.map(task => { 
                      return (
                        <TableRow>
                          <TableCell>{task.taskName}</TableCell>
                          <TableCell>{task.taskDueDate}</TableCell>
                          <TableCell>{task.taskAssignee}</TableCell>
                          <TableCell>
                            <Checkbox checked={task.taskStatus} onClick={() => { this.handleTaskComplete(lead.id, task.id)}} value="" />
                          </TableCell>
                          <TableCell>
                            <DeleteTask leadId={lead.id} taskId={task.id} taskName={task.taskName} onDeleteTask={this.props.onDeleteTask} /> 
                          </TableCell>
                          </TableRow>
                          )
                    })
                  )
                }
          </TableBody>
          </Table>
        )
      }
    }

export default TaskDetail;