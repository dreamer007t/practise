import { useState } from "react";

function RegistrationForm(){
    const myStyle = {
        color:"red",
        fontSize:"10px",
    }

    const PasswordErrorMessage = () => { 
        return ( 
          <p className="FieldError" style={myStyle}>Password should have at least 8 characters</p> 
        ); 
       }; 
        

    //varaibles for get set filed values
    const [fullName,setFullName] = useState("")
    const [email,setEmail] = useState("") 
    const [password,setPassword] = useState({
        value:"",
        isTouched: false,
    })

    const isValid = () =>{
        return(
            fullName.length > 5
        
        )
    }
    const clearAll = () => {
        setFullName("")
        setEmail("")
        setPassword({
            value:"",
            isTouched: false,
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert("registration completed")
        clearAll();
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Registration Form</h2>
            <div className="Field">
                <label>
                    Full Name:
                </label>
                <input placeholder="Full Name" name="fname" value={fullName} onChange={e=> setFullName(e.target.value)} />
            </div>
            <div className="Field">
                <label>
                    Email:
                </label>
                <input placeholder="Email" />
            </div>
            <div className="Field">
                <label>
                    Password:
                </label>
                <input placeholder="Password" 
                    value={password.value} 
                    onChange = {e => setPassword({...password,  value: e.target.value })} 
                    onBlur = {() => setPassword({...password, isTouched: true})}
                />
                {password.isTouched && password.value.length < 8 ? ( 
                    <PasswordErrorMessage /> 
                ) : null} 
            </div>
            <button type="submit" disabled={!isValid()}>Submit</button>
        </form>
    )
}

export default RegistrationForm;