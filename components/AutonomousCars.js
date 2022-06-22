import Autocar from '../public/gifs/autocar.gif';
import Image from 'next/image'
import data from '../data/autocarsFeatures.json';
import Tick from '../public/icons/tick.svg';

function AutonomousCars(){
    return(
        <div className='feature damn'>
            <div className='feature__heading'>
                Self Driving Cars
            </div>
            <div className='featurearea'>
                <div className='feature__gif'>
                    <Image src={Autocar} alt='githab' height={300} width={550}/>
                </div>
                <div className='feature__features'>
                    {
                        data.map((i) => (
                            <>
                                <span key={i.key}><Image src={Tick} alt='ticky'/><p>{i.desc}</p></span>
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default AutonomousCars;