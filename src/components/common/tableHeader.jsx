import React, { Component } from 'react';


//columns: array
//sortColumn: obj
//onSort: function
class TableHeader extends Component {
    raiseSort = heading => {
        const sortColumn = {...this.props.sortColumn}
        if(sortColumn.path === heading) 
        sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc'
    
        else {
            sortColumn.order = 'asc';
            sortColumn.path  = heading;
        }
    
        this.props.onSort(sortColumn);
    }

    renderSortIcon = column => {
        const { sortColumn } = this.props;

        if( sortColumn.path !== column.path ) return null;
        //if not its already sorted, so take care of the rest.
        if( sortColumn.order === 'asc') return <i className="fa fa-sort-asc"></i>;
        return <i className="fa fa-sort-desc"></i>;
    }

    render() { 
        return ( 
        <thead>
            <tr>
                { this.props.columns.map( column => 
                <th 
                className='clickable'
                key={column.path || column.key} 
                onClick={() => this.raiseSort(column.path)}>
                    {column.label} {this.renderSortIcon(column)}
                    
                    </th> )}
            </tr>
        </thead> );
    }
}
 
export default TableHeader;