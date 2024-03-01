import React, { useEffect, useState } from 'react';
import FollowButton from '../../ui/FollowButton';
import { getPetSuggestions } from '../../../service/pets/petService';
import { FiX } from 'react-icons/fi';
import styles from './PetContainer.module.css';
import Spinner from '../../ui/Spinner';

export default function PetLikesModal({ setIsModalOpen }) {
  const [pets, setPets] = useState([]);
  const userId = JSON.parse(localStorage.getItem('userId'));
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getPetSuggestions(userId, 100)
      .then((response) => {
        setPets(response.data.data);
        setIsLoading(false);
      })
      .catch((e) => console.error(e));
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 px-10 w-screen bg-blackOpacity z-[1000]">
        <div
          className={` bg-white m-auto max-w-[700px] h-[calc(100vh-192px)] overflow-auto my-24 rounded-3xl relative`}
        >
          <div className="mt-6 flex flex-col items-center gap-y-8">
            <div className="bg-gradient-to-r from-[#F06900] to-[#C31A02] w-44 h-1 rounded-full" />
            <h3 className="text-title-lg text-center font-bold">Likes</h3>
          </div>
          <FiX
            onClick={() => setIsModalOpen(false)}
            className="absolute top-[30px] right-6 text-[20px] border-[2px] border-solid border-black rounded-[50%] hover:transition-all hover:duration-[0.4s] hover:ease-in-out hover:scale-150 cursor-pointer md:text-[25px]"
          />
          <div
            className={`mt-6 relative mx-5 pr-6 md:mx-20 max-h-[60vh] md:max-h-[560px] overflow-y-auto ${styles.scrollbarCustomLikes}`}
          >
            {pets.length === 0 ? (
              <div>0 comments available</div>
            ) : (
              pets.map((pet) => (
                <div key={pet.petId} className="flex justify-between w-full items-center">
                  <div className="flex py-4 gap-x-4">
                    <img
                      src={pet.image_url}
                      alt="image of another pet"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p>{pet.name}</p>
                      <p>@{pet.name}</p>
                    </div>
                  </div>
                  <FollowButton />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
