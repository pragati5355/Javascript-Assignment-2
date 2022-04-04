var userList;

/* Fetching the data of users*/

function getUserList(){
    fetch("https://run.mocky.io/v3/010e898c-a05c-4a0a-b947-2a65b5a267c5").then(
    res =>
    {
        res.json().then(data=>
            {
                
                this.userList = data;
                console.log(this.userList);

                displayData(data);
                getUserData(userList,0);
            
            }
        )
    }
)}



function userDetails(index){

    
    console.log(this.userList[index]);

    document.getElementById("image").src=this.userList[index].avatar;
    getUserData(userList,index);

}

window.onload = function mainfun()
{
    getUserList();
}


function greeting(){

   
    var greet ;
    var mydate = new Date();
    var hrs = mydate.getHours();

    

    if(hrs < 12)
    {
        return "Good Morning";
    }
    else if(hrs >= 12 && hrs <= 17)
    {
        return "Good Afternoon";
    }
    else if(hrs >= 17 && hrs <= 24)
    {
        return "Good Evening";
    }

   

}

function displayData(user){ 
    

    var temp = 
        `<tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Employment</th>
            <th>Country</th>
            <th>Delete</th>
        </tr>`;      

    for(let i = 0;i<user.length;i++){    
        temp += `<tr id="${i}" onclick='userDetails(${i})'>`;      
        temp += `<td>${user[i].first_name}</td>`;      
        temp += `<td>${user[i].last_name }</td>`;      
        temp += `<td>${user[i].username}</td>`;      
        temp += `<td>${user[i].employment.title}</td>`;      
        temp += `<td>${user[i].address.country}</td>`;         
        temp += `<td class="material-icons" style="cursor:pointer" onclick='deleteData(${i})'>delete</td>`;      
        temp += "</tr></a>";
    }   
        
        document.getElementById('tableBody').innerHTML = temp;      
    
}

function getUserData(user,i)
{

    let getDetails = "";
    let greet = greeting();
    
    getDetails=    
        `
            <dt>ID:</dt>
            <dd>${user[i].id}</dd>
            <dt>Uid :</dt>
            <dd>${user[i].uid}</dd>
            <dt>FirstName :</dt>
            <dd>${user[i].first_name}</dd>
            <dt>LastName :</dt>
            <dd>${user[i].last_name}</dd>
            <dt>Username :</dt>
            <dd>${user[i].username}</dd>
            <dt>Email :</dt>
            <dd>${user[i].email}</dd>
            <dt>Password :</dt>
            <dd>${user[i].password}</dd>
            <dt>Date_of_birth :</dt>
            <dd>${user[i].date_of_birth}</dd>
            <dt>Gender :</dt>
            <dd>${user[i].gender}</dd>
            <dt>Contact :</dt>
            <dd>${user[i].phone_number}</dd>
            <dt>SIN :</dt>
            <dd>${user[i].social_insurance_number}</dd>
            <dt>Subscription :</dt>
            <dd>${user[i].subscription.status}</dd>
        `

    document.getElementById("List").innerHTML = getDetails; 
    document.getElementById("greetings").innerHTML= greet +`\t`+ user[i].first_name;



}

function deleteData(i){
    if(confirm("Do you want to delete?")){
      
      const list = document.getElementById("tableBody");
      console.log(list);

      if (list.hasChildNodes()) {
      list.removeChild(list.children[i]);
    }
      // console.log(i);
    }
  }


