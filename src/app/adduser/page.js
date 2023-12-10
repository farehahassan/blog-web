"use client"
import React, { useState } from 'react';

const page = () => {
    const [name , setName] = useState("");
    const [age , setAge] = useState("");
    const [email , setEmail] = useState("");

    const addUser= async()=>{
        let data = await fetch("http://localhost:3000/api/users",{
        method: "post",
        body: JSON.stringify({name,age,email})
        });
        data = await data.json();
        console.log(data)

        if(data.success){
            alert("new user added")
        }
        else{
            alert("something went wrong")
        }

    }
    return (
        <div >
            <h1>add users</h1>
            <input type="text" value={name} placeholder='Enter Name' onChange={(e)=>setName(e.target.value)}/>
            <br />
            <br />
            <input type="text" value={age} placeholder='Enter age' onChange={(e)=>setAge(e.target.value)}/>
            <br />
            <br />
            <input type="text" value={email} placeholder='Enter email' onChange={(e)=>setEmail(e.target.value)}/>
            <br />
            <br />
            <button onClick={addUser}>Add user</button>
        </div>
    );
};

export default page;