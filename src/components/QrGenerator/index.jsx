import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import styles from './QrGenerator.module.scss';
import { GENERATE_DATA } from '../../constants/constants';

const QrGenerator = () => {
    const [inputValue, setInputValue] = useState("");
    const [qrValue, setQrValue] = useState("");

    const formHandler = (event) => {
        event.preventDefault();
        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]")
        localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, inputValue]))
        setQrValue(inputValue);
        setInputValue("");
    }

    const changeInputHandler = (event) => {
        setInputValue(event.target.value);
    }

    return (
        <div className={styles["form-container"]}>
            <form onSubmit={formHandler}>
                <input type="text" value={inputValue} onChange={changeInputHandler} className={styles.input} />
                <button type="submit" className={styles.button}>Generate</button>
            </form>
            {qrValue && (
                <div className={styles["qr-code"]}>
                    <QRCodeSVG value={qrValue} />
                </div>
            )}
        </div>
    );
};

export default QrGenerator;
