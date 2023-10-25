import { useSelector } from "react-redux";

const Greeting = () =>{
    const message = useSelector((store)=> store.message.value);
    return (
        <>
          <h1>{message.greeting}</h1>
        </>
    )
}
export default Greeting