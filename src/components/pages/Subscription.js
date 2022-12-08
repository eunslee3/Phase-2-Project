import React,{useState} from 'react'
import Header from '../Header'


function Subscription(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    // const [dob, setDob] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const sub = {name, email};
        console.log(sub);

        fetch('http://localhost:3001/subscription',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(sub)
        })
        .then((res)=> res.json())
        .then(() => { console.log('new subscription added');
    })

    }

    return (
        
    <div className="subscription">
      <Header/>
      <h2>Subscription</h2>
    <form onSubmit={handleSubmit}>
    <label>Name:</label>
        <input 
        type="text"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
    <label>Email:</label>
    <textarea
      required
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    ></textarea>

    {/* <label>DOB:</label>
        <input 
        type="text"
        required
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        /> */}
        <button>Subscribe</button>
        <p>{name}</p>
        <p>{email}</p>
        {/* <p>{dob}</p> */}
      </form>
       
       
    </div>
    )
}

export default Subscription