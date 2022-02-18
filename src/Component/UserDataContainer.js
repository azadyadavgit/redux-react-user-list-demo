import React, {useEffect,} from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux/userData/userActions'
import ResponsiveTable from './ResponsiveTable';

function UserDataContainer({ userData, fetchUsers }) {
    useEffect(() => {
        fetchUsers()
    }, [])

    return <ResponsiveTable userData={userData}/>
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserDataContainer)