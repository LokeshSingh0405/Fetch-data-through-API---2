import React, { Component } from 'react'

import {
  useLocation,
  useNavigate,
  useParams
} from "react-router-dom";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

let form = {
  margin : "250px"   
 }

class IdData extends Component {

  constructor(props){
    super(props)
    this.state = {
      
    }
  }


  render() {
    const { location } = this.props.router;
    console.log(location);

    const data  = location.state.item.filter(item => item.id === location.state.id)
    console.log(data.length)

    return (
      <div>
        <div className='container'>
          <div>
              <ul className="list-group" style={form}>
              <li className="list-group-item">{data[0].id}</li>
              <li className="list-group-item">{data[0].name}</li>
              <li className="list-group-item">{data[0].name_limited}</li>
              <li className="list-group-item">{data[0].nasa_jpl_url}</li>
              <li className="list-group-item">{data[0].designation}</li>
              </ul>
          </div>
        </div>      
      </div>
    )
  }
}

export default withRouter(IdData)