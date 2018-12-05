import React, { Component } from 'react';

// Material Ui
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

class TaskDetail extends Component {
    constructor(props){
        super(props);

        this.state = {
                gilad: true,
                jason: false,
                antoine: false,
              };
        }
        handleChange = name => event => {
            this.setState({ [name]: event.target.checked });
          };    
        
        getTaskList
        render(){
            const { gilad, jason, antoine } = this.state;
            const error = [gilad, jason, antoine].filter(v => v).length !== 2;        
            return (
                <div>
                <FormControl component="fieldset">
                <FormLabel component="legend">Assign responsibility</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox checked={gilad} onChange={this.handleChange('gilad')} value="gilad" />
                    }
                    label="Gilad Gray"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={jason} onChange={this.handleChange('jason')} value="jason" />
                    }
                    label="Jason Killian"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={antoine}
                        onChange={this.handleChange('antoine')}
                        value="antoine"
                      />
                    }
                    label="Antoine Llorca"
                  />
                </FormGroup>
                <FormHelperText>Be careful</FormHelperText>
              </FormControl>
                    </div>
            )
          }
    
    }

export default TaskDetail;