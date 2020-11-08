import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'


const Home = ({ usersList }) => {
  const [users, SetUser] = useState(usersList);
  return (
    <div className="container">

      <div className="py-4">
        <h1> Home Page</h1>
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>

            {
              users?.map((user, index) => (
                <tr>
                  <th> {index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link>View </Link>
                    <Link> Edit </Link>
                    <Link> Delete </Link>
                  </td>

                </tr>


              )


              )
            }
          </tbody>

        </table>
      </div>
    </div>

  );
};
Home.propTypes = {
  usersList: PropTypes.array
}
export default Home;