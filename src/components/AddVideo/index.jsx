import { IoAdd, IoCloseOutline } from 'react-icons/io5'
import { useState, Fragment } from 'react'
import { Dialog,Transition  } from '@headlessui/react'
import { FormModal } from '../FormModal'

import { useContext } from 'react'
import { VideoContext } from '../../contexts/VideoContext'

export function AddVideo() {

    const {title, setTitle, link, setLink} = useContext(VideoContext)

    let [isOpen, setIsOpen] = useState(false)
 
    function closeModal() {
        setIsOpen(false) 
    }

    function openModal() { 
        if(title){
            setTitle('')
        }
        if(link){
            setLink('')
        }
        setIsOpen(true)
    }

    return (
        <li>
            <button 
                className='list-none border-dashed border-4 border-[#ffff] bg-[rgba(0,0,0,0.04)] p-3 h-52 w-60 rounded-3xl shadow-lg shadow-[rgba(0,0,0,0.08)] flex flex-col justify-evenly items-center'
                onClick={openModal}
            >
                <IoAdd className="w-16 h-16 stroke-[#ffffff]"/>
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
                            Add a video
                            <IoCloseOutline onClick={closeModal} className="w-6 text-zinc-800 hover:text-zinc-400 transition-colors"/>
                        </Dialog.Title>

                            <FormModal closeModal={closeModal} />

                        </Dialog.Panel>
                    </Transition.Child>
                    </div>
                </div>
                </Dialog>
            </Transition>
        </li>
    )
}