let thingsToDo = {
    morning : "Exercise" ,
    afternoon: "Work" ,
    evening: "Code" , 
    night: ["Sleep","Dreem"]
}
//Object Destructing 
let {morning, afternoon} = thingsToDo ;
morning = 'Run' ,
console.log(morning,'-',afternoon)

//Object Destructing With function Argument

//OLD Way 
let uniStudent = student => {

    console.log(`${student.name} from ${student.university}`)
}

uniStudent({
    name:'Hanan',
    university:'FCI'
})

//Improve this using Destructing 
let uniStudent2 = student => {
    let {name,university} = student ;
    console.log(`${name} from ${university}`)
}

uniStudent2({
    name: 'Anne',
    university: 'Enginnering'
})
//Improve this using Destructing While taking an Argument
let uniStudent3 = ({name, university}) => {
    console.log(`${name} from ${university}`)
}

uniStudent3({
    name: 'Eslam',
    university: 'Pharmacy'
})
