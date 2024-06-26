import { useState } from 'react';
import Stats from './Stats';
import Textarea from './Textarea';
import { FACEBOOK_MAX_CHARS, INSTAGRAM_MAX_CHARS } from '../utils/constants';

const Container = () => {
  const [text, setText] = useState('');
  const stats = {
    numberOfWords: text.split(' ').length - 1,
    numberOfChars: text.length,
  };
  stats.instagramCharsLeft = INSTAGRAM_MAX_CHARS - stats.numberOfChars;
  stats.facebookCharsLeft = FACEBOOK_MAX_CHARS - stats.numberOfChars;

  return (
    <main className='container'>
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
};

export default Container;
