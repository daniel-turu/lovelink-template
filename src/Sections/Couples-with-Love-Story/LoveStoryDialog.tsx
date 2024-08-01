import React, { useState } from 'react';
import './style.css'; // Make sure this path is correct for where your CSS file is located
import { SqureHvImage } from '../../Components/SqureHvImage';
import { getBgColor } from '../../Utiles';

interface LoveStoryDialogProps { story: string; img: string }

export const LoveStoryDialog: React.FC<LoveStoryDialogProps> = ({story, img}) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const openDialog = () => {
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    return (
        <div>
            <button
                data-ripple-light="true"
                onClick={openDialog}
                className="select-none rounded-lg bg-gradient-to-tr italic underline py-3 px-6 text-center align-middle font-sans text-xs font-bold  shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                style={{ color: getBgColor() }}

            >
                Read More
            </button>
            {isDialogOpen && (
                <div
                    data-dialog-backdrop="dialog"
                    onClick={closeDialog}
                    className="pointer-events-auto fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-100 backdrop-blur-sm transition-opacity duration-300"
                >
                    <div
                        data-dialog="dialog"
                        onClick={(e) => e.stopPropagation()}
                        className="relative m-4 w-[90%] sm:min-w-[40%] sm:max-w-[40%] rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl animate-bounce-in"
                    >

                        <div className="overflow-y-auto relative  justify-center items-center p-4 font-sans text-base antialiased font-light leading-relaxed border-t border-b border-t-blue-gray-100 border-b-blue-gray-100 text-blue-gray-500" style={{ maxHeight: 'calc(100vh - 100px)' }}>
                            <div className='flex justify-center'>
                                <SqureHvImage cicle_wh={250} backgroundImageUrl={img} />
                            </div>
                            <p className='text-center pt-3'>
                                {story}                            
                            </p>
                        </div>
                        <div className="flex justify-center items-center p-4 shrink-0 text-blue-gray-500">
                            <button
                                data-ripple-dark="true"
                                onClick={closeDialog}
                                className="px-6 py-3 mr-1 font-sans text-xs font-bold uppercase transition-all rounded-lg middle none center hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                style={{ color: getBgColor() }}
                            >
                                Close
                            </button>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
