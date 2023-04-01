
const src = 'https://media.istockphoto.com/id/1220566062/video/animation-of-the-pizza-making-process.mp4?s=mp4-640x640-is&k=20&c=_qYnexgxaPSaMwVDiscwMX-5tU2uLhYz0FslYYnks-Y='


export default function Video() {
    return (
        <div className="video-container">
            <video autoPlay loop muted className="video-element">
                <source src={src} type="video/mp4" />

            </video>
        </div>
    );
};

