import API from "@/lib/baseUrl";
import { useEffect, useState } from "react";
import { Bounce, toast } from "react-toastify";

interface User {
  _id: string;
  email: string;
  department: string;
  name: string;
  password: string;
  phone: string;
  status: string;
  year: string;
  isVerified: string;
}

const LoginRequests = () => {
  const [data, setData] = useState<User[]>([]);

  const getLoginRequests = async () => {
    await API.get("/user/get-users")
      .then((response) => {
        const usersData = response.data.users;
        setData(usersData.reverse());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const approveLogin = async (id: string) => {
    await API.post(`/admin/approve-login/${id}`)
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
          getLoginRequests();
        } else {
          toast.error(res.data.message, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const rejectLogin = async (id: string) => {
    await API.post(`/admin/reject-login/${id}`)
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
          getLoginRequests();
        } else {
          toast.error(res.data.message, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getLoginRequests();
  }, []);

  return (
    <div className="mx-10 my-5">
      <h1 className="font-bold text-2xl">Recent Login Requests</h1>
      <div className="flex flex-row flex-wrap gap-3">
        {data.map((user: User) => (
          <div
            key={user._id}
            className="border rounded-md p-4 my-3 border-black lg:w-[28%] md:w[35%] flex flex-col justify-between"
          >
            <div>
              <p>
                <strong>Name:</strong> {user.name}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Department:</strong> {user.department}
              </p>
              <p>
                <strong>Year:</strong> {user.year}
              </p>
              <p>
                <strong>Phone:</strong> {user.phone}
              </p>
            </div>
            <div className="my-3">
              {user.status === "Pending" ? (
                <div className="flex lg:flex-row flex-col gap-3">
                  <button className="bg-green-500 text-white px-3 py-2 rounded-sm cursor-pointer hover:-translate-y-1 transition-all" onClick={() => approveLogin(user._id)}>
                    Approve
                  </button>
                  <button className="bg-red-500 text-white px-3 py-2 rounded-sm cursor-pointer hover:-translate-y-1 transition-all" onClick={()=> rejectLogin(user._id)}>
                    Reject
                  </button>
                </div>
              ) : (
                <button
                  className={` ${
                    user.status === "Approved"
                      ? "bg-green-500 text-white px-3 py-2 rounded-sm cursor-pointer "
                      : "bg-red-500 text-white px-3 py-2 rounded-sm cursor-pointer "
                  }`}
                >
                  {user.status}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoginRequests;
