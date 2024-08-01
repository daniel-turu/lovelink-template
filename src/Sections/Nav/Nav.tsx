import { useState, useEffect, useRef } from 'react';
import { MdClose, MdMenuOpen } from 'react-icons/md';
import { getBgColor, getTextColor } from '../../Utiles';
import { getCouples } from '../../CouplesData';

export const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const couples = getCouples();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setMenuOpen(false);
        }
    };

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setMenuOpen(false); // Close the menu after clicking
    };

    useEffect(() => {
        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <div className='flex flex-col items-center '>
            <div className='container flex h-14 bg-white justify-center items-center border-b'
                style={{ borderColor: getBgColor() }}
            >
                <div className='flex-1 h-full flex items-center'>
                    <div className='ml-6 font-mistletoe text-xl font-bold tracking-wider'>
                        {couples.brideName} & {couples.groomName}
                    </div>
                </div>
                <div className='flex justify-center w-[100px]'>
                    <button
                        onClick={toggleMenu}
                        className='w-10 h-10 ml-6 rounded-tl-lg rounded-br-lg flex justify-center items-center'
                        style={{ backgroundColor: getBgColor() }}
                    >
                        <MdMenuOpen size={30} color={getTextColor()} />
                    </button>
                </div>
            </div>

            <div
                ref={menuRef}
                className={`fixed top-0 right-0 h-full bg-white w-64 transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 shadow-lg z-50 border-l border-[#85aaba]`}
            >
                <div className='pt-4 '>
                    <button onClick={toggleMenu}
                        className='float-right w-8 h-8 mr-4 rounded-tl-lg rounded-br-lg flex justify-center items-center'
                        style={{ backgroundColor: getBgColor() }}
                    >
                        <MdClose size={26} color={getTextColor()} />
                    </button>

                    <h2 className='font-bold pl-4 text-lg pt-2 border-b border-[#85aaba]'
                        style={{ borderColor: getBgColor() }}>
                        Home
                    </h2>
                    <ul className='mt-4'>
                        <li className='mb-2 pl-4 border-b'
                            style={{ borderColor: getBgColor() }}>
                            <button
                                onClick={() => scrollToSection('couple-story')}
                                className=''
                                style={{ color: getBgColor() }}
                            >
                                Couple Story
                            </button>
                        </li>
                        <li className='mb-2 pl-4 border-b'
                            style={{ borderColor: getBgColor() }}>
                            <button
                                onClick={() => scrollToSection('events')}
                                className=''
                                style={{ color: getBgColor() }}
                            >
                                Events
                            </button>
                        </li>
                        <li className='mb-2 pl-4 border-b'
                            style={{ borderColor: getBgColor() }}>
                            <button
                                onClick={() => scrollToSection('fiends')}
                                className=''
                                style={{ color: getBgColor() }}
                            >
                                People
                            </button>
                        </li>
                        <li className='mb-2 pl-4 border-b'
                            style={{ borderColor: getBgColor() }}>
                            <button
                                onClick={() => scrollToSection('gallery')}
                                className=''
                                style={{ color: getBgColor() }}
                            >
                                Gallery
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
