import { useEffect, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import Modal from 'react-bootstrap/Modal';

const Qrcode = ({ showModal, setShowModal }) => {
    const [fullscreen, setFullscreen] = useState(true);
    const [scanResult, setScanResult] = useState(null);
    const fechaModal = () => {
        setShowModal(false)
    }
    useEffect(() => {
        // Inicializa o scanner no elemento com id "reader"
        const scanner = new Html5QrcodeScanner('reader', {
            qrbox: {
                width: 250,
                height: 250,
            },
            fps: 5, // Quadros por segundo
        });

        function onScanSuccess(decodedText, decodedResult) {
            // Para o scanner após o sucesso
            scanner.clear();
            setScanResult(decodedText);
        }

        function onScanError(err) {
            // Erros de leitura (ignorado para evitar spam no console)
        }

        scanner.render(onScanSuccess, onScanError);

        // Limpeza ao desmontar o componente
        return () => {
            scanner.clear().catch(error => {
                console.error("Falha ao limpar o scanner", error);
            });
        };
    }, []);

    return (
        <Modal show={showModal} fullscreen={fullscreen} onHide={() => fechaModal()}>

            <Modal.Header className='modalHeader' data-bs-theme="dark" closeButton onClick={() => fechaModal()}>
                <Modal.Title className='modalTitulo' >Ajuda</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='regras'>
                    <div style={{ textAlign: 'center' }}>
                        <h1>Scanner de QR Code</h1>
                        {scanResult ? (
                            <div>
                                <p>Resultado: {scanResult}</p>
                            </div>
                        ) : (
                            <div id="reader"></div>
                        )}
                    </div>
                </div>

            </Modal.Body>
        </Modal >
    );
};

export default Qrcode;
