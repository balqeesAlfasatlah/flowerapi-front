import React, { Component } from 'react'
import { Modal,Form ,Button } from 'react-bootstrap'
export class FlowerModel extends Component {
    render() {
        return (
            <>
                <Modal show={this.props.showModel} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.props.update}>
                        <Form.Control type="text" placeholder="Normal text" name="photo" defaultValue ={this.props.photo} />
                        <Form.Control type="text" placeholder="Normal text" name="name" defaultValue ={this.props.name} />
                        <Form.Control type="text" placeholder="Normal text" name="instructions" defaultValue ={this.props.instructions} />
                        <Button type="submit" variant="primary"  onClick={this.props.handleClose}>
                            Save Changes
                        </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>
                            Close
                        </Button>
                        
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default FlowerModel
