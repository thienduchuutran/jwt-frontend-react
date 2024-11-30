import { useEffect, useState } from "react"
import { fetchAllUser } from "../../services/userService"
import ReactPaginate from "react-paginate"

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

    const handlePageClick = (event)=> {
        
    }

    return(
        <div className="container">
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
                            <th scope="col">No</th>
                            <th scope="col">Id</th>
                            <th scope="col">Email</th>
                            <th scope="col">Username</th>
                            <th scope="col">Group</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listUsers && listUsers.length > 0 ?
                            <>
                                {listUsers.map((item, index)=> {
                                    return(
                                        <tr key={`row-${index}`}>
                                            <td>{index + 1}</td>
                                            <td>{item.id}</td>
                                            <td>{item.email}</td>
                                            <td>{item.username}</td>
                                            <td>{item.Group? item.Group.name : ''}</td>
                                        </tr>
                                    )
                                })}
                            </>
                            :
                            <>
                                <span>Not found users</span>
                            </>
                            }

                            
                        </tbody>
                    </table>
                </div>
                <div className="user-footer">
                    <ReactPaginate
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={4}
                        pageCount={50}
                        previousLabel="< previous"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                    />
                </div>
            </div>
        </div>
    )
}
export default Users