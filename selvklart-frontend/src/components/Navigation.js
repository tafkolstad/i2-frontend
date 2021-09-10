import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import EmployeeList from './EmployeeList'
import EmployeeEdit from './EmployeeEdit'

const Main = () => {
    const [employees, setEmployees] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()

    const getEmployees = () => {
        setLoading(true)

        fetch(
            'http://localhost:8080/employees',
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then((response) => response.json())
            .then((myJson) => setEmployees(myJson))
            .catch((err) => setError(err))
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        getEmployees()
    }, [])

    if (loading) {
        return <p>Loading data</p>
    }

    if (error || !Array.isArray(employees)) {
        return <p>Could not load employees</p>
    }

    return (
        <Switch>
            <Route exact path='/' render={() => {
                return <EmployeeList employees={employees} />
            }} />
            <Route path='/edit/:id' render={props => {
                const id = Number(props.match.params.id)
                return <EmployeeEdit id={id} employeeInfo={employees[id]} history={props.history} />
            }
            }></Route>
        </Switch>
    )
}

export default Main
