import { Button, TextField, Container } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
// import { useAuth } from "./Auth";

interface FirstPageProps {
    setLogin: React.Dispatch<React.SetStateAction<boolean>>;
  }

function FirstPage({setLogin}:FirstPageProps) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    // const auth= useAuth();

    const handleFormSubmit = () =>{
        console.log("inside clicked..")
        if(name && email && phone){
            setLogin(true);
            const user = {
                name,
                phone,
                email
            }
            localStorage.setItem('user', JSON.stringify(user));
            navigate('/SecondPage');
            // auth.setLogin(name);
            const storedData = localStorage.getItem('user');
            if(storedData){
                const userData = JSON.parse(storedData);
                console.log(userData)
            }
        }
        else{
            alert('Please provide all the details');
            // setLogin(name);
        }
    } 

  return (
    <Container className="first-container">
        <h1>First Page</h1>
        <TextField label='Name' value={name} onChange={(e)=>setName(e.target.value) } />
        <TextField label='Phone' value={phone} onChange={(e)=>setPhone(e.target.value) } />
        <TextField label='Email' value={email} onChange={(e)=>setEmail(e.target.value) } />
        <Button onClick={handleFormSubmit}>Submit</Button>
    </Container>
  )
}

export default FirstPage