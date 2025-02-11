import React, { useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import pdfFile from '../assets/cv.pdf';
import { pdfjs } from 'react-pdf';
import { Document, Page } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Pages = React.forwardRef((props: any) => {
    const ref = useRef<HTMLDivElement>(null);
    
    return (
        <div className="demoPage" ref={ref}>
            /* ref required */
            <h1>Page Header</h1>
            <p>{props.children}</p>
            <p>Page number: {props.number}</p>
        </div>
    );
});

Pages.displayName = "Pages";

function Book(props: any) {

    const [numPages, setNumPages] = useState<number>(1);
    // const [pageNumber, setPageNumber] = useState<number>(1);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }

    return (
        <div style={{width: "100%", height: "100%", background: "#f0f0f0"}}>

        
        <HTMLFlipBook width={300} height={500} 
        className={"c"} style={{background: "#f0f0f0"}} 
        startPage={0} size={"fixed"} 
        minWidth={0} maxWidth={0} minHeight={0} maxHeight={0} 
        drawShadow={false} flippingTime={0} usePortrait={false} 
        startZIndex={0} autoSize={false} maxShadowOpacity={0} 
        showCover={false} mobileScrollSupport={false} 
        clickEventForward={false} useMouseEvents={false} 
        swipeDistance={0} showPageCorners={false} disableFlipByClick={false}>

            {
                [...Array(numPages).keys()].map((el, index) => (
                    <Pages key={index} number={index + 1}>
                        <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
                            <Page pageNumber={index} />
                        </Document>
                        <p>
                            Page {index + 1} of {numPages}
                        </p>
                    </Pages>
                ) )
            }
            
        </HTMLFlipBook>
        </div>
    );
}

export default Book;