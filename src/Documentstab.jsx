import React, {useState, useEffect} from 'react';

function DocumentTab({stfileData,
    setSTFileData
 }){
    // const [stfileData, setSTFileData] = useState(null); 
    const [stfileType, setSTFileType] = useState("");
    const [stCNICfileData, setSTCNICFileData] = useState(null); 
    const [stCNICfileType, setSTCNICFileType] = useState("");
    const [fileData, setFileData] = useState(null); 
    const [fileType, setFileType] = useState(""); 
    const [hsscfileData, setHSSCFileData] = useState(null); 
    const [hsscfileType, setHSSCFileType] = useState(""); 
    const [grfileData, setGRFileData] = useState(null); 
    const [grfileType, setGRFileType] = useState(""); 
    const [otfileData, setOTFileData] = useState(null); 
    const [otfileType, setOTFileType] = useState(""); 

    const handleFileChange = (event) => {
        const file = event.target.files[0]; 
        if (file) {
            const fileReader = new FileReader();

            fileReader.onload = (e) => {
                setFileData(e.target.result); 
                setFileType(file.type); 
            };

            if (file.type.startsWith("image/")) {
                fileReader.readAsDataURL(file);
            } else if (file.type.startsWith("text/")) {
                fileReader.readAsText(file); 
            } else {
                setFileData(null);
                alert("Unsupported file type for preview.");
            }
        }
    }
    const handleSTFileChange = (event) => {
        const file = event.target.files[0]; 
        if (file) {
            const fileReader = new FileReader();

            fileReader.onload = (e) => {
                setSTFileData(e.target.result); 
                setSTFileType(file.type); 
            };

            if (file.type.startsWith("image/")) {
                fileReader.readAsDataURL(file);
            } else if (file.type.startsWith("text/")) {
                fileReader.readAsText(file); 
            } else {
                setSTFileData(null);
                alert("Unsupported file type for preview.");
            }
        }
    }
    const handleSTCNICFileChange = (event) => {
        const file = event.target.files[0]; 
        if (file) {
            const fileReader = new FileReader();

            fileReader.onload = (e) => {
                setSTCNICFileData(e.target.result); 
                setSTCNICFileType(file.type); 
            };

            if (file.type.startsWith("image/")) {
                fileReader.readAsDataURL(file);
            } else if (file.type.startsWith("text/")) {
                fileReader.readAsText(file); 
            } else {
                setSTCNICFileData(null);
                alert("Unsupported file type for preview.");
            }
        }
    }
    const handleHSSCFileChange = (event) => {
        const file = event.target.files[0]; 
        if (file) {
            const fileReader = new FileReader();

            fileReader.onload = (e) => {
                setHSSCFileData(e.target.result); 
                setHSSCFileType(file.type); 
            };

            if (file.type.startsWith("image/")) {
                fileReader.readAsDataURL(file);
            } else if (file.type.startsWith("text/")) {
                fileReader.readAsText(file); 
            } else {
                setHSSCFileData(null);
                alert("Unsupported file type for preview.");
            }
        }
    }

    const handleGRFileChange = (event) => {
        const file = event.target.files[0]; 
        if (file) {
            const fileReader = new FileReader();

            fileReader.onload = (e) => {
                setGRFileData(e.target.result); 
                setGRFileType(file.type); 
            };

            if (file.type.startsWith("image/")) {
                fileReader.readAsDataURL(file);
            } else if (file.type.startsWith("text/")) {
                fileReader.readAsText(file); 
            } else {
                setGRFileData(null);
                alert("Unsupported file type for preview.");
            }
        }
    }
    const handleOTFileChange = (event) => {
        const file = event.target.files[0]; 
        if (file) {
            const fileReader = new FileReader();

            fileReader.onload = (e) => {
                setOTFileData(e.target.result); 
                setOTFileType(file.type); 
            };

            if (file.type.startsWith("image/")) {
                fileReader.readAsDataURL(file);
            } else if (file.type.startsWith("text/")) {
                fileReader.readAsText(file); 
            } else {
                setOTFileData(null);
                alert("Unsupported file type for preview.");
            }
        }
    }

    function previousPage(){
            document.querySelector('.ed-info-btn-title').style.opacity = 1;
            document.querySelector('.doc-info-btn-title').style.opacity = 0.6;
            document.querySelector('.outer-ed-info-container').style.display = 'flex';
            document.querySelector('.outer-doc-info-container').style.display = 'none';
    }
    function nextPage(){
        const errorsWarning = [];
        if (stfileData === null) errorsWarning.push("Student Picture");
        if (stCNICfileData === null) errorsWarning.push("Student CNIC/B-Form");
        if (fileData === null) errorsWarning.push("SSC Certificate");
        if (hsscfileData === null) errorsWarning.push("HSSC Certificate");
        
        

        if (errorsWarning.length > 0) {
            document.querySelector('.doc-warning-container').style.display = 'flex';
            document.querySelector('.doc-warning-text').innerHTML = `Please Attach: <strong>${errorsWarning.join(", ")}</strong>`;
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        } else{
            document.querySelector('.doc-submit-container').style.display = 'flex';
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    }
    function submitData(){
            document.querySelector('.details-info-btn-title').style.opacity = 1;
            document.querySelector('.doc-info-btn-title').style.opacity = 0.6;
            document.querySelector('.outer-doc-info-container').style.display = 'none';
            document.querySelector('.outer-details-info-container').style.display = 'flex';

    }
    function removeWarning(){
        document.querySelector('.doc-warning-container').style.display = 'none';
    }

    function removeWarningSub(){
        document.querySelector('.doc-submit-container').style.display = 'none';
    }

    return(
        <div className='info-container'>
            <div className='info-container-header'>
                <div onClick={previousPage}><span className='arrow-tag'>&#x2039;</span></div>
                <h1>DOCUMENTS</h1>
                <div onClick={nextPage}><span className='arrow-tag'>&#x203A;</span></div>
            </div>
            <hr />
            <p className='info-tags'>Student Picture</p>
            <input type="file" onChange={handleSTFileChange} />
            <div>
                {stfileData ? (
                    stfileType.startsWith("image/") ? (
                        <img className='preview-img' src={stfileData} alt="Preview"/>
                    ) : stfileType.startsWith("text/") ? (
                        <pre >{stfileData}</pre>
                    ) : (
                        <p>File type not supported for preview.</p>
                    )
                ) : (
                    <p>No SSC file selected</p>
                )}
            </div>
            <p className='info-tags'>Student CNIC/B-Form</p>
            <input type="file" onChange={handleSTCNICFileChange} />
            <div>
                {stCNICfileData ? (
                    stCNICfileType.startsWith("image/") ? (
                        <img className='preview-img' src={stCNICfileData} alt="Preview"/>
                    ) : stCNICfileType.startsWith("text/") ? (
                        <pre >{stCNICfileData}</pre>
                    ) : (
                        <p>File type not supported for preview.</p>
                    )
                ) : (
                    <p>No SSC file selected</p>
                )}
            </div>
            <p className='info-tags'>SSC Certificate</p>
            <input type="file" onChange={handleFileChange} />
            <div>
                {fileData ? (
                    fileType.startsWith("image/") ? (
                        <img className='preview-img' src={fileData} alt="Preview"/>
                    ) : fileType.startsWith("text/") ? (
                        <pre >{fileData}</pre>
                    ) : (
                        <p>File type not supported for preview.</p>
                    )
                ) : (
                    <p>No SSC file selected</p>
                )}
            </div>
            <p className='info-tags'>HSSC Certificate</p>
            <input type="file" onChange={handleHSSCFileChange} />
            <div>
                {hsscfileData ? (
                    hsscfileType.startsWith("image/") ? (
                        <img className='preview-img' src={hsscfileData} alt="Preview"/>
                    ) : hsscfileType.startsWith("text/") ? (
                        <pre >{hsscfileData}</pre>
                    ) : (
                        <p>File type not supported for preview.</p>
                    )
                ) : (
                    <p>No HSSC file selected</p>
                )}
            </div>
            <p className='info-tags'>Graduation Certificate</p>
            <input type="file" onChange={handleGRFileChange} />
            <div>
                {grfileData ? (
                    grfileType.startsWith("image/") ? (
                        <img className='preview-img' src={grfileData} alt="Preview"/>
                    ) : grfileType.startsWith("text/") ? (
                        <pre >{grfileData}</pre>
                    ) : (
                        <p>File type not supported for preview.</p>
                    )
                ) : (
                    <p>No Graduation file selected</p>
                )}
            </div>

            <p className='info-tags'>Other Certificate</p>
            <input type="file" onChange={handleOTFileChange} />
            <div>
                {otfileData ? (
                    otfileType.startsWith("image/") ? (
                        <img className='preview-img' src={otfileData} alt="Preview"/>
                    ) : otfileType.startsWith("text/") ? (
                        <pre >{otfileData}</pre>
                    ) : (
                        <p>File type not supported for preview.</p>
                    )
                ) : (
                    <p>No file selected</p>
                )}
            </div>
            
            <div className='page-navigation-btns'>
                <button onClick={previousPage}><span className='arrow-tag'>&#x2039;</span> Previous</button>
                <button onClick={nextPage}>Submit <span className='arrow-tag'>&#x203A;</span></button>
            </div>
            <div className='doc-warning-container'>
                <div className='doc-inner-warning-container'>
                    <p className='doc-warning-text'>warning</p>
                    <div className='cross' onClick={removeWarning}>X</div>
                    <button onClick={removeWarning}>Close</button>
                </div>
            </div>
            <div className='doc-submit-container'>
                <div className='doc-inner-submit-container'>
                    <p className='doc-submit-text'>Please check your details again, there is no return.</p>
                    <div className='cross' onClick={removeWarningSub}>X</div>
                    <button onClick={submitData}>Submit</button>
                    <button onClick={removeWarningSub}>Close</button>
                </div>
            </div>
        </div>
    );
}


export default DocumentTab;