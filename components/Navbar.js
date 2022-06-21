import {useRouter} from 'next/router';
import Link from 'next/link';

const navLinks = [
    {
        title:'Real World AI', path:'/'
    },
    {
        title:'Limitations', path:'/limitations'
    },
    {
        title:'Solution', path:'/solution'
    },
    {
        title:'Projects', path:'/projects'
    }

]

function Navbar(){

    const router = useRouter();

    return(
        <div className='nav'>
            <div className='nav__upper-border'>
            </div>
            <div className='nav__nav-bar'>
                {
                    navLinks.map((link) => (
                        <div className='nav-bar__links' key={link.title}>
                            <Link href={link.path} passHref>
                                <a className={router.asPath == link.path ? 'active' : ' '}>
                                    {link.title}
                                </a>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Navbar;