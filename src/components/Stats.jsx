const Stats = ({ stats: { numberOfChars, numberOfWords, instagramCharsLeft, facebookCharsLeft } }) => {
  return (
    <section className='stats'>
      <Stat count={numberOfWords} label={'Words'} />
      <Stat count={numberOfChars} label={'Characters'} />
      <Stat count={instagramCharsLeft} label={'Instagram'} />
      <Stat count={facebookCharsLeft} label={'Facebook'} />
    </section>
  );
};

export default Stats;

const Stat = ({ count, label }) => {
  return (
    <section className='stat'>
      <span className={`stat__number ${count < 0 ? 'stat__number--limit' : ''}`}>{count}</span>
      <h3 className='second-heading'>{label}</h3>
    </section>
  );
};
