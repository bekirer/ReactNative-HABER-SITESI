import React,{useState, useEffect} from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import TwoRowNavbar from "./navbar/navbar";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function App() {
    const [data,setData]=useState([])

    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews=()=>{
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=273e0541fd244641b941f67974cb2257').then
        ((response)=>{
            console.log(response)
            setData(response.data.articles)
        })
    }
   


    return (
      <>
      <TwoRowNavbar></TwoRowNavbar>
        <div className="container my-3">
          <div className="row">
            <div className="col-4">
              
              
             
            </div>
            <div className="container my-3">
          <div className="row">
            {data.map((value) => {
              return (
                
                <Card style={{ width: "18rem" ,
                background: "antiquewhite",
                padding: "10px",
                margin: "1%",borderRadius:"10px"}}>
                  <Card.Img variant="top" src={value.urlToImage} />
                  <Card.Body>
                    <Card.Title>{value.title}</Card.Title>
                    <Card.Text>
                      {value.description}
                    </Card.Text>
                    <Button  variant="primary" onClick={()=>window.open(value.url)}>Read More</Button>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </div></div></div>
      </>
    );
}

export default App;
