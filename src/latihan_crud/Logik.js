import React, { Component } from 'react'
import { Container} from 'react-bootstrap'
import View from './View'

export default class Logik extends Component {
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
               <h2>API Fake</h2>
               
                    {
                        this.state.post.map(post => {

                            return <View key={post.id} title={post.title} body={post.body} />

                        })
                    }
               

            </Container>
        )
    }
}
