import GithubCo from '../public/gifs/githubco.gif';
import Image from 'next/image'
import data from '../data/githubcoFeatures.json';
import Tick from '../public/icons/tick.svg';

function GithubCopilot(){
    return(
        <div className='feature'>
            <div className='feature__heading'>
                Github Copilot
            </div>
            <div className='featurearea'>
                <div className='feature__gif'>
                    <Image src={GithubCo} alt='githab' height={315} width={550}/>
                </div>
                <div className='feature__features'>
                    {
                        data.map((i) => (
                            <>
                                <span><Image src={Tick} alt='ticky'/><p>{i.desc}</p></span>
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default GithubCopilot;