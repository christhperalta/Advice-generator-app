import useFetch from "../hooks/useFetch";

export default function Card() {
  const { data, loading, handleOtherAdvice, error } = useFetch(
    "https://api.adviceslip.com/advice"
  );



  return (
    <div className='Card'>
      <article className='Card-article'>
        <h1 className='Card-h1'>ADVICE #{data?.id}</h1>

        {error && <h2 className="Card-text">Sorry something went wrong {error.message}</h2>}

        {loading ? (
          <h2 className='Card-Loading Card-text'>Loading...</h2>
        ) : (
          <p className='Card-text'>{data?.advice}</p>
        )}

        <Picture />
        <Button onOtherClick={handleOtherAdvice} />
      </article>
    </div>
  );
}

function Picture() {
  return (
    <picture className='Card-picture'>
      <source
        srcSet='./assets/images/pattern-divider-mobile.svg'
        media='(max-width : 600px)'
      />
      <img
        src='./assets/images/pattern-divider-desktop.svg'
        alt='pattern-divider'
      />
    </picture>
  );
}

function Button({onOtherClick}) {
  return (
    <button className='Card-button' onClick={onOtherClick}>
      <img
        className='Card-dice-img'
        src='./assets/images/icon-dice.svg'
        alt='icon-dice'
      />
    </button>
  );
}
