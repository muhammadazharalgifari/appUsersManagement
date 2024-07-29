import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { BsGenderAmbiguous } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";

const ListUsers = () => {
  const [dataUsers, setDataUsers] = useState([]);
  const [refresh, setRefresh] = useState(false);

  async function getDataUsers() {
    try {
      const response = await axios.get("http://localhost:3000/users");
      console.log(response);
      setDataUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  // useEffect ini dengan dependency array dia dijalankan setelah proses rendering pertama kali selesai dan dependency array kosong itu berfungsi agar useEffect dijalankan sekali saja
  useEffect(() => {
    getDataUsers();
  }, [refresh]);

  async function handleDelete(id, name) {
    const conf = window.confirm(
      `Are you sure you want to delete this data ${name} ?`
    );
    if (!conf) return;

    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      alert("Data deleted successfully");
      setRefresh((prev) => (prev = !prev));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-[100dvw] min-h-[100dvh] bg-slate-400 mx-auto flex flex-col items-center">
      {/* start judul */}
      <h1 className="font-bold text-2xl mt-6 select-none uppercase">
        List Users
      </h1>
      {/* end judul */}

      {/* start card untuk menampilkan list users */}
      <div className="flex flex-wrap justify-center gap-5 mt-6 w-full max-w-6xl px-4">
        {dataUsers.map((e) => (
          <div
            key={e.id}
            className="bg-white p-6 shadow-lg rounded-2xl flex flex-col w-full sm:w-full md:w-[calc(50%-1rem)] lg:w-[calc(33%-1rem)] relative"
          >
            {/* button untuk menghapus data user dan data user ini juga akan terhapus di db */}
            <div
              className="absolute right-5"
              onClick={() => {
                handleDelete(e.id, e.name);
              }}
            >
              <MdOutlineCancel className="fill-red-500 text-2xl cursor-pointer" />
            </div>
            {/* button untuk menghapus data user dan data user ini juga akan terhapus di db */}

            {/* data nama user  */}
            <div className="flex items-center gap-3 mb-3 select-none">
              <FiUser className="text-2xl" />
              <h1>: {e.name}</h1>
            </div>
            {/* data nama user  */}

            {/* data email user */}
            <div className="flex items-center gap-3 mb-3 select-none">
              <AiOutlineMail className="text-2xl" />
              <h1>: {e.email}</h1>
            </div>
            {/* data email user */}

            {/* data gender user */}
            <div className="flex items-center gap-3 mb-2 select-none">
              <BsGenderAmbiguous className="text-2xl" />
              <h1>: {e.gender}</h1>
            </div>
            {/* data gender user */}

            {/* button untuk melihat lebih detail tentang data user */}
            <NavLink to={`/detailusers?id=${e.id}`} className={"w-full"}>
              <button className="w-full h-12 mt-3 mb-2 shadow-lg text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition duration-300">
                Detail
              </button>
            </NavLink>
            {/* button untuk melihat lebih detail tentang data user */}

            {/* button untuk edit data user */}
            <NavLink to={`/editusers?id=${e.id}`} className={"w-full"}>
              <button className="w-full h-12 shadow-lg text-white bg-slate-700 hover:bg-slate-900 rounded-xl transition duration-300">
                Edit
              </button>
            </NavLink>
            {/* button untuk edit data user */}
          </div>
        ))}
      </div>
      {/* end card untuk menampilkan list users */}
    </div>
  );
};

export default ListUsers;
