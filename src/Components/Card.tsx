import React ,{useState,useEffect} from 'react';
import { SearchBox } from '@fluentui/react/lib/SearchBox';
import './index.css';
import { initializeIcons } from '@fluentui/react/lib/Icons';

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
            return (
            <div className={isShow?"col-md-4 animated fadeIn":"hidden"} key={data.id.value}>
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src={data.picture.large}
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                  <h5 className="card-title">
                    {data.name.first +
                      " " +
                      data.name.last}
                  </h5>
                  <p className="card-text">
                    {data.location.city +
                      ", " +
                      data.location.state}
                    <br />
                    <span className="phone">{data.phone}</span>
                  </p>
                </div>
              </div>
            </div>
          )})}
        </div>
    
      </div>
    )
}

export default Card