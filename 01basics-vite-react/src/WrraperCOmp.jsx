/* <Card>
    <h1>Hello from card</h1>
    <p>Welcome to the main page here</p>
</Card> */

function Card({children}) {
    return <div  style={{border:"1px solid black"}}>{children}</div>
}
export default Card