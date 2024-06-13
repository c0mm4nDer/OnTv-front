'use client'

import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import lang_fa from '../../../../public/lang/videojs/fa.json';

export const VideoJS = (props: any) => {
    const videoRef = React.useRef<any>(null);
    const playerRef = React.useRef<any>(null);
    const { options, onReady } = props;

    React.useEffect(() => {

        // Make sure Video.js player is only initialized once
        if (!playerRef.current) {
            // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
            const videoElement = document.createElement("video-js");

            videoElement.classList.add('vjs-big-play-centered');
            videoRef.current.appendChild(videoElement);
            videojs.addLanguage('fa', lang_fa);
            const player = playerRef.current = videojs(videoElement, options, () => {
                videojs.log('player is ready');
                onReady && onReady(player);
            });

            // You could update an existing player in the `else` block here
            // on prop change, for example:
        } else {
            const player = playerRef.current;

            player.autoplay(options.autoplay);
            player.src(options.sources);
        }
    }, [options, videoRef]);

    // Dispose the Video.js player when the functional component unmounts
    React.useEffect(() => {
        const player = playerRef.current;

        return () => {
            if (player && !player.isDisposed()) {
                player.dispose();
                playerRef.current = null;
            }
        };
    }, [playerRef]);

    return (
        <div data-vjs-player className='rounded-[15px] overflow-hidden'>
            <div ref={videoRef} />
        </div>
    );
}

export default VideoJS;