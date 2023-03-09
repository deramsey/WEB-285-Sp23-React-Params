import {useParams} from "react-router-dom";

const user1 = {
  "userID": 1,
  "Name": "Davis",
  "Age": 27
}
const user2 = {
  "userID": 2,
  "Name": "Dan",
  "Age": 29
}
const user3 = {
  "userID": 3,
  "Name": "Nick",
  "Age": 26
}

const user4 = {
    "userID": 4,
    "Name": "Reina",
    "Age": 28
}
const userInfo = [user1, user2, user3, user4];

export default function Users() {
  let p = useParams();
  for(let users of userInfo){
    if(users.userID == p.uid){
      var un =  users.Name;
      var ua = users.Age;
      break;
    }
    else{
      var un =  "Not Found";
      var ua = "Not Found";
    }
  }
  return(
    <div>
    <h1>User Information</h1>
      <p>User ID: {p.uid}</p>
      <p>Name: {un}</p>
      <p>Age: {ua}</p>
    </div>
  )
}