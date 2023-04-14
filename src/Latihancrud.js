import React, { Component } from 'react'
import View from './latihan_crud/View'
import { Container, Row } from 'react-bootstrap';

export default class Latihancrud extends Component {

    state = {
        post: []
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    post: json
                })
            })
    }


    render() {
        return (
            <Container>
                <h2>restAPI</h2>
                <Row>
                    {
                        this.state.post.map(post => {

                            return <View key={post.id} title={post.title} body={post.body} />

                        })
                    }
                </Row>
            </Container>
        )
    }
}
