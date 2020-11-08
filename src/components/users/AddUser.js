import React,{useState} from "react";
const AddUser =()=>{
    const[user,setUser]=useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:"",
    });
    const{name,username,email,phone,website}=user;
    const onInputChange=e=>{
        setUser({...user, [e.target.name]:e.target.value});
    };
    const onSubmit=e=>{
        e.preventDefault()
    };
    return(
    <div>
        <h2>Addduser</h2>
        <form onSubmit={e=>onSubmit(e)}>
             


  <div className="form-group">
  <label className="exampleInputEmail1"> name</label>
    <input 
     value={name}
      className="form-control" 
      name="name" 
      onChange={e=>onInputChange(e)}
       />
  </div>

  <div className="form-group">
    <label for="exampleInputEmail1">username </label>
    <input 
    type="text" 
    className="form-control" 
     name="username" 
     value={username}
     onChange={e=>onInputChange(e)}/>
    
  </div>

  <div className="form-group">
  <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" name="email" value={email} onChange={e=>onInputChange(e)}  aria-describedby="emailHelp"/>
    
  </div>

  <div className="form-group">
    <label for="exampleInputEmail1"> phone</label>
    <input type="text" className="form-control" onChange={e=>onInputChange(e)}  name="phone" value={phone} aria-describedby="emailHelp"/>
    
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">
         website</label>
    <input type="text" className="form-control" onChange={e=>onInputChange(e)} name="website" value={website} aria-describedby="emailHelp"/>
    
  </div>

  
  <button type="submit" class="btn btn-primary">AddUser</button>
</form>
    </div>
    );
};
export default AddUser;