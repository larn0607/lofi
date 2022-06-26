import { useRef, createContext } from 'react'

const AudioContext = createContext()

const AudioProvider = ({children}) => {

  const noisesRefs = useRef([])

  return (
    <AudioContext.Provider value={noisesRefs}>
      {children}
    </AudioContext.Provider>
  )
}

export { AudioContext, AudioProvider }
