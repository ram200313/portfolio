import "./styles/RotatingBall.css";

const RotatingBall = () => {
    return (
        <div className="rotating-ball-wrapper">
            <div className="rotating-ball-scene">
                <div className="rotating-ball">
                    <img src="/images/profile.jpg" alt="Jayaram V" />
                </div>
                <div className="rotating-ball-ring"></div>
            </div>
        </div>
    );
};

export default RotatingBall;
