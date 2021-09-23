import axios from 'axios'
import React, { Component } from 'react'
import { Row } from 'react-bootstrap'
import FlowerCards from './FlowerCards'
import { withAuth0 } from '@auth0/auth0-react';


export class Home extends Component {

constructor(props) {
    super(props)

    this.state = {
         flowersData :[],
         show : false
    }
}

componentDidMount=()=>{
    let url2 ='http://localhost:4004/getFlower'
    axios.get(url2).then(element=>{
        this.setState({
            flowersData : element.data,
            show : true,
        })
    })
}

addFlower=(data)=>{
    let newData ={
        email : this.props.auth0.user.email,
        photo : data.photo,
        name : data.name ,
        instructions : data.instructions
    }
    console.log(data);
    axios.post('http://localhost:4004/addFlower',newData)
}

    render() {
        return (
            <>
               <Row style={{gap:'60px' , marginTop:'50px'}}>
                   {this.state.show && this.state.flowersData.map((item,idx)=>{
                       return(
                           <FlowerCards item={item} addFlower={this.addFlower}/>
                       )
                   })}
               </Row>
            </>
        )
    }
}

export default withAuth0(Home)
