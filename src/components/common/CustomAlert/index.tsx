import {useAppStore} from "../../../store";
import "./styles.scss";

const CustomAlert = () => {
    const {alert_props, answerAlert} = useAppStore("common");

    return (
        <div id="alert_container">
            <div id="alert_overlay" onClick={answerAlert(false)}/>
            <div id="alert_wrapper">
                <div id="alert_header">{alert_props.title}</div>
                <div id="alert_body">{alert_props.content}</div>
                <div id="alert_footer">
                    {alert_props.showCancel && (
                        <>
                            <div className="custom-button" onClick={answerAlert(false)}>{alert_props.cancel}</div>
                            <div className="vertical-line"/>
                        </>
                    )}
                    <div className="custom-button" onClick={answerAlert(true)}>{alert_props.confirm}</div>
                </div>
            </div>
        </div>
    );
};

export default CustomAlert;
