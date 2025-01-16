import React from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {v4 as uuidv4} from "uuid";
import {useDispatch} from "react-redux";
import {closeModal} from "../../slices/modalsSlice.ts";
import {addGroupAsync} from "../../slices/groupsSlice.ts";

const AddTeacherModal = ({onClose}: { onClose: () => {} }) => {
  const dispatch = useDispatch();

  const schema = yup.object({
    id: yup.string().required(),
    groupName: yup.string().min(2, "The group name must have at least 2 characters.").required("Group name is required."),
  });

  const {
    handleSubmit,
    register,
    reset,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      id: uuidv4(),
      groupName: "",
      supervisors: [],
    },
  });

  type FormData = {
    id: string;
    groupName: string;
    supervisors: string[];
  }

  const onSubmit = async (data: FormData) => {
    try {
      await dispatch(addGroupAsync(data)).unwrap();
      reset();
      dispatch(closeModal({modalName: 'addGroupModal'}));
    } catch (err) {
      console.error('Failed to add group:', err);
    }
  };

  return (
    <div onClick={onClose} className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div onClick={(e) => e.stopPropagation()} className="bg-white w-11/12 max-w-lg p-6 rounded-lg shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Add group</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="groupName" className="block text-gray-700 font-medium mb-2">
              Group Name:
            </label>
            <input
              type="text"
              id="groupName"
              {...register("groupName")}
              className="w-full border border-gray-300 rounded p-2 bg-white"
            />
            {errors.groupName && (
              <p className="text-red-500 text-sm mt-1">{errors.groupName.message}</p>
            )}
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
  );
};

export default AddTeacherModal;
