import { useEffect, useRef, useState } from 'react'
import Navbar from '../components/signup/Navbar'
import Footer from '../components/signup/Footer'
import SignUpForm from './SignUpForm'
import { copy } from '../data/content'
import { preventStaticCopy, preventStaticContextMenu, preventDragging } from '../utils/protection'
import '../styles/signup.css'

export default function SignUp() {
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem('kemetra-language') === 'ar' ? 'ar' : 'en'
    } catch {
      return 'en'
    }
  })
  const [soundOn, setSoundOn] = useState(false)
  const [soundMessage, setSoundMessage] = useState('')
  const soundRef = useRef(null)
  const t = copy[language]

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    try {
      localStorage.setItem('kemetra-language', language)
    } catch {
      return
    }
  }, [language])

  useEffect(() => () => soundRef.current?.pause(), [])

  async function toggleSound() {
    if (soundOn) {
      soundRef.current?.pause()
      setSoundOn(false)
      setSoundMessage('')
      return
    }

    const audioPath = import.meta.env.VITE_AMBIENT_AUDIO_PATH
    if (!audioPath) {
      setSoundMessage(t.soundMissing)
      return
    }

    if (!soundRef.current) {
      soundRef.current = new Audio(audioPath)
      soundRef.current.loop = true
      soundRef.current.volume = 0.35
      soundRef.current.addEventListener('error', () => {
        setSoundOn(false)
        setSoundMessage(copy[language].soundFailed)
      })
    }

    try {
      await soundRef.current.play()
      setSoundOn(true)
      setSoundMessage('')
    } catch {
      setSoundOn(false)
      setSoundMessage(t.soundFailed)
    }
  }

  return (
    <div
      className="kemetra-signup app-shell"
      lang={language}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
      onCopy={preventStaticCopy}
      onCut={preventStaticCopy}
      onContextMenu={preventStaticContextMenu}
      onDragStart={preventDragging}
    >
      <Navbar t={t} language={language} setLanguage={setLanguage} soundOn={soundOn} toggleSound={toggleSound} />
      <SignUpForm t={t} />
      <Footer t={t} language={language} setLanguage={setLanguage} />
      {soundMessage && <div className="sound-message" role="status">{soundMessage}</div>}
    </div>
  )
}
