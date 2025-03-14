'use client';
import Image from 'next/image';
import { Container, Row } from 'react-bootstrap';

const BackgroundImage: React.FC = () => (
    <div className="container-fluid p-0 m-0 position-relative">
        <div className="centerImage d-flex align-items-center justify-content-center text-center" 
            style={{ 
                height: '600px', 
                backgroundImage: "url('./wod-ko-hana-background.png')", 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <h1 className="fw-bold text-white" style={{ fontSize: '3rem', textAlign: 'center' }}>OUR JOURNEY</h1>
        </div>
        <div className="book-now-container">
            <Image src="/booknowbutton.png" alt="Book Now" className="book-now-button" width={150} height={50} />
        </div>
    </div>
);

export default BackgroundImage;