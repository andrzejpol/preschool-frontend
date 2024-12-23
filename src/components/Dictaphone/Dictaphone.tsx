import React from "react";
import SpeechRecognition, {useSpeechRecognition} from "react-speech-recognition";

const Dictaphone = () => {
  const {transcript, listening, resetTranscript, browserSupportsSpeechRecognition} =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <p>Your browser does not support speech recognition.</p>;
  }

  return (
    <div>
      <h1 className="text-lg font-bold mb-4">Voice to Text</h1>
      <button
        onClick={SpeechRecognition.startListening}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mr-2"
      >
        Start Listening
      </button>
      <button
        onClick={SpeechRecognition.stopListening}
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 mr-2"
      >
        Stop Listening
      </button>
      <button
        onClick={resetTranscript}
        className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
      >
        Reset
      </button>
      <p className="mt-4">
        <strong>Listening:</strong> {listening ? "Yes" : "No"}
      </p>
      <p className="mt-4">
        <strong>Transcript:</strong> {transcript}
      </p>
    </div>
  );
};

export default Dictaphone;
