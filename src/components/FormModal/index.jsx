import { useContext } from "react"
import { VideoContext } from "../../contexts/VideoContext"

export function FormModal({closeModal}) {

    const {title, link, titleHandler, linkHandler, handleSubmit} = useContext(VideoContext)

    return(
        <div className="flex flex-col gap-8">
            <form 
                className="flex flex-col gap-4"
                onSubmit={handleSubmit}
            >

                <input 
                    id='title' 
                    type="text" 
                    placeholder='Titulo'
                    className="rounded"
                    value={title}
                    onChange={titleHandler}
                />

                <input 
                    id='link' 
                    type="text" 
                    placeholder='Link'
                    className="rounded"   
                    value={link}
                    onChange={linkHandler} 
                />

                <button
                    type='submit'
                    className='width-full mb-5 bg-blue-700 py-3 text-zinc-100 rounded hover:bg-blue-600 transition-colors'
                    onClick={closeModal}
                >
                    Salvar
                </button>

            </form>
        </div>
    )
}