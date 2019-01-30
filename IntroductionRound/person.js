function Person(firstName, lastName, gender, hobbies){
    this.name ={
        first: firstName,
        last: lastName

    };
    this.gender = gender;
    this.hobbies = hobbies;

}


Person.prototype.sayHello=function(){
    console.log("Hello. My name is "+this.name.first+" "+this.name.last);
}

Person.prototype.tellHobbies=function(){
    switch (this.hobbies.length){

        case 0:
            console.log("I have no hobbies :(\n");
            break;


        case 1:
            console.log("My only Hobby is "+ this.hobbies+"\n");
            break;

        default:
           console.log("My Hobbies are : ");
           for(var i =0; i <this.hobbies.length;i++){

               console.log("-" + this.hobbies[i]);
           }
            console.log();
            break;
    }

}

module.exports= Person;