import React, { useEffect, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoCloseCircleOutline } from "react-icons/io5";


const Share = ({ onclose }) => {
    const [url, seturl] = useState('Noe');
    useEffect(() => {
        const currentUrl = window.location.href;
        seturl(currentUrl);
    }, [])

    const shareHandler = (e) => {
        e.preventDefault();
        toast.success(' copied...')

    }

    return (
        <div className='relative rounded-lg justify-center items-center  inset-0  '>
            <div className='absolute lg:-top-3 top-0 -right-[2rem]  rounded-lg flex justify-center items-center  '>
                <div className='flex gap-4 p- btn-lg  '>


                    <div className='absolute -top-5 right-4  text-2xl  '>
                        <IoCloseCircleOutline onClick={onclose} />
                    </div>
                    <div className=''>
                        <div className=' place-self-end text-white  '>
                            <input value={url} className='bg-black bg-opacity-0 copy  rounded-lg pp px-3 ' />

                        </div>
                        <div className=' flex justify-center rounded-lg copyurl mt-1  '>
                            <CopyToClipboard text={url} >
                                <button onClick={(e) => { shareHandler(e) }} >
                                    COPY URL
                                </button>
                            </CopyToClipboard>
                        </div>
                    </div>


                </div>
                <ToastContainer />
            </div>
        </div>
    )
}

export default Share