const students = [
    {id:21, name:'Omar'},
    {id:31, name:'Manna'},
    {id:41, name:'Moyuri'},
    {id:51, name:'Deepjol'}
];

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter (s=> s.id > 40);
const biggerO = students.find (s=> s.id > 40);
console.log(biggerO);