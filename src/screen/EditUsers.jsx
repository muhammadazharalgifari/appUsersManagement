import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { BsGenderAmbiguous } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { BsPersonVcard } from "react-icons/bs";
import { TbHome } from "react-icons/tb";
import { TbHomeEdit } from "react-icons/tb";
import { SlLocationPin } from "react-icons/sl";

const EditUsers = () => {
  const [queryParams] = useSearchParams();
  let id = queryParams.get("id");
  const [dataEdit, setDataEdit] = useState({});
  const navigate = useNavigate();

  // console.log(id);

  async function handleEdit(e) {
    // cegah agar form reload
    e.preventDefault();

    const newEditUser = {
      name: e.target.fullname.value,
      email: e.target.email.value,
      gender: e.target.gender.value,
      dob: e.target.dob.value,
      address: {
        rt: e.target.rt.value,
        rw: e.target.rw.value,
        street: e.target.street.value,
        ward: e.target.ward.value,
        subdistrict: e.target.subdistrict.value,
      },
    };
    try {
      axios.put(`http://localhost:3000/users/${id}`, newEditUser, {
        "Content-Type": "application/json",
      });
      alert("Data updated successfully");
      console.log(newEditUser);
      navigate("/listusers");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    try {
      axios.get(`http://localhost:3000/users/${id}`).then((res) => {
        setDataEdit(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="w-[100dvw] min-h-[100dvh] bg-slate-400 mx-auto flex flex-col items-center">
      {/* start judul */}
      <h1 className="font-bold text-2xl mt-6 uppercase select-none">
        edit user
      </h1>
      {/* end judul */}

      {/* start form input users */}
      <form
        className={`w-[400px] h-auto p-6 bg-white rounded-lg shadow-lg mt-4 flex flex-col gap-4`}
        onSubmit={handleEdit}
      >
        <div className="flex items-center gap-3">
          <FiUser className="text-2xl" />
          <input
            type="text"
            id="fullname"
            placeholder="Fullname"
            defaultValue={dataEdit?.name}
            className="border border-slate-500 rounded-xl shadow-md w-full h-11 px-4"
          />
        </div>
        <div className="flex items-center gap-3">
          <AiOutlineMail className="text-2xl" />
          <input
            type="email"
            id="email"
            placeholder="Email"
            defaultValue={dataEdit?.email}
            className="border border-slate-500 rounded-xl shadow-md w-full h-11 px-4"
          />
        </div>
        <div className="w-full flex items-center gap-3">
          <BsGenderAmbiguous className="text-2xl" />
          <select
            name="gender"
            id="gender"
            defaultValue={dataEdit?.gender}
            className="w-full px-4 bg-white border border-slate-500 rounded-xl shadow-md h-11"
          >
            <option value="select gender" disabled>
              Select Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="flex items-center gap-3">
          <SlCalender className="text-2xl" />
          <input
            type="date"
            id="dob"
            defaultValue={dataEdit?.dob}
            className="border border-slate-500 rounded-xl shadow-md w-full h-11 px-4"
          />
        </div>

        {/* start detail address users */}
        <details className="pl-6">
          <summary className="my-2 font-thin text-sm cursor-pointer">
            Your Address
          </summary>
          <div className="flex items-center gap-3 mb-4">
            <BsPersonVcard className="text-2xl" />
            <input
              type="text"
              id="rt"
              placeholder="RT"
              defaultValue={dataEdit?.address?.rt}
              className="border border-slate-500 rounded-xl shadow-md w-full h-11 px-4"
            />
          </div>
          <div className="flex items-center gap-3 mb-4">
            <BsPersonVcard className="text-2xl" />
            <input
              type="text"
              id="rw"
              placeholder="RW"
              defaultValue={dataEdit?.address?.rw}
              className="border border-slate-500 rounded-xl shadow-md w-full h-11 px-4"
            />
          </div>
          <div className="flex items-center gap-3 mb-4">
            <SlLocationPin className="text-2xl" />
            <input
              type="text"
              id="street"
              placeholder="Street"
              defaultValue={dataEdit?.address?.street}
              className="border border-slate-500 rounded-xl shadow-md w-full h-11 px-4"
            />
          </div>
          <div className="flex items-center gap-3 mb-4">
            <TbHome className="text-2xl" />
            <input
              type="text"
              id="ward"
              placeholder="Ward"
              defaultValue={dataEdit?.address?.ward}
              className="border border-slate-500 rounded-xl shadow-md w-full h-11 px-4"
            />
          </div>
          <div className="flex items-center gap-3">
            <TbHomeEdit className="text-2xl" />
            <input
              type="text"
              id="subdistrict"
              placeholder="Subdistrict"
              defaultValue={dataEdit?.address?.subdistrict}
              className="border border-slate-500 rounded-xl shadow-md w-full h-11 px-4"
            />
          </div>
        </details>
        {/* end detail address users */}

        {/* button untuk mengconfirm input users */}
        <button className="w-full h-12 rounded-xl shadow-md bg-blue-600 hover:bg-blue-700 text-white transition-colors">
          Confirm
        </button>
        {/* button untuk mengconfirm input users */}
      </form>
      {/* end form input users */}
    </div>
  );
};

export default EditUsers;
