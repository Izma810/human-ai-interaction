import Head from 'next/head';
import YicsIcon from '../public/icons/yics.svg';
import Github from '../public/icons/github.svg';
import Image from 'next/image';

function Home(){

  const GoDown = () => {
        window.scrollTo({
            top: 500,
            behavior: "smooth",
        })
  }

  return(
    <div className='home'>
      <div className='home__text'>
        <div className='htext__professor-text'>
          Dr. Tianyi Zhang
        </div>
        <div className='htext__bold-text'>
          Human-AI Interaction
        </div>
        <div className='htext__para-text'>
          Mark Andreessen once rightly said that ‘software is eating the world.’ 
          However, as we now see it, artificial intelligence is eating software.
          We need to act smart or the cycle will never end ¯\_(ツ)_/¯
        </div>
        <div className='htext__button' onClick={GoDown}>
          Explore More
        </div>
      </div>
      <div className='home__icons'>
        <a href='https://www.youth-inventa.org/yics' target='blank'><Image src={YicsIcon} alt='deathbed' height={45}  width={45}/></a>
        <a href='https://github.com/Izma810' target='blank'><Image src={Github} alt='deathbed' height={45}  width={45}/> </a>
      </div>
    </div>
  )
}

export default Home;