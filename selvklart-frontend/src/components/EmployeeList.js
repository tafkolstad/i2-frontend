import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import EmployeeItem from './EmployeeItem'

const EmployeeList = ({ employees }) => {

    return (
        <Container>
            <Row className='text-center'>
                <h1>Våre Ansatte</h1>
            </Row>
            <Row className='justify-content-center'>
                {
                    employees.map((employee, i) => {
                        return (
                            <Col xs={10} sm={8} md={6} lg={4} xl={3}
                                className="mb-5"
                                key={i}
                            >
                                <EmployeeItem employee={employee} />
                                <Row className='mx-auto'>
                                    <Button
                                        variant='primary'
                                        as={Link}
                                        to={'/edit/' + i}
                                    >
                                        Endre
                                    </Button>
                                </Row>
                            </Col>
                        )
                    })}
            </Row>
        </Container>
    )
}

export default EmployeeList
