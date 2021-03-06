import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

const EmployeeEdit = ({ id, employeeInfo, history }) => {
    const [employee, setEmployee] = useState(employeeInfo)

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedEmployee = { ...employee }

        updatedEmployee[name] = value;

        setEmployee(updatedEmployee)
    }

    const handleTagChange = (e) => {
        const { value } = e.target;
        const updatedEmployee = { ...employee }

        updatedEmployee['tags'] = value.split(' ')

        setEmployee(updatedEmployee)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const tempEmployee = employee
        tempEmployee['tags'] = tempEmployee['tags'].join(' ')

        fetch(
            'http://localhost:8080/employees/' + id,
            {
                method: 'POST',
                body: JSON.stringify(tempEmployee),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )

        history.push('/')
    }

    return (
        <Container className="d-flex justify-content-center">
            <Card style={{ width: '20rem' }}>
                <Card.Img src={'../assets/' + employee?.image}></Card.Img>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Navn</Form.Label>
                            <Form.Control
                                name="name"
                                onChange={handleChange}
                                type="text"
                                placeholder="Ola Nordmann"
                                value={employee?.name}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Tittel</Form.Label>
                            <Form.Control
                                name="title"
                                onChange={handleChange}
                                type="text"
                                placeholder="Ansatt"
                                value={employee?.title}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Telefon</Form.Label>
                            <Form.Control
                                name="phone"
                                onChange={handleChange}
                                type="text"
                                placeholder="99999999"
                                value={employee?.phone}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                name="email"
                                onChange={handleChange}
                                type="email"
                                placeholder="ola.nordmann@selvklart.no"
                                value={employee?.email}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Arbeidsoppgaver</Form.Label>
                            <Form.Control
                                name="tags"
                                onChange={handleTagChange}
                                type="text"
                                placeholder="Utvikling frontend"
                                value={employee?.tags.join(' ')}
                            />
                        </Form.Group>
                        <Button variant='primary' type='submit'>
                            Lagre
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default EmployeeEdit
