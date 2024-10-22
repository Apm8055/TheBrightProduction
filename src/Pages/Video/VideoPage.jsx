import { useState } from 'react';
import styles from './VideoPage.module.css';  // Import CSS module for styling

const VideoPage = () => {
    // Sample list of YouTube video URLs
    const [videos] = useState([
        'https://www.youtube.com/embed/mVkD0UlZze0',
        'https://www.youtube.com/embed/K9rPyiyKqtw',
        'https://www.youtube.com/embed/iRcXYtE1GlM',
        'https://www.youtube.com/embed/A-Un_kiJtIQ',
        'https://www.youtube.com/embed/Tn3E5z-Seww',
        
    ]);

    return (
        <div className='bgcl'>
            <div className={styles.videoPage}>
                <h1 className={styles.title}>Video Gallery</h1>
                <div className={styles.videoGrid}>
                    {videos.map((videoUrl, index) => (
                        <div key={index} className={styles.videoTile}>
                            <iframe
                                width="100%"
                                height="200"
                                src={videoUrl}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title={`YouTube Video ${index + 1}`}
                            ></iframe>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VideoPage;
