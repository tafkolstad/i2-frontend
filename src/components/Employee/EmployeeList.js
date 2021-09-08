import { React, useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import EmployeeItem from './EmployeeItem'

const EmployeeList = () => {

    const [employees, setEmployees] = useState([{}])

    const getEmployees = () => {
        fetch(
            './assets/ansatte.json',
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                return response.json()
            })
            .then(function (myJson) {
                setEmployees(myJson)
            })
    }

    useEffect(() => {
        getEmployees()
    }, [])

    return (
        <>
            <Container>
                <Row className='text-center'>
                    <h1>Våre Ansatte</h1>
                </Row>
                <Row className='justify-content-center'>
                    {
                        employees.map(({ name, title, phone, email, tags, image }, i) => {
                            return (
                                <EmployeeItem
                                    key={i}
                                    name={name}
                                    title={title}
                                    phone={phone}
                                    email={email}
                                    tags={tags}
                                    image={image}
                                />
                            )
                        })}
                </Row>
            </Container>
        </>
    )
}

export default EmployeeList
