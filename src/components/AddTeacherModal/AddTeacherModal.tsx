import React from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {v4 as uuidv4} from "uuid";
import {useDispatch} from "react-redux";
import {addTeacher} from "../../slices/allTeachersSlice.ts";

const AddTeacherModal = ({onClose}: { onClose: () => {} }) => {
  const dispatch = useDispatch();

  const schema = yup.object({
    // photo: yup
    //   .mixed()
    //   .nullable()
    //   .test("required", "The photo is required.", (value) => value instanceof File),
    id: yup.string().required(),
    firstName: yup.string().min(2, "The first name must have at least 2 characters.").required("First name is required."),
    lastName: yup.string().min(2, "The last name must have at least 2 characters.").required("Last name is required."),
    email: yup.string().email("Please provide a valid email address.").required("Email is required."),
    phone: yup
      .string()
      .matches(/^\d{9}$/, "The phone number must contain exactly 9 digits.")
      .required("The phone number is required"),
    subjects: yup
      .array()
      .of(yup.string().required("Each subject must be a text."))
      .min(1, "At least one subject must be assigned."),
    classes: yup
      .array()
      .of(yup.string().required("Each class must be a text."))
      .min(1, "At least one class must be assigned."),
    address: yup.string().required("Address is required"),
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
      photo: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subjects: [],
      classes: [],
      address: ""
    },
  });

  const onSubmit = (data: any) => {
    dispatch(addTeacher(data));
    reset();
  };

  const handleSubjectsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const subjectsArray = value.split(",").map((subject) => subject.trim());
    setValue("subjects", subjectsArray);
  };

  const handleClassesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const subjectsArray = value.split(",").map((subject) => subject.trim());
    setValue("classes", subjectsArray);
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
        <h2 className="text-2xl font-bold mb-4 text-center">Add teacher</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              {...register("firstName")}
              className="w-full border border-gray-300 rounded p-2 bg-white"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              {...register("lastName")}
              className="w-full border border-gray-300 rounded p-2 bg-white"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email:
            </label>
            <input
              type="text"
              id="email"
              {...register("email")}
              className="w-full border border-gray-300 rounded p-2 bg-white"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
              Phone:
            </label>
            <input
              type="text"
              id="phone"
              {...register("phone")}
              className="w-full border border-gray-300 rounded p-2 bg-white"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="subjects" className="block text-gray-700 font-medium mb-2">
              Subjects:
            </label>
            <input
              type="text"
              id="subjects"
              onChange={handleSubjectsChange}
              className="w-full border border-gray-300 rounded p-2 bg-white"
            />
            {errors.subjects && (
              <p className="text-red-500 text-sm mt-1">{errors.subjects.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="classes" className="block text-gray-700 font-medium mb-2">
              Classes:
            </label>
            <input
              type="text"
              id="classes"
              onChange={handleClassesChange}
              className="w-full border border-gray-300 rounded p-2 bg-white"
            />
            {errors.classes && (
              <p className="text-red-500 text-sm mt-1">{errors.classes.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
              Address:
            </label>
            <input
              type="text"
              id="address"
              {...register("address")}
              className="w-full border border-gray-300 rounded p-2 bg-white"
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
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
