'use client'

import { useState, useEffect } from "react"
import ReactPlayer from "react-player/lazy"

const Video = () => {

  const [client, setClient] = useState();

  useEffect(() => {
    if (client === undefined) {
      setClient(true);
    }
  }, [])

  return (
    <div className="flex justify-center player-wrapper md:w-[70%] md:mx-auto">
      {client && (
        <ReactPlayer
          className="react-player"
          url="https://firebasestorage.googleapis.com/v0/b/invitacion-8e824.appspot.com/o/demo%2Fxv-a%C3%B1os%2Fvideo.mp4?alt=media&token=00433d9e-9851-4db7-ac43-50062f13506d"
          playing={true}
          controls={true}
          height="500%"
          width="100%"
        />
      )}
    </div>
  )
}

export default Video