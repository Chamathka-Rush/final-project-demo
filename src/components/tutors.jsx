import React, { Component } from 'react'
import { getTutors } from '../services/fakeTutorService';
import { getSubjects } from '../services/fakeSubjectService';
import {paginate} from '../utils/paginate';
import Pagination from './common/pagination';
import ListGroup from './common/listGroup';
import TutorsTable from './tutorsTable';
import SearchBox from './common/searchBox';
import '../index.css';
import _ from 'lodash';


class Tutors extends Component {
    state = { 
        tutors: [],
        subjects: [],
        pageSize:4 ,
        currentPage: 1,
        searchQuery: "",
        selectedSubject: null,
        sortColumn: { path: 'name', order: 'asc' }
     }

     componentDidMount() {
         const subjects = [ { _id: "", name: "All subjects"} , ...getSubjects() ]
         this.setState( { tutors: getTutors(), subjects })
     }

     handleLike = tutor => {
        const tutors = [...this.state.tutors];
        const index = tutors.indexOf(tutor);
        tutors[index] = {...tutors[index]};
        tutors[index].liked = !tutors[index].liked;
        this.setState({tutors})

    }

    handleDelete = (tutor) => {
        const tutors = this.state.tutors.filter( t => t._id !== tutor._id)
        this.setState({tutors})
     }

     handlePageChange = (page) => {
        this.setState( { currentPage: page })
     }

     handleSubjectSelect = (subject) => {
        this.setState( { selectedSubject : subject, searchQuery: "",  currentPage: 1})
    }

    handleSearch = query => {
        this.setState({ searchQuery: query, selectedSubject: null, currentPage: 1 })
    }

    handleSort = sortColumn => {
        this.setState( { sortColumn })
    }

    getPagedData = () => {
        const { 
            currentPage, 
            sortColumn, 
            pageSize, 
            searchQuery,
            tutors: allTutors, 
            selectedSubject } = this.state;


        let filtered = allTutors;
        
        if(searchQuery)
        filtered = allTutors.filter( 
            t => t.subject.name.toLowerCase().startsWith( searchQuery.toLowerCase()));

        else if(selectedSubject && selectedSubject._id)
        filtered = allTutors.filter( t => t.subject._id === selectedSubject._id );

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])

        const tutors = paginate( sorted , currentPage , pageSize )

        return { totalCount: filtered.length , data : tutors }
    }


    render() { 

        const { length: count } = this.state.tutors;
        const { currentPage, pageSize, sortColumn, searchQuery } = this.state;

        if( count === 0) return <p>No tutors in the database</p>;
        
        const { totalCount, data: tutors } = this.getPagedData();

        
     return ( 
     <div className="row">

         <div className="col-2">
         <ListGroup 
                items={this.state.subjects}
                onItemSelect={this.handleSubjectSelect}
                selectedItem={this.state.selectedSubject}
                />
         </div>

         <div className="col">
         <p>Showing <span className="badge badge-pill badge-warning">{totalCount}</span> tutors in the database.</p>

         <SearchBox
         value={searchQuery}
         onChange={this.handleSearch}
         />

         <TutorsTable 
            tutors={tutors}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
            sortColumn={sortColumn}
            />
         <Pagination 
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
            />
         </div>
         
 </div> );
    }

}
 
export default Tutors;