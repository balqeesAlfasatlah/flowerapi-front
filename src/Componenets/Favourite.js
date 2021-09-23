import React, { Component } from 'react'
import FavCards from './FavCards'
import axios from 'axios'
import { Row } from 'react-bootstrap'
import FlowerModel from './FlowerModel'
import { withAuth0 } from '@auth0/auth0-react';


export class Favourite extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             favData :[],
             show : false,
             photo : " ",
             name : " ",
             instructions : " ",
             showModel : false,
             index : 0,
        }
    }
    
    componentDidMount=()=>{
        if(this.props.auth0.isAuthenticated){
        let url2 =`http://localhost:4004/getData/${this.props.auth0.user.email}`
        axios.get(url2).then(item=>{
            this.setState({
                favData : item.data,
                show : true,
            })
            console.log(item.data)
        })
    }

}
    delete=(index)=>{
       let id = this.state.favData[index]._id
       axios.delete(`http://localhost:4004/deleteFlower/${id}`).then(item=>{
        this.setState({
            favData : item.data,
            show : true,
        })
       })

    }
    
    showModelForm= (index)=>{
          this.setState({
            index :  index ,
            showModel : true ,
            photo : this.state.favData[index].photo,
            name : this.state.favData[index].name,
            instructions : this.state.favData[index].instructions,


        })
       
    }
    

   handleClose=()=>{
    this.setState({
        showModel:false,
       
    })
   }

   update=(e)=>{
       e.preventDefault();
       let id = this.state.favData[this.state.index]._id
       let data = {
        photo : e.target.photo.value,
        name : e.target.name.value,
        instructions : e.target.instructions.value,

       }
       axios.put(`http://localhost:4004/updateFlower/${id}`,data).then(item=>{
        this.setState({
            favData : item.data,
           
        })
       })
   }




    render() {
        return (
            <>
               <Row style={{gap:'60px' , marginTop:'50px'}}>
                   {this.state.show && this.state.favData.map((item, idx)=>{
                       return(
                           <FavCards item={item} idx={idx} delete={this.delete}  showModelForm= {this.showModelForm}/>
                       )
                   })}
                 
                  <FlowerModel photo={this.state.photo} name={this.state.name} instructions={this.state.instructions} 
                  showModel={this.state.showModel} handleClose={this.handleClose} update={this.update}/>
                  
               </Row> 
            </>
        )
    }
}

export default withAuth0(Favourite)
