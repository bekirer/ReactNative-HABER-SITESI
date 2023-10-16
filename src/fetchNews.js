import React,{useState} from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import TwoRowNavbar from "./navbar/navbar";
function App() {
    const [data,setData]=useState([])
    const fetchNews=()=>{
        axios.get('https://newsapi.org/v2/top-headlines?country=tr&apiKey=273e0541fd244641b941f67974cb2257').then
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
              <div className="card" style={{ width: "18rem" }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            {data.map((value) => {
              return (
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={value.urlToImage} />
                  <Card.Body>
                    <Card.Title>{value.Title}</Card.Title>
                    <Card.Text>
                      {value.Text}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </div>
      </>
    );
}

export default App;