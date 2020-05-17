import React, { Component } from 'react';
import { getTutors, getTutor } from '../services/fakeTutorService';
import { getSubjects } from '../services/fakeSubjectService';

class TutorForm extends Component {
    state = { 
        tutors : [],
        subjects : [],
        name : '',
        subjectId: '',
        profession: '',
        likesCount: ''

     }

    componentDidMount () {
        this.setState( { tutors: getTutors(), subjects: getSubjects() });

        const tutorId = this.props.match.params.id;
        if ( tutorId === "new" ) return null;

        const tutor = getTutor(tutorId);
        if (!tutor) return this.props.history.replace('/not-found'); 

        this.setState({ data: this.mapToViewModel(tutor) })
}

mapToViewModel(tutor) {
    return {
        _id: tutor._id,
        name: tutor.name,
        subject: tutor.subject.name,
        profession: tutor.profession,
        likesCount: tutor.likesCount
    }
}

    render() { 
        return ( <div>
            <h1>TutorForm</h1>
            <ul>
        <li>Mosh</li>
        <li>Java</li>
        <li>SE</li>
        <li>58K</li>
            </ul>
            
        


        </div> );
    }
}

 
export default TutorForm;