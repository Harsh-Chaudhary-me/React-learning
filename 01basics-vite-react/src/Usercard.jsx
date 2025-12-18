// function UserCard(props){
//     return <h1>Hello {props.name}</h1>
   
// }
function UserCard({name,age,role}){
    return <p>{name} is {age} year old and is working as {role}</p>;
}
export default UserCard