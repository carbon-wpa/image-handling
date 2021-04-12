import React, {useState} from "react";
import './Images.css';

function Images({image}) {


    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);


    const onImgError = () => {
        setIsError(true);
    };

    const onImgLoad = () => {
        setTimeout(() => setIsLoading(false), 1000);
    };

    return (
        <>
            {!isError ?
                <div style={{position: 'relative'}}>
                    <img src={image} style={{width: '100%', height: '100%'}} onError={onImgError} onLoad={onImgLoad}
                         alt={''}/>
                    {isLoading ? <div className="img-replacement" style={{position: 'absolute', top: '0'}}>
                        loading
                    </div> : null}

                </div>
                :

                <div className="img-replacement">
                    image error
                </div>
            }
        </>
    );
}

export default Images;
