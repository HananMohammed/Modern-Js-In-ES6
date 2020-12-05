function welcome(user="Mystrey", message="Goddady") {

    alert(`Hello ${user}, ${message}`);
}

welcome();

//Regular Simple Function 
function greeting(message){
    return alert(`${message} every One !!!!`);
}

greeting('Good Morning');

//ArroW Function Function
let greeting2 = message =>alert(`${message} every One !!!!`);
greeting2('Good Afternoon');

let createBlog = (title, body) => {
    if(!title) {
        throw new Error('A title is Required') ;
    }

    if (!body) {
        throw new Error('A Body is Required');
    }

    return alert(`${title}, ${body}`);
}

createBlog("Blog 1" , "Loreom Epsiom ") ;