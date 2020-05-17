import * as subjectsAPI from "./fakeSubjectService";
 
const tutors = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    name: "Alex Williams",
    subject: { _id: "5b21ca3eeb7f6fbccd471818", name: "Java" },
    profession: "Software Engineer",    
    likeCount: "35K",
    //publishDate: "2018-01-03T19:04:28.809Z",
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    name: "Tom Hardy",
    subject: { _id: "5b21ca3eeb7f6fbccd471814", name: "JavaScript" },
    profession: "Web Developer",
    likeCount: "38K"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    name: "Kevin Simons",
    subject: { _id: "5b21ca3eeb7f6fbccd471820", name: "C++" },
    profession: "Lecturer",
    likeCount: "45K"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    name: "George David",
    subject: { _id: "5b21ca3eeb7f6fbccd471816", name: "C#" },
    profession: "Automation Engineer",
    likeCount: "40K"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    name: "Timothy Clarke",
    subject: { _id: "5b21ca3eeb7f6fbccd471812", name: "Python" },
    profession: "Software Engineer",
    likeCount: "50K"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    name: "Liam Neeson",
    subject:  { _id: "5b21ca3eeb7f6fbccd471810", name: "SQL" },
    profession: "Web Developer",
    likeCount: "48K"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    name: "Noah Peterson",
    subject: { _id: "5b21ca3eeb7f6fbccd471812", name: "Python" },
    profession: "Lecturer",
    likeCount: "39K"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    name: "Logan James",
    subject: { _id: "5b21ca3eeb7f6fbccd471810", name: "SQL" },
    profession: "Lecturer",
    likeCount: "50K"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    name: "Tim Burton",
    subject: { _id: "5b21ca3eeb7f6fbccd471818", name: "Java" },
    profession: "Software Engineer",
    likeCount: "50K"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471844",
    name: "Henry David",
    subject: { _id: "5b21ca3eeb7f6fbccd471818", name: "Java" },
    profession: "Software Engineer",
    likeCount: "55K"
  },
  {
    _id: "5b21ca3eeb7f6fbccdlk1821",
    name: "Linda Norman",
    subject: { _id: "5b21ca3eeb7f6fbccd471816", name: "C#" },
    profession: "Lecturer",
    likeCount: "48K"
  },
  {
    _id: "5b21ca3eeb7f6fbccd4718pp",
    name: "Celine Green",
    subject: { _id: "5b21ca3eeb7f6fbccd471814", name: "JavaScript" },
    profession: "Automation Engineer",
    likeCount: "48K"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    name: "Fin Geller",
    subject: { _id: "5b21ca3eeb7f6fbccd471820", name: "C++" },
    profession: "Web Developer",
    likeCount: "48K"
  },
  
];

export function getTutors() {
  return tutors;
}

export function getTutor(id) {
  return tutors.find(t => t._id === id);
}

export function saveTutor(tutor) {
  let tutorInDb = tutors.find(m => m._id === tutor._id) || {};
  tutorInDb.name = tutor.name;
  tutorInDb.subject = subjectsAPI.subjects.find(s => s._id === tutor.genreId);
  tutorInDb.dailyRentalRate = tutor.dailyRentalRate;
  //tutorInDb.numberInStock = tutor.numberInStock;

  if (!tutorInDb._id) {
    tutorInDb._id = Date.now();
    tutors.push(tutorInDb);
  }

  return tutorInDb;
}

export function deleteMovie(id) {
  let movieInDb = tutors.find(m => m._id === id);
  tutors.splice(tutors.indexOf(movieInDb), 1);
  return movieInDb;
}
