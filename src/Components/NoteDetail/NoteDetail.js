import React, { Component } from 'react';
import { map } from 'lodash';

class NoteDetail extends Component {          
    render(){
      const leadInfo = map(this.props.leadDetails);
      const noteInfo = map(this.props.leadDetails[0].notes);
      return (
            <div>
                {
                  leadInfo.map(lead =>
                    noteInfo.map(note => { 
                      return (
                        <p>{note.note}</p>
                      )
                    })  
                  )
                }
            </div>
            )
    }
}

export default NoteDetail;