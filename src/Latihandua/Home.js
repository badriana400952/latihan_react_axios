import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
// import View from './Fiew'
import Navbarcom from './Navbarcom'
import axios from 'axios'
export default class Home extends Component {
    state = {
        ganti: []
    }

    componentDidMount() {
        // axios.get('/user?ID=12345')
        //     .then(function (response) {
        //         // handle success
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         // handle error
        //         console.log(error);
        //     })

        // axios.get('https://developers.themoviedb.org/3/')
        //     .then((result) => {
        //         this.setState({
        //             ganti: result.data

        //         })
        //         console.log(result.data)
        //     })

        axios.get('https://developers.themoviedb.org/3/movie/{movie_id}')
            .then(result => {
                console.log(result.data);
                this.setState ({
                    ganti : result.data
                })
               
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
    render() {
        return (
            <div>
                <Navbarcom />
                <Container className='mt-3'>
                    <Row>
                        {

                            this.state.ganti.map(ganti => {

                                // return <View key={ganti.id} name={ganti.name} email={ganti.email} body={ganti.body} />
                            })
                        }
                    </Row>
                </Container>


            </div>
        )
    }
}
