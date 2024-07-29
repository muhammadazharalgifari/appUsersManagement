import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { BsGenderAmbiguous } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { BsPersonVcard } from "react-icons/bs";
import { TbHome } from "react-icons/tb";
import { TbHomeEdit } from "react-icons/tb";
import { SlLocationPin } from "react-icons/sl";

const AddUsers = () => {
  const navigate = useNavigate();

  async function handleSubmit(e) {
    // cegah agar form tidak reload saat submit
    e.preventDefault();

    // mengambil data user dari form input
    const newUsers = {
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

    // memvalidasi form harus di isi,ketika form tidak di isi maka akan muncul alert
    if (
      !newUsers.name ||
      !newUsers.email ||
      !newUsers.gender ||
      !newUsers.address.rt ||
      !newUsers.address.rw ||
      !newUsers.address.street ||
      !newUsers.address.ward ||
      !newUsers.address.subdistrict
    ) {
      alert("Fill in your data correctly");
      return;
    }

    // mengcreate user baru dengan method post dan akan masuk kedalam db dan muncul di list users
    try {
      await axios.post("http://localhost:3000/users", newUsers, {
        "Content-Type": "application/json",
      });
      alert("Data has been sent");
      navigate("/listusers");
    } catch (error) {
      console.log(error);
    }

    console.log(newUsers);
  }

  return (
    <div className="w-[100dvw] min-h-[100dvh] bg-slate-400 mx-auto flex flex-col items-center">
      {/* start judul */}
      <h1 className="font-bold text-2xl mt-6 uppercase select-none">
        add user
      </h1>
      {/* end judul */}

      {/* start form input users */}
      <form
        onSubmit={handleSubmit}
        className={`w-[400px] h-auto p-6 bg-white rounded-lg shadow-lg mt-4 flex flex-col gap-4`}
      >
        <div className="flex items-center gap-3">
          <FiUser className="text-2xl" />
          <input
            type="text"
            id="fullname"
            placeholder="Fullname"
            className="border border-slate-500 rounded-xl shadow-md w-full h-11 px-4"
          />
        </div>
        <div className="flex items-center gap-3">
          <AiOutlineMail className="text-2xl" />
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="border border-slate-500 rounded-xl shadow-md w-full h-11 px-4"
          />
        </div>
        <div className="w-full flex items-center gap-3">
          <BsGenderAmbiguous className="text-2xl" />
          <select
            name="gender"
            id="gender"
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
              className="border border-slate-500 rounded-xl shadow-md w-full h-11 px-4"
            />
          </div>
          <div className="flex items-center gap-3 mb-4">
            <BsPersonVcard className="text-2xl" />
            <input
              type="text"
              id="rw"
              placeholder="RW"
              className="border border-slate-500 rounded-xl shadow-md w-full h-11 px-4"
            />
          </div>
          <div className="flex items-center gap-3 mb-4">
            <SlLocationPin className="text-2xl" />
            <input
              type="text"
              id="street"
              placeholder="Street"
              className="border border-slate-500 rounded-xl shadow-md w-full h-11 px-4"
            />
          </div>
          <div className="flex items-center gap-3 mb-4">
            <TbHome className="text-2xl" />
            <input
              type="text"
              id="ward"
              placeholder="Ward"
              className="border border-slate-500 rounded-xl shadow-md w-full h-11 px-4"
            />
          </div>
          <div className="flex items-center gap-3">
            <TbHomeEdit className="text-2xl" />
            <input
              type="text"
              id="subdistrict"
              placeholder="Subdistrict"
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

export default AddUsers;
