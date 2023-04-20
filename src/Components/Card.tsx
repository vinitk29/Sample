import React ,{useState,useEffect} from 'react';
import { SearchBox } from '@fluentui/react/lib/SearchBox';
import './index.css';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import Entity from './Entity';
import { ICard } from './ICard';

initializeIcons(/* optional base url */);

function Card() {
    const [user,setUser] = useState([]);
    
    const [value,setValue] = useState("");

    const fetchData =()=>{
        fetch("https://randomuser.me/api/?nat=us&results=100&page=1")
        .then((response) =>{
            return response.json();
        }).then((data)=>{
            let res = data.results
            console.log(res);
            setUser(res)
        })
    }
    useEffect(()=>{
        fetchData();
    },[])

    return (
        <div className="clearfix">
        <div className="search">        
            <SearchBox placeholder="Search" onSearch={newValue => setValue(newValue)} />
        </div>
        <div className="row">
          {user.map((data:any) => {
            const isShow = value=="" || (data.name.first as string)?.toLowerCase().includes(value.toLowerCase()) || (data.name.last as string)?.toLowerCase().includes(value.toLowerCase());
            const entityProps: ICard = {
              isShow,
              firstName: data.name.first,
              lastName: data.name.last,
              id: data.id.value,
              city: data.location.city,
              state: data.location.state,
              phone: data.phone,
              picture: data.picture.large
            }
            return (
            <Entity {...entityProps}/>
          )})}
        </div>
    
      </div>
    )
}

export default Card