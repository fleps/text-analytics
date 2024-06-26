import { useState } from 'react';

const forbiddenList = ['<script>', '@', 'https://'];

const Textarea = ({ text, setText }) => {
  const [warning, setWarning] = useState('');

  const handleTextChange = e => {
    setWarning('');

    let newText = e.target.value;
    const fobiddenWord = forbiddenList.find(word => newText.toLowerCase().includes(word));

    if (fobiddenWord) {
      newText = newText.replace(fobiddenWord, '');
      setWarning(`The input ${fobiddenWord} is not allowed`);
    }

    setText(newText);
  };

  return (
    <div className='textarea__container'>
      <div className='warning'>{warning}</div>
      <textarea
        value={text}
        className='textarea has-custom-scrollbar'
        placeholder='Enter your text here...'
        spellCheck='false'
        onChange={e => {
          handleTextChange(e);
        }}></textarea>
    </div>
  );
};

export default Textarea;
