import React from 'react';
import TextInput from '../components/TextInput';
import { FiEdit } from 'react-icons/fi';

const PetsForm = () => {
  const handleUploadButtonClick = () => {
    const fileInput = document.getElementById('fileInput');
    fileInput.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const imgElement = document.getElementById('profilePhoto');

    const reader = new FileReader();
    reader.onload = (e) => {
      imgElement.src = e.target.result;
    };
    reader.readAsDataURL(file);
  };

  return (
    <main>
      <section className="bg-slate-100 h-[100vh]">
        <form className="p-6 min-h-[650px] h-[780px] overflow-y-scroll">
          <div className="relative w-[100px] h-[100px] rounded-[50px] shadow-md m-auto mt-0 mb-3 bg-white">
            <input
              id="fileInput"
              type="file"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            <span
              className="flex justify-center items-center absolute w-full h-full bg-[#0000] rounded-[50%] text-[0] text-center cursor-pointer hover:bg-[#0004] hover:transition-all hover:duration-[0.4s] hover:ease-in-out hover:text-2xl"
              onClick={handleUploadButtonClick}
            >
              <FiEdit />
            </span>
            <img
              src={`${import.meta.env.BASE_URL}src/assets/images/defaultProfile.jpg`}
              className="w-full h-full rounded-[50%] object-cover"
              id="profilePhoto"
            />
          </div>
          <TextInput labelName={'Name'} input={'input'} />
          <TextInput labelName={'Age'} input={'input'} />
          <TextInput labelName={'Address'} input={'input'} />
          <TextInput labelName={'Description'} />
          <button className="block p-2 mt-5 mx-auto text-white bg-gray-500 rounded-md">
            Add Pet
          </button>
        </form>
      </section>
    </main>
  );
};

export default PetsForm;
