import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { BsGenderAmbiguous } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { BsPersonVcard } from "react-icons/bs";
import { TbHome } from "react-icons/tb";
import { TbHomeEdit } from "react-icons/tb";
import { SlLocationPin } from "react-icons/sl";

const DetailUsers = () => {
  const [queryParams] = useSearchParams();
  const id = queryParams.get("id");
  const [detailUsers, setDetailUsers] = useState();

  console.log(id);

  // mengambil data data users dari endpoint berdasarkan id
  async function getDataById() {
    try {
      const response = await axios.get(`http://localhost:3000/users/${id}`);
      setDetailUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDataById();
  }, []);

  return (
    <div className="flex flex-col items-center mx-auto justify-center w-[100dvw] min-h-[100dvh]  bg-slate-400">
      <h1 className="font-bold text-2xl mt-6 select-none uppercase">
        Detail User
      </h1>
      {/* start card ketika user mengklik detail pada list user akan menampilkan card ini */}
      <div className="bg-white p-6 mt-4 rounded-2xl shadow-lg w-full max-w-sm">
        {/* detail nama user */}
        <div className="flex items-center gap-3 mb-4 select-none">
          <FiUser className="text-2xl" />
          <h1>: {detailUsers?.name}</h1>
        </div>
        {/* detail nama user */}

        {/* detail email user */}
        <div className="flex items-center gap-3 mb-4 select-none">
          <AiOutlineMail className="text-2xl" />
          <h1>: {detailUsers?.email}</h1>
        </div>
        {/* detail email user */}

        {/* detail gender user */}
        <div className="flex items-center gap-3 mb-4 select-none">
          <BsGenderAmbiguous className="text-2xl" />
          <h1>: {detailUsers?.gender}</h1>
        </div>
        {/* detail gender user */}

        {/* detail tanggal lahir user */}
        <div className="flex items-center gap-3 select-none">
          <SlCalender className="text-2xl" />
          <h1>: {detailUsers?.dob}</h1>
        </div>
        {/* detail tanggal lahir user */}

        {/* detail address user */}
        <details className="pl-6">
          <summary className="my-4 font-thin text-sm cursor-pointer">
            Detail Address
          </summary>
          <div className="flex flex-col">
            {/* detail rt user */}
            <div className="flex items-center gap-3 mb-4 select-none">
              <BsPersonVcard className="text-2xl" />
              <p>RT : {detailUsers?.address?.rt}</p>
            </div>
            {/* detail rt user */}

            {/* detail rw user */}
            <div className="flex items-center gap-3 mb-4 select-none">
              <BsPersonVcard className="text-2xl" />
              <p>RW : {detailUsers?.address?.rw}</p>
            </div>
            {/* detail rw user */}

            {/* detail jalan user */}
            <div className="flex items-center gap-3 mb-4 select-none">
              <SlLocationPin className="text-2xl" />
              <p>: {detailUsers?.address?.street}</p>
            </div>
            {/* detail jalan user */}

            {/* detail kelurahan user */}
            <div className="flex items-center gap-3 mb-4 select-none">
              <TbHome className="text-2xl" />
              <p>: {detailUsers?.address?.ward}</p>
            </div>
            {/* detail kelurahan user */}

            {/* detail kecamatan user */}
            <div className="flex items-center gap-3 select-none">
              <TbHomeEdit className="text-2xl" />
              <p>: {detailUsers?.address?.subdistrict}</p>
            </div>
            {/* detail kecamatan user */}
          </div>
        </details>
        {/* detail address user */}
      </div>
      {/* end card ketika user mengklik detail pada list user akan menampilkan card ini */}
    </div>
  );
};

export default DetailUsers;
