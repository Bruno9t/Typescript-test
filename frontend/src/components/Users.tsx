import React,{useEffect,useState} from 'react'
import api from '../services/api'

import User from './User'

interface IUser{
    name:string;
    email:string
  }

const Users = ()=>{
    const [users,setUsers] = useState<IUser[]>([])

    useEffect(()=>{
        api.get<IUser[]>('/users').then(response=>{
            setUsers(response.data)
        })
    },[])
    

    return (
        <div>
            {users.map(user => <User key={user.email} user={user} />)}
        </div> 
    )
}

export default Users
