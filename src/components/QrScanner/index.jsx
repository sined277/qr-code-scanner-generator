import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import styles from './QrScanner.module.scss';
import { SCAN_DATA } from '../../constants/constants';

const QrScanner = () => {
    const [scanResult, setScanResult] = useState(null);

    const qrScanHandler = (result) => {
        if (!result || !result[0]) return;
    
        const rawValue = result[0].rawValue;
        setScanResult(rawValue);
    
        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]");
        if (prevData.includes(rawValue)) return;
    
        localStorage.setItem(SCAN_DATA, JSON.stringify([...prevData, rawValue]));
    };

    const settings = {
        audio: false,
        finder: false,
        allowMultiple: true
    };

    const stylesSettings = {
        container: { width: "300px" }
    };

    return (
        <div className={styles.container}>
            <h1>To scan a QR code, point it at the camera</h1>
            <div className={styles["scanner-container"]}>
                <Scanner styles={stylesSettings} components={settings} onScan={(result) => qrScanHandler(result)} />
            </div>
            {scanResult && <div className={styles.result}>{scanResult}</div>}
        </div>
    );
};

export default QrScanner;
