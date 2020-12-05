let nepal = {
    //add proprty HTML
    mountains: ['Eversits' , 'Fish Tail ', 'Annapurmne'] ,
    //add Method to Print
    printWithDash: function(){ 
        setTimeout(()=>console.log(this.mountains.join('-')), 3000)
    }

}

nepal.printWithDash();
