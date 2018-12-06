import React, { Component } from 'react';

// Material UI
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import { Pageview } from '@material-ui/icons';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// Components
import DeleteLead from '../DeleteLead/DeleteLead';

class LeadList extends Component {
    constructor(props){
        super(props);

        this.state={

        }
    }
    sortList = (property) => {
        var sortOrder = 1;

        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }

        return function (a,b) {
            if(sortOrder === -1){
                return b[property].localeCompare(a[property]);
            }else{
                return a[property].localeCompare(b[property]);
            }       
        }
    }

    handleStatusChange = (id) => (e) => {
        this.props.onUpdateLeadStatus(id, 'leadStatus', e.target.value);
    }

    viewLead = (id) => {
        this.props.viewLead(id);
    }
    
    render(){
        const sortedList = this.props.leads.sort(this.sortList('leadName'));
        return (
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Membership Level</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        sortedList.map(lead => {
                        return (
                            <TableRow>
                                <TableCell>{lead.leadName}</TableCell>
                                <TableCell>{lead.leadEmail}</TableCell>
                                <TableCell>{lead.leadPhone}</TableCell>
                                <TableCell>{lead.leadMembershipLevel}</TableCell>
                                <TableCell>
                                    <FormControl>
                                        <Select
                                            value={lead.leadStatus}
                                            onChange={this.handleStatusChange(lead.id)}
                                            name="leadStatus"
                                        >
                                        <MenuItem value=""><em>None</em></MenuItem>
                                        <MenuItem value='New'>New</MenuItem>
                                        <MenuItem value='Interested'>Interested</MenuItem>
                                        <MenuItem value='Toured'>Toured</MenuItem>
                                        <MenuItem value='Lost'>Lost</MenuItem>
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell>
                                    <IconButton onClick={()=>{this.viewLead(lead.id)}} color="primary">
                                        <Pageview />
                                    </IconButton>
                                    <DeleteLead leadId={lead.id} leadName={lead.leadName} onDelete={this.props.onDelete} /> 
                                </TableCell>
                            </TableRow>   
                        )
                        })
                        }     
                </TableBody>
            </Table>
  
        );
    }
}

export default LeadList;