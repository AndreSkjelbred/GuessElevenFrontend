import Image from "next/image";

function GameReviews() {
  return (
    <div className='home-review'>
      <div className='review-container'>
        <h2>Best Trivia Football Game Award 2022 </h2>
        <h3>- Sportio Newspaper</h3>
      </div>
      <div className='review-container cursive'>
        <h2>"Best Football UI" </h2>
        <h3>- Bob</h3>
      </div>
      <div className='review-container default-quote-background '>
        <h2 className='default-review'>Fun Game To Play In Class</h2>
        <div className='home-stars img'>
          <Image
            alt='5-stars'
            fill
            src='/../../../../public/assets/5stars.png'
          />
        </div>
      </div>
    </div>
  );
}

export default GameReviews;
