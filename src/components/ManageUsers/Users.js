import { useEffect, useState } from "react"
import { fetchAllUser } from "../../services/userService"
import ReactPaginate from "react-paginate"

const Users = (props) => {
    const [listUsers, setListUsers] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [currentLimit, setCurrentLimit] = useState(2)
    const [totalPages, setTotalPages] = useState(0)

    useEffect(()=> {
        fetchUsers()    //this is how we use async await with useEffect, cant use directly
    }, [currentPage])

    const fetchUsers = async () => {
        let res = await fetchAllUser(currentPage, currentLimit)

        if(res && res.data && res.data.EC === 0){
            setTotalPages(res.data.DT.totalPages)
            setListUsers(res.data.DT.users)
        }
    }

    const handlePageClick = (event)=> {
        setCurrentPage(+event.selected + 1)
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
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                            <th scope="col">No</th>
                            <th scope="col">Id</th>
                            <th scope="col">Email</th>
                            <th scope="col">Username</th>
                            <th scope="col">Group</th>
                            <th scope="col">Actions</th>
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
                                            <td>
                                                <button className="btn btn-warning">Edit</button>
                                                <button className="btn btn-danger">Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </>
                            :
                            <>
                                <tr><td>Not found users</td></tr>
                            </>
                            }

                            
                        </tbody>
                    </table>
                </div>
                {totalPages > 0 && //do this so that it the pagination only shows if has data
                <div className="user-footer">
                    <ReactPaginate
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={4}
                        pageCount={totalPages}
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
                        containerClassName="pagination"
                        activeClassName="active"
                        renderOnZeroPageCount={null}
                    />
                </div>
                }
            </div>
        </div>
    )
}
export default Users