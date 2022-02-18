
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Container, Row, Col } from 'react-bootstrap'

function ResponsiveTable(porps) {

    const [searchText, setSearchText] = useState('');
    const userData = porps.userData;
    
    // Search 
    function onSearchTextChange(e) {
        setSearchText(e.target.value);
    }

    return userData.loading ? (
        <h2>Loading</h2>
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h4> Users List </h4>
                    </Col>
                </Row>
                <Row>
                    <Col  style={{
                        textAlign:"right"
                      }}>
                        <label>Search By Name : <input type="text" value={searchText}
                            onChange={onSearchTextChange}></input>  </label>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table striped bordered hover variant="light">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>User Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userData &&
                                    userData.users &&
                                    userData.users
                                        .filter((item) => !!searchText ? item.name.toLowerCase().includes(searchText.toLowerCase()) : true)
                                        .map(user => <tr>
                                            <td>{user.name}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                        </tr>)}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ResponsiveTable