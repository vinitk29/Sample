import React from "react";
import "./App.css";

const App = (): React.ReactElement => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const [posts, setPosts] = React.useState([]);
    React.useEffect(()=>{
        fetch(url).then(response=>response.json()).then(response=> {
            console.log(response);
            setPosts(response);
        })
    }, [])

    return (
        <>
        <div><h1 className="App">Hello World!</h1></div>
        {posts.map((post:any)=>{return (<div>{post?.title}</div>)})}
        </>
    )
}

export default App;