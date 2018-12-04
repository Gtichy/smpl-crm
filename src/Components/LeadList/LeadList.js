import React, { Component } from 'react';

// Material UI
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';

class LeadList extends Component {
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
                                    <IconButton>
                                        <Icon>remove_red_eye</Icon>
                                    </IconButton>
                                    <IconButton aria-label="Delete">
                                        <DeleteIcon fontSize="small" />
                                    </IconButton>
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