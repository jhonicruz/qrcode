import React from 'react';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';
import Form from './Form';
import Download from './Download';

const Main = () => {
  const [value, setValue] = React.useState('');
  const [qrcodelink, setQrcodeLink] = React.useState('');
  function handleGenerate(url) {
    QRCodeLink.toDataURL(
      url,
      {
        width: 300,
        margin: 1,
      },
      function (err, url) {
        try {
          setQrcodeLink(url);
        } catch (err) {
          console.log(err);
        }
      },
    );
  }
  function handleChange({ target }) {
    setValue(target.value);
    handleGenerate(target.value);
  }

  return (
    <main className="h-mainContainer bg-zinc-900 flex items-center justify-center">
      <div className="flex flex-col gap-2 bg-zinc-800 h-1/2 p-4  justify-center items-center">
        <div className="w-72 bg-zinc-900 flex-1 flex items-center">
          {value ? (
            <QRCode className="max-w-full block " size={300} value={value} />
          ) : (
            <p className="m-auto text-white">Aguardando Link...</p>
          )}
        </div>

        <Form value={value} onChange={handleChange} />
        {qrcodelink && <Download href={qrcodelink} />}
      </div>
    </main>
  );
};

export default Main;
