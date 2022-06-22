// Add your code here
window.onload = function (){
    //Dog Server
    
    // const formData = {
    //     dogName: "Byron",
    //     dogBreed: "Poodle"
    // };
    
    // const configObj = {
    //     method: "POST",
    //     headers:{
    //         "Content-Type": "application/json",
    //         "Accept": "application/json"
    //     },
    //     body: JSON.stringify(formData)
    // }
    
    // const error = {message: "Something went wrong!"};
    
    // fetch("http://localhost:3000/dogs", configObj)
    // .then (function(response){
    //     return response.json();
    // })
    // .then (function(json){
    //     console.log(json)
    // })
    // .catch(function(error) {
    //     alert("Bad things! Ragnarők!");
    //     console.log(error.message);
    //   });
    
    //Test 1 - Send Data users
    //Test 2- Handle the Response
    
    const submitData = ( name, email ) => {
        let userData = {
            'name' : name,
            'email' : email
        };
        window.fetch("http://localhost:3000/users",{
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Accept": "application/json"
            }
        ,
        body: JSON.stringify(userData)
        })
        .then(response => response.json)
        .then (json => console.log(json))
        .catch(function(error){
            alert("Bad things! Ragnarők!");
            console.log(error.message);
        })
    };
    submitData("Natasha","nat@hotmail.com");
};
    
    