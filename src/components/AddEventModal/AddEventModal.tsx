import React from "react";
import {useDispatch} from "react-redux";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {v4 as uuidv4} from "uuid";
import {closeModal} from "../../slices/modalsSlice.ts";

const AddEventModal = ({onClose}: { onClose: () => {} }) => {
  const dispatch = useDispatch();

  const schema = yup.object({
    id: yup.string().required(),
    title: yup.string().required("Title is required"),
    group: yup.string().required("Group is required"),
    date: yup.date().required("Date is required"),
    startTime: yup.string().required("Start time is required"),
    endTime: yup.string().required("End time is required"),
  });

  const {
    handleSubmit,
    setValue,
    register,
    reset,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      id: uuidv4(),
      title: "",
      group: "",
      date: new Date(),
      startTime: "",
      endTime: "",
    },
  });

  const onSubmit = (data: any) => {
    // dispatch(addEvent(data));
    // reset();
    // dispatch(closeModal({modalName: 'addEventModal'}));
    alert("Modal ")
  };

  return (
    <div onClick={onClose} className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div onClick={(e) => e.stopPropagation()}
           className="bg-white w-11/12 max-w-lg p-6 rounded-lg shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Add event</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
              Title:
            </label>
            <input
              type="text"
              id="title"
              {...register("title")}
              className="w-full border border-gray-300 rounded p-2 bg-white"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="group" className="block text-gray-700 font-medium mb-2">
              Group:
            </label>
            <select
              id="group"
              {...register("group")}
              className="w-full border border-gray-300 rounded p-2 bg-white"
            >
              <option value="" disabled>
                Select a group
              </option>
              <option value="Group 1">Group 1</option>
              <option value="Group 2">Group 2</option>
              <option value="Group 3">Group 3</option>
            </select>
            {errors.group && (
              <p className="text-red-500 text-sm mt-1">{errors.group.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700 font-medium mb-2">
              Date:
            </label>
            <input
              type="date"
              id="date"
              {...register("date")}
              className="w-full border border-gray-300 rounded p-2 bg-white"
            />
            {errors.date && (
              <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
            )}
          </div>
          <div className="mb-4 flex space-x-4">
            <div className="mb-4">
              <label htmlFor="startTime" className="block text-gray-700 font-medium mb-2">
                Start time:
              </label>
              <input
                type="time"
                id="startTime"
                {...register("startTime")}
                className="w-full border border-gray-300 rounded p-2 bg-white"
              />
              {errors.startTime && (
                <p className="text-red-500 text-sm mt-1">{errors.startTime.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="endTime" className="block text-gray-700 font-medium mb-2">
                End Time:
              </label>
              <input
                type="time"
                id="endTime"
                {...register("endTime")}
                className="w-full border border-gray-300 rounded p-2 bg-white"
              />
              {errors.endTime && (
                <p className="text-red-500 text-sm mt-1">{errors.endTime.message}</p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  )
};

export default AddEventModal;