function Hello(){
  let myName="Sailesh Gurung";
  let address = () =>{
    return 'Ratnanagar-14, Chitwan'; 
  }
  return <h3>
    Hello Everyone !!!,<br />
    My name is {myName}  and I am from {address()}.
  </h3>
}
export default Hello;