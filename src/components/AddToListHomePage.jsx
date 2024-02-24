import React from 'react';
import AddIcon from '@mui/icons-material/Add';
export default function AddToListHomePage() {
  return (
    <>
      <button className="bg-[#292929] flex gap-1 pl-4 pr-6 py-3 rounded-full font-Roboto hover:scale-105">
        <AddIcon></AddIcon>
        ADD TO LIST
      </button>
    </>
  );
}
