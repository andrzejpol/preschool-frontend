
const studentsDatabase = [
  {
    id:1,
    firstName: "Jan",
    lastName: "Nowicki",
    age: 4,
    groupId: 2,
    parentsIds: [34],
  },
  {
    id:2,
    firstName: "Natalia",
    lastName: "Nowak",
    age: 6,
    groupId: 2,
    parentsIds: [5],
  },
  {
    id:3,
    firstName: "Kamil",
    lastName: "Michałowski",
    age: 4,
    groupId: 2,
    parentsIds: [4],
  },
  {
    id:4,
    firstName: "Maja",
    lastName: "Pietras",
    age: 5,
    groupId: 1,
    parentsIds: [3],
  },
];

const parentsDatabase = [
  {
    id:1,
    firstName: "Andrzej",
    lastName: "Nowicki",
    email: "jan@nowicki.pl",
    phoneNumber: "234234234",
    childrenIds: [2],
  },
];

enum EmployeeRole {
  PSYCHOLOGIST = "psycholog",
  TEACHER = "teacher",
  COACH = "coach",
}

const teachersDatabase = [
  {
    id:1,
    firstName: "Andrzej",
    lastName: "Nowicki",
    email: "jan@nowicki.pl",
    phoneNumber: "234234234",
    role: EmployeeRole.PSYCHOLOGIST,
  },
];

const Students = () => <p>Students</p>;

  export default Students;