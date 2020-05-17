export const subjects = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Java" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "JavaScript" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "C++" },
  { _id: "5b21ca3eeb7f6fbccd471816", name: "C#" },
  { _id: "5b21ca3eeb7f6fbccd471812", name: "Python" },
  { _id: "5b21ca3eeb7f6fbccd471810", name: "SQL" },
];

export function getSubjects() {
  return subjects.filter(s => s);
}
