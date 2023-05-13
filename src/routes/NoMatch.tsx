import {useNavigate} from "react-router-dom";
import {useCallback} from "react";

const NoMatch = () => {
    const navigate = useNavigate();
    const goBack = useCallback(() => {
        navigate(-1);
    }, [navigate]);

    return (
        <div className="flex flex-col p-4">
            <p className="text-xl text-center alert alert-error">Oops! No page found!</p>
            <div className="flex justify-center mt-4">
                <button className="ml-4 btn btn-primary" onClick={goBack}>go Back</button>
            </div>
        </div>
    );
};

export default NoMatch;
