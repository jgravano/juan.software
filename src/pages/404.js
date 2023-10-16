import React from 'react';
import { Link } from 'react-router-dom';
import '../css/404.css';

function NotFoundPage() {
    return (
        <div className="notfound-container">
            <h1 className="error-code">404</h1>
            <div className="error-computer"></div>
            <p className="error-message">Lo siento, página no encontrada</p>
            <Link to="/">
                <button className="back-home">Volver al inicio</button>
            </Link>
        </div>
    );
}

export default NotFoundPage;
