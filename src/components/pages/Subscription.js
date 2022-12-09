import React,{useState} from 'react'
import Header from '../Header'


function Subscription(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const sub = {
          name: name, 
          email: email
        };
        console.log(sub);

        fetch('http://localhost:4000/subscription',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(sub)
        })
        .then((res)=> res.json())
        .then(() => { console.log('new subscription added');
    })

    }

    return (
      <div>
        <Header/>
        <div className="subscription-container">
          <div className="subscription">
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

          
              <button>Subscribe</button>
            
            </form>
          </div>
        </div>
      </div>
    )
}

export default Subscription