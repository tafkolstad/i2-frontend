import React from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import PropTypes from 'prop-types'

const EmployeeItem = ({ name, title, phone, email, tags, image }) => {

    const capitalizeString = (str) => {
        let firstChar = str.substring(0, 1)
        let restStr = str.substring(1)

        return firstChar.toUpperCase() + restStr
    }

    return (
        <>
            <Col
                xs={10} sm={8} md={6} lg={4} xl={3}
                className="mb-5"
            >
                <Card>
                    <Card.Img src={'./assets/' + image}></Card.Img>
                    <Card.Body>
                        <Card.Text>{name}</Card.Text>
                        <Card.Text>{title}</Card.Text>
                        <Card.Text>Telefon: {phone}</Card.Text>
                        <Card.Text>E-post: {email}</Card.Text>
                        <Card.Text>Arbeidsoppgaver: </Card.Text>
                        <ul>
                            {tags.map((tag, i) => {
                                return <li key={i}>{capitalizeString(tag)} </li>
                            })}
                        </ul>
                    </Card.Body>
                </Card>
            </Col>
        </>
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
