import React, { Component } from 'react'
import { Navigate } from "react-router-dom";
import IdData from "./IdData.js"

let inputcss = {
    margin : "15px"
}

 class Home extends Component {

    constructor(){
        super()
        this.state ={
            result:[],
            random:null, 
            index:null,
            data:{},
            navigate : null                 
        }
    } 

    componentDidMount = ()=>{
        fetch('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=iWfQgU9tIgqS1uksbCvdjAvfe10BJHiUmF0UMBYd')
         .then((response) => response.json())
         .then((data) => this.setState({result : data.near_earth_objects}));

    }

    handleChange = (e)=>{
        // e.preventDefault();
        this.setState({index : e.target.value})
        }
  
    onSubmission = (e)=>{
        e.preventDefault();
        let isDataPresent = false;
        // console.log("submission ")
        // navigate("IdData" , {state : data[index]})
        this.state.result.map((item)=>{
            if(item.id === this.state.index){
                isDataPresent = true;  
                this.setState({
                    navigate : item.id
                })
            }

        })

        if(!isDataPresent){
            alert("Wrong I/p ID:")
    }
}  


    onRandomSub = (e)=>{
        e.preventDefault();
        const len = this.state.result.length
        const output = Math.floor(Math.random()*len)
        this.setState({random : output})
    }
   
    render() {
        
    return (    

        <><form className='container'>
            <div className="input-group input-group-lg" style={inputcss}>
                <span className="input-group-text" id="inputGroup-sizing-lg">Input ID:</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" onChange={this.handleChange} />
            </div>

            <div>
                &nbsp;
            </div>
            <button type="submit" className="btn btn-primary"onClick={(e) => this.onSubmission(e)}>
                Submit
            </button>
            <div>&nbsp;</div>
            <button type="submit" className="btn btn-dark" onClick={(e) => this.onRandomSub(e)}>
                Random Asteroid
            </button>
            <div>
                &nbsp;
            </div>
        </form><>
                <div>
                    {
                        this.state.result.length !== 0 && this.state.random &&
                        <ul className="container">
                            <li>Id:{this.state.result[this.state.random].id}</li>
                            <li>Name: {this.state.result[this.state.random].name}</li>
                            <li>Designation{this.state.result[this.state.random].designation}</li>
                            {/* { <li>Alternate Name :{this.state.result[this.state.result].name_limited}</li> } */}
                            {/* <li>URL :{this.state.result[this.state.result].nasa_jpl_url}</li> */}
                        </ul>
                    }
                </div>
            </>
            {
                this.state.navigate &&
                <Navigate to="/IdData" state={{ item : this.state.result, id : this.state.index}} />
            }</>
    )
  }
}

export default Home;