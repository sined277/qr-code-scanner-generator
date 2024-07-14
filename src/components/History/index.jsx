import { GENERATE_DATA, SCAN_DATA } from '../../constants/constants';
import { QRCodeSVG } from 'qrcode.react';
import styles from './History.module.scss';

const History = () => {
    const generatedData = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]");
    const scannedData = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]");

    return (
        <div className={styles["history-container"]}>
            <div className={styles.section}>
                <h1 className={styles["section-title"]}>Generated History</h1>
                <div className={styles["qr-code-container"]}>
                    {generatedData && generatedData.map((qrText, index) => (
                        <div key={index} className={styles["qr-code-item"]}>
                            <h2 className={styles["qr-code-value"]}>{qrText}</h2>
                            <div className={styles["qr-code"]}>
                                <QRCodeSVG value={qrText} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className={styles.section}>
                <h1 className={styles["section-title"]}>Scanned History</h1>
                <div className={styles["qr-code-container"]}>
                    {scannedData && scannedData.map((qrText, index) => (
                        <div key={index} className={styles["qr-code-item"]}>
                            <h2 className={styles["qr-code-value"]}>{qrText}</h2>
                            <div className={styles["qr-code"]}>
                                <QRCodeSVG value={qrText} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default History;
