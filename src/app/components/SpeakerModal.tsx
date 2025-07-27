import React from 'react';
import Image from 'next/image';
import fav from '../../../public/assets/fav.png'; // Female avatar

// Define the shape of the speaker object (same as Person in MeetOurSpeakers.tsx)
interface Person {
  name: string;
  qualification?: string;
  gender?: 'male' | 'female'; // Optional, as not always used in modal
  dp?: string;
  role?: string;
  role2?: string;
  details?: string;
}

// Define the props for the SpeakerModal component
interface SpeakerModalProps {
  isOpen: boolean;
  onClose: () => void;
  speaker: Person | null; // Allow null to match MeetOurSpeakers
}

const SpeakerModal: React.FC<SpeakerModalProps> = ({ isOpen, onClose, speaker }) => {
  if (!isOpen || !speaker) return null; // Return null if speaker is null

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Check if the click is on the backdrop
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 text-black "
      onClick={handleBackdropClick}
    >
      <div className="bg-white p-6 rounded-lg flex flex-col justify-center overflow-auto items-center max-w-xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          Close
        </button>
        <div className="w-96 h-96 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center mb-4">
          <Image
            src={speaker.dp ?? fav}
            alt={speaker.name}
            className="object-cover h-full w-full"
            width={384} // w-96 = 384px
            height={384} // h-96 = 384px
          />
        </div>
        <h3 className="2xl:text-2xl text-xl font-bold h-9 text-blue-800 my-2">{speaker.name}</h3>
        <p className="text-sm text-gray-500 mb-4 h-9">{speaker.qualification ?? ''}</p>
        <p className="2xl:text-2xl text-md font-bold text-black my-2">{speaker.role ?? ''}</p>
        <p className="text-sm overflow-auto">{speaker.details ?? 'lorem ipsum dolor'}</p>
      </div>
    </div>
  );
};

export default SpeakerModal;