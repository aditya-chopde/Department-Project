import axios from "axios";
import React, { useEffect, useState } from "react";

const LoginRequests = () => {
  const [data, setData] = useState([]);

  async function getUsersData() {
    try {
      await axios
        .get("http://localhost:3000/api/user/get-users")
        .then((res) => {
          setData(res.data.users);
        });
    } catch (error) {
      alert("Error Ocurred: " + error.message);
    }
  }

  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <div className="w-[950px] mx-auto my-15">
      {data.map((item) => (
        <div
          key={item._id}
          className="border p-3 my-3 rounded-md flex flex-row justify-between items-end"
        >
          <div>
            <h1 className="font-bold">{item.name}</h1>
            <p>{item.email}</p>
            <p>{item.department}</p>
            <p>{item.year}</p>
            <p>{item.phone}</p>
          </div>
          <div>
            {item.status === "Pending" ? (
              <div>
                <button className="btn btn-primary">Approve</button>
                <button className="btn">Reject</button>
              </div>
            ) : (
              <button className="btn btn-success">Approved</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoginRequests;
