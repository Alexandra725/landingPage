var newUsers =[];

function storeUsers(){
    const username = document.getElementById("name").value;
    const mail = document.getElementById("mail").value;
    const message = document.getElementById("msg").value;
    let newUser={
        user : username,
        mail : mail,
        message : message,
     }
    
    newUsers.push(newUser);
    console.log(newUsers);
    
    for (let i = 0; i < newUsers.length; i++){
        let storedUserName = newUsers[i].user
        if(containsLetter(storedUserName, "r")){
            console.log("El usurio llamado " + storedUserName + " contiene una r");
        }
    }
}
function containsLetter(str,letter) {
    return str.match(letter)
}