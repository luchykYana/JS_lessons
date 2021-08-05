const students = [
    {
        name: 'Albert',
        statement1: ['German', true],
        statement2: ['Heinrich', 'Netherlands']
    },
    {
        name: 'Bernard',
        statement1: ['Portugal'],
        statement2: ['Valentine', 'Netherlands']
    },
    {
        name: 'Valentine',
        statement1: ['German'],
        statement2: ['Bernard', 'France']
    },
    {
        name: 'Heinrich',
        statement1: ['Netherlands'],
        statement2: ['Daniel', 'Spain']
    },
    {
        name: 'Daniel',
        statement1: ['Spain'],
        statement2: ['Albert', 'Portugal']
    },
]

const trueStudents = [];

map1 = new Map;
map2 = new Map;
map3 = new Map;
map4 = new Map;
map5 = new Map;



if(students[0].statement1[1] === true){

    map1.set('name', students[0].name).set('country', `${students[0].statement1[0]}`);
    trueStudents.push(map1);
    students[0].statement2.push(false);

    for (let i = 1; i < students.length; i++) {
        if(students[i].statement1[0] === map1.get('country')){
            students[i].statement1.push(false);
            students[i].statement2.push(true);
            map2.set('name', students[i].name);
            map3.set('name', students[i].statement2[0]).set('country', students[i].statement2[1]);
            trueStudents.push(map2);
            trueStudents.push(map3);
        }
    }

    for (let i = 1; i < students.length; i++){
        if(students[i].statement2[0] === map1.get('name')){
            students[i].statement2.push(false);
            students[i].statement1.push(true);
            map4.set('name', students[i].name).set('country', students[i].statement1[0])
            trueStudents.push(map4);
        }
    }

    for (let i = 1; i < students.length; i++){
        if(students[i].name === map3.get('name')){
            students[i].statement1.push(false);
            students[i].statement2.push(true);
            let student = trueStudents.find(trueStudent => students[i].statement2[0] === trueStudent.get('name'));
            student.set('name', students[i].statement2[0]).set('country', students[i].statement2[1]);
        }
    }


    let person = students.find(student => student.statement1[0] === map2.get('country'))

    person.statement1.push(false);
    person.statement2.push(true);
    map5.set('name', person.name).set('country', 'Portugal');
    trueStudents.push(map5);

}


console.log(trueStudents);
console.log(students);