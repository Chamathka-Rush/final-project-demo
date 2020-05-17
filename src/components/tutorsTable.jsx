import React, {Component} from 'react';
import Like from './common/like';
import Table from './common/table';
import { Link } from 'react-router-dom';


class TutorsTable extends Component {
    
columns = [
{ path: 'name', label: 'Name', content: tutor => <Link to={`/tutors/${tutor._id}`}>{tutor.name}</Link> },
    { path: 'subject.name', label: 'Subject' },
    { path: 'profession', label: 'Profession' },
    { path: 'likeCount', label: 'Rate' },
    { key: 'like' , content: tutor => (<Like liked={tutor.liked} onLike={() => this.props.onLike(tutor)} />)},
    { key: 'delete', content: tutor => (<button onClick={() => this.props.onDelete(tutor)} className="btn btn-danger btn-sm m-2">Delete</button>)}
]

    render() { 
        const { tutors, sortColumn, onSort } = this.props;

            return ( 
            <div>
                <Table 
                data = {tutors}
                sortColumn={sortColumn}
                onSort={onSort}
                columns={this.columns}
                />  
            </div>
               
            );
    }
}

export default TutorsTable;