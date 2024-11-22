import { useEffect, useState } from "react"
import { fetchAllUser } from "../../services/userService"

const Users = (props) => {
    const [listUsers, setListUsers] = useState([])

    useEffect(()=> {
        fetchUsers()    //this is how we use async await with useEffect, cant use directly
    }, [])

    const fetchUsers = async () => {
        let res = await fetchAllUser()

        if(res && res.data && res.data.EC === 0){
            setListUsers(res.data.DT)
            console.log(res.data.DT)
        }
    }

    return(
        <div className="manage-users-container">
            <div className="user-header">
                <div className="title">
                    <div><h3>Table Users</h3></div>
                </div>
                <div className="actions">
                    <button className="btn btn-success">Refresh</button>
                    <button className="btn btn-primary">Add new user</button>
                </div>
            </div>

            <div className="user-body">
                <table class="table table-bordered table-hover">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Users