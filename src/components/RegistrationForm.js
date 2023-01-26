import { useState } from 'react';
function RegistrationForm(){
    const [form,setFrom] = useState(
        {
            firstName:'Rabsun',
            lastName:'Shrestha',
            email:'rab134av@gmail.com',
    });
    return(
        <>
        <label>
            Your First Name:
        
        <input value={form.firstName} onChange={e => {
            setFrom({
                ...form,
                firstName: e.target.value
            });
        }}
        />
        </label>
        <p>Hello {form.firstName}</p>
        </>

    );
}

export default RegistrationForm;