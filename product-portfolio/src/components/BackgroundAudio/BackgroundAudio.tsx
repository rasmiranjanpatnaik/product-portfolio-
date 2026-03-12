import React, { useState, useRef, useEffect } from 'react';
import './BackgroundAudio.css';

const AUDIO_SRC = `${process.env.PUBLIC_URL || ''}/audio/neele_neele_ambar_par.mp3`;

const QUOTE = '"Music gives a soul to the universe, wings to the mind, flight to the imagination." — Plato';

const BackgroundAudio: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [showModal, setShowModal] = useState(true);
  const [isEnabled, setIsEnabled] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (!isEnabled) return;
    const audio = new Audio(AUDIO_SRC);
    audio.loop = true;
    audioRef.current = audio;
    if (!isMuted) {
      audio.play().catch(() => {});
    }
    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, [isEnabled]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isMuted) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
  }, [isMuted, isEnabled]);

  const handleYes = () => {
    setIsEnabled(true);
    setIsMuted(false);
    setShowModal(false);
  };

  const handleNo = () => {
    setShowModal(false);
  };

  const toggleMute = () => setIsMuted((m) => !m);

  return (
    <>
      {showModal && (
        <div className="background-audio-overlay" role="dialog" aria-modal="true" aria-labelledby="audio-modal-title">
          <div className="background-audio-modal">
            <p id="audio-modal-title" className="background-audio-quote">{QUOTE}</p>
            <p className="background-audio-prompt">Play this melody in the background while you explore?</p>
            <div className="background-audio-actions">
              <button type="button" className="background-audio-btn background-audio-btn-yes" onClick={handleYes}>Yes</button>
              <button type="button" className="background-audio-btn background-audio-btn-no" onClick={handleNo}>No</button>
            </div>
          </div>
        </div>
      )}
      {isEnabled && (
        <button
          type="button"
          className={`background-audio-toggle ${isMuted ? 'is-muted' : ''}`}
          onClick={toggleMute}
          aria-label={isMuted ? 'Turn background music on' : 'Turn background music off'}
          title={isMuted ? 'Play background music' : 'Pause background music'}
        >
          <i className={isMuted ? 'fas fa-volume-mute' : 'fas fa-volume-up'} aria-hidden />
        </button>
      )}
    </>
  );
};

export default BackgroundAudio;
