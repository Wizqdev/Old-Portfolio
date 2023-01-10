
const items = [
    { icon: 'fab fa-discord', link: 'https://discord.com/users/778254181303451658' },
    { icon: 'fab fa-github', link: 'https://github.com/Prajwal433' },
  ]

const navItems = [
    { icon: 'fal fa-home', active: 'fa fa-home', label: 'Home', href: '/' },
    { icon: 'fal fa-compass', active: 'fa fa-compass', label: 'Projects', href: '/projects' },
    { icon: 'fal fa-phone', active: 'fa fa-phone', label: 'Contact', href: '/contact' },
]

import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
    const router = useRouter();
    return <>
            <div className="flex justify-center md:justify-start items-center space-x-4 py-2">
                {navItems.map(item => (
                    <Link key={item.label} href={item.href}>
                        <a className={`flex items-center justify-center text-white/50 cursor-pointer hover:text-white/100 rounded-xl transition-all duration-150 ${router.asPath === item.href && 'text-white/100'}`}>
                            <i className={`${router.asPath === item.href ? item.active : item.icon} mr-2`} />{item.label}
                        </a>
                    </Link>
                ))}
            </div>
    </>
}

export default Header;
