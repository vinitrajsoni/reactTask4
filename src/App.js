import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`https://dummyjson.com/users`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData.users);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <table>
        <tbody>
          <tr>
            <th>id</th>
            <th>Image</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone</th>
            <th>UserName</th>
            <th>Password</th>
            <th>Birthdate</th>
            <th>BloodGroup</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Domain</th>
            <th>Ip</th>
          </tr>
          {data.map((users, index) => (
            <tr key={index}>
              <td>{users.id}</td>
              <td>
                <img src={users.image} alt="" height={50} />
              </td>
              <td>{users.firstName}</td>
              <td>{users.lastName}</td>
              <td>{users.age}</td>
              <td>{users.gender}</td>
              <td>{users.email}</td>
              <td>{users.phone}</td>
              <td>{users.username}</td>
              <td>{users.password}</td>
              <td>{users.birthDate}</td>
              <td>{users.bloodGroup}</td>
              <td>{users.height}</td>
              <td>{users.weight}</td>
              <td>{users.domain}</td>
              <td>{users.ip}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;