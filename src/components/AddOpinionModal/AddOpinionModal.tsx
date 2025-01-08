import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {v4 as uuidv4} from "uuid";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBinoculars, faMicrophone, faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import {closeModal} from "../../slices/modalsSlice.ts";
import SpeechRecognition, {useSpeechRecognition} from "react-speech-recognition";
import "./recordIndicator.css";

const AddOpinionModal = ({onClose}: { onClose: () => {} }) => {
  const dispatch = useDispatch();
  const [savedTranscript, setSavedTranscript] = useState("");
  const {transcript, listening, resetTranscript, browserSupportsSpeechRecognition} =
    useSpeechRecognition();

  const schema = yup.object({
    id: yup.string().required(),
    description: yup.string().required("Description is required"),
  });

  const handleRecord = () => {
    if (listening) {
      SpeechRecognition.stopListening();
      setSavedTranscript((prev) => prev + " " + transcript);
      resetTranscript();
    } else {
      SpeechRecognition.startListening({continuous: true});
    }
  };

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
      description: "",
    },
  });

  const onSubmit = (data: any) => {
    // dispatch(addEvent(data));
    // reset();
    // dispatch(closeModal({modalName: 'addEventModal'}));
    alert("Modal ")
  };

  if (!browserSupportsSpeechRecognition) {
    alert("Your browser does not support speech recognition");
  }

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
        <h2 className="text-2xl font-bold mb-4 text-center">Add new opinion</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4">
            <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
              Description:
            </label>
            <textarea
              id="description"
              {...register("description")}
              className="w-full border border-gray-300 rounded p-2 bg-white resize-y"
              rows={4}
              placeholder="Write your message here..."
              value={`${savedTranscript} ${transcript}`.trim()}
              onChange={(e) => setValue("description", e.target.value)}

            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add
          </button>
        </form>
        <button onClick={handleRecord}
                className="bg-gray-300 text-gray-700 px-3 py-2 rounded hover:bg-gray-400">
          <FontAwesomeIcon icon={faMicrophone}/>
        </button>
        {listening && <span className="recording-indicator"></span>}
      </div>
    </div>
  );
};

export default AddOpinionModal;