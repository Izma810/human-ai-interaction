import data from '../data/aiLimits.json';
import Arrow from '../public/icons/arrow.svg';
import Image from 'next/image';
import epicdata from '../data/aiIssues.json';
import Issue from '../public/img/gituse.svg'
import loldata from '../data/gitLimits.json';
import dates from '../data/ibmIssues.json';
import brehdata from '../data/fairIssues.json';
import Head from 'next/head';

function Limitations(){
    return(
        <div className='limitations'>
            <Head>
                <title>
                    Limitations
                </title>
            </Head>
            <div className='limits'>
                <div className='limits__ai'>
                    <div className='ai__heading'>
                        <span className='heading__one'>Limitations</span>
                        <span className='heading__two'>(of AI in general)</span>
                    </div>
                    <div className='ai__box'>
                        <div className='abox__heading'>
                            {'•'} Today{"'"}s Al is fundamentally limited
                        </div>
                        <div className='abox__content'>
                            {
                                data.slice(0,3).map((i)=> (
                                    <>
                                        <span>
                                            <Image src={Arrow} alt='stan'/>
                                            <p className='content__line'>
                                                {i.desc}
                                            </p>
                                        </span>
                                    </>
                                ))
                            }
                        </div>
                        <div className='abox__heading sike'>
                            {'•'} The enthusiasm of Al has led to many poorly designed systems
                        </div>
                        <div className='abox__content'>
                            {
                                data.slice(3,6).map((i)=> (
                                    <>
                                        <span>
                                            <Image src={Arrow} alt='stan'/>
                                            <p className='content__line'>
                                                {i.desc}
                                            </p>
                                        </span>
                                    </>
                                ))
                            }
                        </div>
                    </div>
                </div>
                
                {/*I think I was too lazy to make a component so now I am just copy pasting stuff lol pity :'''')*/}

                <div className='limits__ai'>
                    <div className='ai__heading'>
                        <span className='heading__one'>Usability Issues</span>
                        <span className='heading__two'>(of Conversational AI)</span>
                    </div>
                    <div className='ai__box'>
                        <div className='abox__heading'>
                            {'•'} Interviewed 14 users of conversational Al
                        </div>
                        <div className='abox__heading sike'>
                            {'•'} Failure modes
                        </div>
                        <div className='abox__content'>
                            {
                                epicdata.map((i)=> (
                                    <>
                                        <span>
                                            <Image src={Arrow} alt='stan'/>
                                            <p className='content__line'>
                                                {i.desc}
                                            </p>
                                        </span>
                                    </>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className='limits__git'>
                    <div className='ai__heading'>
                        <span className='heading__one'>Usability Issues</span>
                        <span className='heading__two'>(of Github GithubCopilot)</span>
                    </div>
                    <div className='git__row'>
                        <div className='git__image'>
                            <Image src={Issue} alt='ah'/>
                        </div>
                        <div className='ai__box dayum'>
                            <div className='abox__content'>
                                {
                                    loldata.map((i)=> (
                                        <>
                                            <span>
                                                <Image src={Arrow} alt='stan'/>
                                                <p className='content__line'>
                                                    {i.desc}
                                                </p>
                                            </span>
                                        </>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>

                {/*Another comment to help me navigate because i am fr lost here */}

                <div className='limits__ai peko'>
                    <div className='ai__heading'>
                        <span className='heading__one'>The Sad Truth</span>
                        <span className='heading__two'>(of IBM Watson Health)</span>
                    </div>
                    <div className='ai__box'>
                        <div className='abox__content'>
                            {
                                dates.map((i)=> (
                                    <>
                                        <span>
                                            <Image src={Arrow} alt='stan'/>
                                            <p className='content__line'>
                                                {i.desc}
                                            </p>
                                        </span>
                                    </>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className='limits__ai peko'>
                    <div className='ai__heading'>
                        <span className='heading__one'>Fairness Issues</span>
                        <span className='heading__two'>(of AI in general)</span>
                    </div>
                    <div className='ai__box'>
                        <div className='abox__content'>
                            {
                                brehdata.map((i)=> (
                                    <>
                                        <span>
                                            <Image src={Arrow} alt='stan'/>
                                            <p className='content__line'>
                                                {i.desc}
                                            </p>
                                        </span>
                                    </>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Limitations;