import { useNavigate } from "react-router-dom"


const Button =(props)=>{
    const navigate = useNavigate();
    return(
        <button onClick={()=>{navigate(props.screen)}}>Click me</button>
    )
}

export default Button;