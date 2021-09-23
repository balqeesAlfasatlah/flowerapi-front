import React, { Component } from 'react'
import { Col,Card,Button } from 'react-bootstrap'

export class FavCards extends Component {
    render() {
        return (
            <>
               <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={this.props.item.photo} />
                        <Card.Body>
                            <Card.Title>{this.props.item.name}</Card.Title>
                            <Card.Text>
                            {this.props.item.instructions}
                            </Card.Text>
                            <Button onClick={()=>this.props.delete(this.props.idx)} variant="primary">Delete</Button>
                            <Button onClick={()=>this.props.showModelForm(this.props.idx)} variant="primary">Update</Button>
                        
                        </Card.Body>
                    </Card>
                </Col> 
            </>
        )
    }
}

export default FavCards
