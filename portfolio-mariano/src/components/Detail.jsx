import React, { useEffect, useRef, useState } from "react";
import './DetailProduct.css'

export default function DetailArt(){
    const [data, setData] = useState([]);

    const getData = () => {
      fetch('data.json'
        // , {
        //   headers: {
        //     'Content-Type': 'application/json',
        //     'Accept': 'application/json'
        //   }
        // }
      )
        .then(function (response) {
            const data = JSON.parse(response);
        console.log(data)
          
        })
        .then(function (data) {
            setData(data)
        });
    }

    // fetch('data.json').then(async (response) => {
    //     const data = JSON.parse(response);
    //     console.log(data)
    //   })}
    
    
    // var art = JSON.parse(JSON.parse(data));
    // console.log(art)


    useEffect(() => {
      getData()
    }, [])
    console.log(data);
    
    const lensRef = useRef();
    const imgRef = useRef();
    const resultRef = useRef();
    const [openZoom, setOpenZoom] = useState(false);
    const [styleResult, setStyleResult] = useState({
        backgroundImage: "",
        backgroundSize: "",
        backgroundPosition: ""
    })
    const [styleLens, setStyleLens] = useState({
        left: "",
        top: ""
    })

    function handleMouseEnter() {
        const { ejeX, ejeY } = findAxis();
        setStyleResult({
            ...styleResult,
            backgroundImage: "url('" + imgRef.current.currentSrc + "')",
            backgroundSize: `${imgRef.current.clientWidth * ejeX}px ${imgRef.current.clientHeight * ejeY}px`,
            left: `${imgRef.current.clientWidth + 16}px`
        })
        setOpenZoom(true);
    }
    
    function handlerMouseLeave() {
        setOpenZoom(false);
    }

    function findAxis() {
        const ejeX = (resultRef.current.clientWidth) / (lensRef.current.clientWidth);
        const ejeY = (resultRef.current.clientHeight) / (lensRef.current.clientHeight);
        return {ejeX, ejeY}
    }

    function handlerMouseMove(e) {
        e.preventDefault();
        const position = getCursorPos(e);
        let posX = position.coorX - ((lensRef.current.clientWidth) / 2);
        let posY = position.coorY - ((lensRef.current.clientHeight) / 2);

        if (posX > ((imgRef.current.clientWidth) - (lensRef.current.clientWidth))) {
            posX = imgRef.current.clientWidth - (lensRef.current.clientWidth);
        }
        if (posX < 0 ) {
            posX = 0;
        }
        if (posY > ((imgRef.current.clientHeight) - (lensRef.current.clientHeight))) {
            posY = imgRef.current.clientHeight - (lensRef.current.clientHeight);
        }
        if (posY < 0 ) {
            posY = 0;
        }

        setStyleLens({
            left: `${posX}px`,
            top: `${posY}px`
        })
        const { ejeX, ejeY } = findAxis();
        setStyleResult({
            ...styleResult,
            backgroundPosition: `-${posX * ejeX}px -${posY * ejeY}px`
        })
    }

    function getCursorPos(e) {
        const imagePosition = imgRef.current.getBoundingClientRect();

        let coorX = e.pageX - imagePosition.left;
        let coorY = e.pageY - imagePosition.top;
        coorX = coorX - window.scrollX;
        coorY = coorY - window.scrollY;

        return {
            coorX: coorX, 
            coorY: coorY
        };
    }


    return (
        <div className="containerDetail mt-3 bg-white">  
        <div className="mb-5 px-8 text-gray-600">
            <div className="flex md:gap-6 lg:justify-center lg:gap-14 items-center">
                <div className="img-zoom-container">
                    <div 
                        onMouseEnter={() => handleMouseEnter()} 
                        onMouseLeave={() => handlerMouseLeave()}
                        onMouseMove={(e) => handlerMouseMove(e)}
                        id="container" >
                        <div 
                            ref={lensRef} 
                            className={`${openZoom ? "zoom" : ""} img-zoom-lens`}
                            style={styleLens}
                        ></div>
                        <img
                            className='rounded-lg'
                            ref={imgRef}
                            id="myimage" 
                            src={data.image} 
                            alt=""
                            loading="lazy" />
                        <div
                            onMouseEnter={() => handlerMouseLeave()}
                            style={styleResult}
                            ref={resultRef} 
                            id="myresult"
                            className={`${openZoom ? "zoom" : ""} img-zoom-result rounded-lg`}
                        ></div>
                    </div>
                </div>

            </div>
        </div>
    </div> 

   )
}