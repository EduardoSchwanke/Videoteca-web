import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { VideoList } from './components/VideoList'

import { VideoContextProvider } from './contexts/VideoContext'

export function App() {
  return (
    <div className='flex flex-col justify-between h-[100vh]'>
      <Header />
      <VideoContextProvider>
        <VideoList />
      </VideoContextProvider>
      <Footer />
    </div>
  )
}