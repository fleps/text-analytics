import { useState } from 'react';

const forbiddenList = ['<script>', '@', 'https://'];

const Textarea = ({ text, setText }) => {
  const [warning, setWarning] = useState('');

  const handleTextChange = e => {
    setWarning('');

    let newText = e.target.value;
    const forbiddenWord = forbiddenList.find(word => newText.toLowerCase().includes(word));

    if (forbiddenWord) {
      newText = newText.replace(forbiddenWord, '');
      setWarning(`The input ${forbiddenWord} is not allowed`);
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
