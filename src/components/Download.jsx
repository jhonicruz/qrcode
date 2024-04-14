import React from 'react';

const Download = ({ href }) => {
  return (
    <a
      href={href}
      download={`qrcode.png`}
      className="bg-blue-600 w-2/3 m-auto  p-3 rounded-md text-center text-white font-bold uppercase hover:bg-blue-700 transition-all"
    >
      Baixar Qr code
    </a>
  );
};

export default Download;
