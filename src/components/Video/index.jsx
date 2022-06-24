import { IoTrashBin, IoThumbsUp, IoPencil} from 'react-icons/io5'
import { useContext } from 'react'
import { VideoContext } from '../../contexts/VideoContext'

import { IoCloseOutline } from 'react-icons/io5'
import { useState, Fragment } from 'react'
import { Dialog,Transition  } from '@headlessui/react'
import { FormModal } from '../FormModal'

export function Video({id, title, link, liked}) {

    const {handleEdit, handleLiked, handleDelete} = useContext(VideoContext)

    let [isOpen, setIsOpen] = useState(false)
  
    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return(
        <li> 
            <div className='bg-[#ffffff] p-3 h-52 w-64 rounded-3xl shadow-[rgba(0,0,0,0.08)] flex flex-col justify-evenly items-center'>
                
                <h2 className='text-[#1e1e1e]'>{title}</h2>

                <a 
                    href={link}
                    target="_blank"
                    className='border-l-2 border-solid border-[#bbbbbb] pl-3 text-[#999999] italic self-start whitespace-nowrap overflow-hidden overflow-ellipsis w-full text-sm hover:opacity-[0.8] transition-opacity'
                >
                    {link}
                </a>
                
                <div className='w-full flex justify-evenly'>

                    {!liked ? (
                        <button
                            type='button'
                            className='w-5 h-5 text-[#1e1e1e] hover:opacity-[0.5] transition-opacity'
                            onClick={() => handleLiked(id)}
                        >
                            <IoThumbsUp className='w-5 h-5'/>
                        </button>
                    ) : (
                        <button
                            type='button'
                            className='w-5 h-5 text-[#487fd7] hover:text-[#689ef5] transition-colors'
                            onClick={() => handleLiked(id)}
                        >
                            <IoThumbsUp className='w-5 h-5'/>
                        </button>
                    )}

                    <button
                        type='button'
                        className='w-5 h-5 text-[#1e1e1e] hover:opacity-[0.5] transition-opacity'
                        onClick={() => {
                            handleEdit(id, title, link) 
                            openModal()
                        }}
                    >
                        <IoPencil className='w-5 h-5'/>
                    </button>

                    <button
                        type='button'
                        className='w-5 h-5 text-[#1e1e1e] hover:opacity-[0.5] transition-opacity'
                        onClick={() => handleDelete(id)}
                    >
                        <IoTrashBin className='w-5 h-5'/>
                    </button>


                    <Transition appear show={isOpen} as={Fragment}>
                        <Dialog as="div" className="relative z-10" onClose={closeModal}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>

                        <div className="fixed inset-0 overflow-y-auto">
                            <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="flex items-center justify-between cursor-pointer text-lg font-medium leading-6 text-gray-900 py-5"
                                >
                                    Edit video
                                    <IoCloseOutline onClick={closeModal} className="w-6 text-zinc-800 hover:text-zinc-400 transition-colors"/>
                                </Dialog.Title>

                                    <FormModal closeModal={closeModal}/>

                                </Dialog.Panel>
                            </Transition.Child>
                            </div>
                        </div>
                        </Dialog>
                    </Transition>
                </div>
            </div>
        </li>
    )
}