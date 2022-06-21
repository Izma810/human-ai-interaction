import Policing from '../public/img/policing.jpg';
import Image from 'next/image'
import data from '../data/policeFeatures.json';
import Tick from '../public/icons/tick.svg';

function Police(){
    return(
        <div className='feature'>
            <div className='feature__heading even'>
                AI Policing {'&'} Justice
            </div>
            <div className='featurearea dem'>
                <div className='feature__features one'>
                    {
                        data.map((i) => (
                            <>
                                <span><Image src={Tick} alt='ticky'/><p>{i.desc}</p></span>
                            </>
                        ))
                    }
                </div>
                <div className='feature__gif odd'>
                    <Image src={Policing} alt='githab' height={260} width={470}/>
                </div>
            </div>
        </div>
    )
}

export default Police;