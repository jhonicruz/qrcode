import React from 'react';

const Form = ({ value, onChange }) => {
  return (
    <form className="m-auto w-full">
      <input
        className="border border-zinc-800 px-1 py-2 w-full"
        type="text"
        placeholder="Seu Link Aqui..."
        value={value}
        onChange={onChange}
      />
    </form>
  );
};

export default Form;
