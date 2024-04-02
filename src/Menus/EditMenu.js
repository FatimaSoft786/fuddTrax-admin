import React, { useState } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import axios from "axios";
export default function EditMenu({ isOpen, onRequestClose, id }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  console.log(onRequestClose);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Edit Modal"
      className="Modal"
      overlayClassName="Overlay"
    >
      <form
        noValidate
        onSubmit={handleSubmit(async (res) => {
          const data = {
            menu_1: res.menu1,
            menu_2: res.menu2,
            menu_3: res.menu3,
            menu_4: res.menu4,
            price: res.price,
          };
          console.log(data);
          axios
            .post(`https://fuddtrax-backend-production.up.railway.app/api/menu//update-menu/${id}`, data)
            .then((response) => {
              console.log(response);
              reset();
              onRequestClose();
              alert("Your menu has been updated please refresh the page");
            })
            .catch((error) => {
              console.log(error);
            });
        })}
      >
        <div className=" flex bg-white justify-end ring-[#de0e02]">
          <p
            className=" w-6 h-6 text-black items-end px-1.5 cursor-pointer rounded-full border border-black"
            onClick={onRequestClose}
          >
            X
          </p>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="email"
            className="block text-sm font-semibold leading-6 text-black"
          >
            Price
          </label>
          <div className="mt-0">
            <input
              type="number"
              name="price"
              {...register("price", {
                required: "price is required",
              })}
              className="block w-full rounded-md bg-white border-0 px-2 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-[#de0e02] sm:text-sm sm:leading-6"
            />
            {errors.price && (
              <p className="text-start text-red-500">{errors.price.message}</p>
            )}
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="email"
            className="block text-sm font-semibold leading-6 mt-2 text-black"
          >
            Menu1
          </label>
          <div className="mt-0">
            <input
              type="text"
              name="number"
              {...register("menu1", {
                required: "Menu is required",
              })}
              className="block w-full rounded-md bg-white border-0 px-2 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-[#de0e02] sm:text-sm sm:leading-6"
            />
            {errors.menu1 && (
              <p className="text-start text-red-500">{errors.menu1.message}</p>
            )}
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="email"
            className="block text-sm font-semibold leading-6 mt-2 text-black"
          >
            Menu2
          </label>
          <div className="mt-0">
            <input
              type="text"
              name="menu2"
              {...register("menu2", {
                required: "Menu is required",
              })}
              className="block w-full rounded-md bg-white border-0 px-2 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-[#de0e02] sm:text-sm sm:leading-6"
            />
            {errors.menu2 && (
              <p className="text-start text-red-500">{errors.menu2.message}</p>
            )}
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="email"
            className="block text-sm font-semibold leading-6 mt-2 text-black"
          >
            Menu3
          </label>
          <div className="mt-0">
            <input
              type="text"
              name="menu3"
              {...register("menu3", {
                required: "Menu is required",
              })}
              className="block w-full rounded-md bg-white border-0 px-2 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-[#de0e02] sm:text-sm sm:leading-6"
            />
            {errors.menu3 && (
              <p className="text-start text-red-500">{errors.menu3.message}</p>
            )}
          </div>
        </div>

        <label
          htmlFor="email"
          className="block text-sm font-semibold leading-6 mt-2 text-black"
        >
          Menu4
        </label>

        <div className="mt-0">
          <input
            type="text"
            name="menu4"
            {...register("menu4", {
              required: "Menu is required",
            })}
            className="block w-full rounded-md bg-white border-0 px-2 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-[#de0e02] sm:text-sm sm:leading-6"
          />
          {errors.menu4 && (
            <p className="text-start text-red-500">{errors.menu4.message}</p>
          )}
        </div>

        <div className=" flex justify-center bg-[#de0e02] mx-auto cursor-pointer  h-10 rounded-md mt-5">
          <button
            type="submit"
            className=" font-normal mt-0 font-sans text-[16px] text-white "
          >
            Save
          </button>
        </div>
      </form>
    </Modal>
  );
}
