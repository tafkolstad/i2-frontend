import React from 'react'
import Card from 'react-bootstrap/Card'
import PropTypes from 'prop-types'

const EmployeeItem = ({ employee }) => {
    const capitalizeString = (str) => {
        let firstChar = str.substring(0, 1)
        const restStr = str.substring(1)

        return firstChar.toUpperCase() + restStr
    }

    return (
        <Card>
            <Card.Img src={'./assets/' + employee.image}></Card.Img>
            <Card.Body>
                <Card.Text>{employee.name}</Card.Text>
                <Card.Text>{employee.title}</Card.Text>
                <Card.Text>Telefon: {employee.phone}</Card.Text>
                <Card.Text>E-post: {employee.email}</Card.Text>
                <Card.Text>Arbeidsoppgaver: </Card.Text>
                <ul>
                    {employee.tags.map((tag, i) => {
                        return <li key={i}>{capitalizeString(tag)} </li>
                    })}
                </ul>
            </Card.Body>
        </Card>
    )
}

EmployeeItem.propTypes = {
    email: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
}

EmployeeItem.defaultProps = {
    email: 'default@email.com',
    image: '',
    name: 'Default Name',
    phone: '99999999',
    tags: ['de', 'fa', 'ult'],
    title: 'Default Title',
}

export default EmployeeItem
