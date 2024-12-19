import React, {useState, useEffect} from 'react';

function EducationInfo({
    sscGroup,
    setSSCGroup,
    sscRollNo,
    setSSCRollNo,
    sscBoard,
    setSSCBoard,
    sscPY,
    setSSCPY,
    sscObMarks,
    setSSCobMarks,
    sscTMarks,
    setSSCTMarks,
    hsscGroup,
    setHSSCGroup,
    hsscRollNo,
    setHSSCRollNo,
    hsscBoard,
    setHSSCBoard,
    hsscPY,
    setHSSCPY,
    hsscObMarks,
    setHSSCobMarks,
    hsscTMarks,
    setHSSCTMarks,
    grGroup,
    setGRGroup,
    grRollNo,
    setGRRollNo,
    grBoard,
    setGRBoard,
    grPY,
    setGRPY,
    grObMarks,
    setGRobMarks,
    grTMarks,
    setGRTMarks,
    otGroup,
    setOTGroup,
    otRollNo,
    setOTRollNo,
    otBoard,
    setOTBoard,
    otPY,
    setOTPY,
    otObMarks,
    setOTobMarks,
    otTMarks,
    setOTTMarks,
    degree,
    setDegree}){
    // const [sscGroup, setSSCGroup] = useState('');
    // const [sscRollNo, setSSCRollNo] = useState('');
    // const [sscBoard, setSSCBoard] = useState('');
    // const [sscPY, setSSCPY] = useState(2019);
    // const [sscObMarks, setSSCobMarks] = useState(''); 
    // const [sscTMarks, setSSCTMarks] = useState('');
    // const [hsscGroup, setHSSCGroup] = useState('');
    // const [hsscRollNo, setHSSCRollNo] = useState('');
    // const [hsscBoard, setHSSCBoard] = useState('');
    // const [hsscPY, setHSSCPY] = useState(2019);
    // const [hsscObMarks, setHSSCobMarks] = useState(''); 
    // const [hsscTMarks, setHSSCTMarks] = useState('');
    // const [grGroup, setGRGroup] = useState('');
    // const [grRollNo, setGRRollNo] = useState('');
    // const [grBoard, setGRBoard] = useState('');
    // const [grPY, setGRPY] = useState(2019);
    // const [grObMarks, setGRobMarks] = useState(''); 
    // const [grTMarks, setGRTMarks] = useState('');
    // const [otGroup, setOTGroup] = useState('');
    // const [otRollNo, setOTRollNo] = useState('');
    // const [otBoard, setOTBoard] = useState('');
    // const [otPY, setOTPY] = useState(2019);
    // const [otObMarks, setOTobMarks] = useState(''); 
    // const [otTMarks, setOTTMarks] = useState('');

    function handleSSCGroup(event){
        setSSCGroup(event.target.value);
    }
    function handleSSCRollNo(event){
        setSSCRollNo(event.target.value);
    }
    function handleSSCBoard(event){
        setSSCBoard(event.target.value);
    }
    function handleSSCPY(event){
        setSSCPY(event.target.value);
    }
    function handleSSCobMarks(event){
        setSSCobMarks(event.target.value);
    }
    function handleSSCTMarks(event){
        setSSCTMarks(event.target.value);
    }
    function handleHSSCGroup(event){
        setHSSCGroup(event.target.value);
    }
    function handleHSSCRollNo(event){
        setHSSCRollNo(event.target.value);
    }
    function handleHSSCBoard(event){
        setHSSCBoard(event.target.value);
    }
    function handleHSSCPY(event){
        setHSSCPY(event.target.value);
    }
    function handleHSSCobMarks(event){
        setHSSCobMarks(event.target.value);
    }
    function handleHSSCTMarks(event){
        setHSSCTMarks(event.target.value);
    }
    function handleGRGroup(event){
        setGRGroup(event.target.value);
    }
    function handleGRRollNo(event){
        setGRRollNo(event.target.value);
    }
    function handleGRBoard(event){
        setGRBoard(event.target.value);
    }
    function handleGRPY(event){
        setGRPY(event.target.value);
    }
    function handleGRobMarks(event){
        setGRobMarks(event.target.value);
    }
    function handleGRTMarks(event){
        setGRTMarks(event.target.value);
    }
    function handleOTGroup(event){
        setOTGroup(event.target.value);
    }
    function handleOTRollNo(event){
        setOTRollNo(event.target.value);
    }
    function handleOTBoard(event){
        setOTBoard(event.target.value);
    }
    function handleOTPY(event){
        setOTPY(event.target.value);
    }
    function handleOTobMarks(event){
        setOTobMarks(event.target.value);
    }
    function handleOTTMarks(event){
        setOTTMarks(event.target.value);
    }

    function handleDegree(event){
        setDegree(event.target.value);
        const target = event.target.value;
        console.log('deg'+ degree);
        if(degree === 'SSC'){
            document.querySelector('.group-drop-down').innerHTML = `
                <option value="">Select Group</option>
                <option value="Science(Bio)">Science(Bio)</option>
                <option value="Science(Comp)">Science(Comp)</option>
                <option value="Other">Other</option>
            `;
        }
        
    }

    function previousPage(){
            document.querySelector('.personal-info-btn-title').style.opacity = 1;
            document.querySelector('.ed-info-btn-title').style.opacity = 0.6;
            document.querySelector('.outer-personal-info-container').style.display = 'flex';
            document.querySelector('.outer-ed-info-container').style.display = 'none';
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
    }
    function nextPage(){
        const sscErrorsWarning = [];
        const hsscErrorsWarning = [];
        if (sscGroup.trim() === "") sscErrorsWarning.push("SSC Group");
        if (sscRollNo.trim() === "") sscErrorsWarning.push("SSC Roll No.");
        if (sscBoard.trim() === "") sscErrorsWarning.push("SSC Board");
        if (sscObMarks.trim() === "") sscErrorsWarning.push("SSC Obtained Marks");
        if (sscTMarks.trim() === "") sscErrorsWarning.push("SSC Total Marks");
        if (hsscGroup.trim() === "") hsscErrorsWarning.push("HSSC Group");
        if (hsscRollNo.trim() === "") hsscErrorsWarning.push("HSSC Roll No.");
        if (hsscBoard.trim() === "") hsscErrorsWarning.push("HSSC Board");
        if (hsscObMarks.trim() === "") hsscErrorsWarning.push("HSSC Obtained Marks");
        if (hsscTMarks.trim() === "") hsscErrorsWarning.push("HSSC Total Marks");

        if (sscErrorsWarning.length > 0 || hsscErrorsWarning.length > 0) {
            document.querySelector('.ed-warning-container').style.display = 'flex';
            document.querySelector('.ed-warning-text').innerHTML = `
            Please fill out: 
            <hr> 
            <strong>${sscErrorsWarning.join(", ")}</strong> 
            <hr>
            <strong>${hsscErrorsWarning.join(", ")}</strong> info
            `;
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }else{
            document.querySelector('.doc-info-btn-title').style.opacity = 1;
            document.querySelector('.ed-info-btn-title').style.opacity = 0.6;
            document.querySelector('.outer-ed-info-container').style.display = 'none';
            document.querySelector('.outer-doc-info-container').style.display = 'flex';
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }  
    }

    function removeWarning(){
        document.querySelector('.ed-warning-container').style.display = 'none';
    }

    return(
        <div className='info-container'>
            <div className='info-container-header'>
                <div onClick={previousPage}><span className='arrow-tag'>&#x2039;</span></div>
                <h1>EDUCATIONAL INFO</h1>
                <div onClick={nextPage}><span className='arrow-tag'>&#x203A;</span></div>
            </div>
            <hr />
            <div className='ed-info-container'>
                 <p className='info-tags'><strong>S.S.C/Equivalent</strong></p>
                <div className='ed-div'>
                    <div>
                        <p className='info-tags'>Group</p>
                        <select value={sscGroup} className='dropdown-menu' onChange={handleSSCGroup}>
                            <option value="">Select Group</option>
                            <option value="Science(Bio)">Science(Bio)</option>
                            <option value="Science(Comp)">Science(Comp)</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div>
                        <p className='info-tags'>Roll No.</p>
                        <input className='info-input-tags' type="text" value={sscRollNo} onChange={handleSSCRollNo} placeholder='e.g. ABC3H1' />
                    </div>
                    <div>
                        <p className='info-tags'>Board/Institute</p>
                        <input className='info-input-tags' type="text" value={sscBoard} onChange={handleSSCBoard} placeholder='e.g. Fedral Board' />
                    </div>
                    <div>
                        <p className='info-tags'>Passing Year</p>
                        <input className='info-input-tags' type="number" value={sscPY} onChange={handleSSCPY} placeholder='e.g. 2019' />
                    </div>
                    <div>
                        <p className='info-tags'>Obtained Marks</p>
                        <input className='info-input-tags' type="text" value={sscObMarks} 
                        onKeyDown={(event) => { 
                            if (
                                !/[0-9]/.test(event.key) && 
                                !['Backspace'].includes(event.key)
                            ) {
                                event.preventDefault();
                            }
                            if (event.target.value.length >= 4 && 
                                !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(event.key)
                            ) {
                                event.preventDefault();
                            }
                        }}
                        onChange={handleSSCobMarks} placeholder='e.g. 921' />
                    </div>
                    <div>
                        <p className='info-tags'>Total Marks</p>
                        <input className='info-input-tags' type="text" value={sscTMarks} 
                        onKeyDown={(event) => { 
                            if (
                                !/[0-9]/.test(event.key) && 
                                !['Backspace'].includes(event.key)
                            ) {
                                event.preventDefault();
                            }
                            if (event.target.value.length >= 4 && 
                                !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(event.key)
                            ) {
                                event.preventDefault();
                            }
                        }}
                        onChange={handleSSCTMarks} placeholder='e.g. 1100' />
                    </div>
                </div> 
                <hr />
                <p className='info-tags'><strong>H.S.S.C/Equivalent</strong></p>
                <div className='ed-div'>
                    <div>
                        <p className='info-tags'>Group</p>
                        <select value={hsscGroup} className='dropdown-menu' onChange={handleHSSCGroup}>
                            <option value="">Select Group</option>
                            <option value="Pre-Engineering">Pre-Engineering</option>
                            <option value="Pre-Medical">Pre-Medical</option>
                            <option value="ICS">ICS</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div>
                        <p className='info-tags'>Roll No.</p>
                        <input className='info-input-tags' type="text" value={hsscRollNo} onChange={handleHSSCRollNo} placeholder='e.g. ABC3H1' />
                    </div>
                    <div>
                        <p className='info-tags'>Board/Institute</p>
                        <input className='info-input-tags' type="text" value={hsscBoard} onChange={handleHSSCBoard} placeholder='e.g. Fedral Board' />
                    </div>
                    <div>
                        <p className='info-tags'>Passing Year</p>
                        <input className='info-input-tags' type="number" value={hsscPY} onChange={handleHSSCPY} placeholder='e.g. 2019' />
                    </div>
                    <div>
                        <p className='info-tags'>Obtained Marks</p>
                        <input className='info-input-tags' type="text" value={hsscObMarks} 
                        onKeyDown={(event) => { 
                            if (
                                !/[0-9]/.test(event.key) && 
                                !['Backspace'].includes(event.key)
                            ) {
                                event.preventDefault();
                            }
                            if (event.target.value.length >= 4 && 
                                !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(event.key)
                            ) {
                                event.preventDefault();
                            }
                        }}
                        onChange={handleHSSCobMarks} placeholder='e.g. 921' />
                    </div>
                    <div>
                        <p className='info-tags'>Total Marks</p>
                        <input className='info-input-tags' type="text" value={hsscTMarks} 
                        onKeyDown={(event) => { 
                            if (
                                !/[0-9]/.test(event.key) && 
                                !['Backspace'].includes(event.key)
                            ) {
                                event.preventDefault();
                            }
                            if (event.target.value.length >= 4 && 
                                !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(event.key)
                            ) {
                                event.preventDefault();
                            }
                        }}
                        onChange={handleHSSCTMarks} placeholder='e.g. 1100' />
                    </div>
                </div>
                <hr />
                <p className='info-tags'><strong>Graduation/Equivalent</strong></p>
                <div className='ed-div'>
                    <div>
                        <p className='info-tags'>Group</p>
                        <input className='info-input-tags' type="text" value={grGroup} onChange={handleGRGroup} placeholder='e.g. Comp' />
                    </div>
                    <div>
                        <p className='info-tags'>Roll No.</p>
                        <input className='info-input-tags' type="text" value={grRollNo} onChange={handleGRRollNo} placeholder='e.g. ABC3H1' />
                    </div>
                    <div>
                        <p className='info-tags'>Board/Institute</p>
                        <input className='info-input-tags' type="text" value={grBoard} onChange={handleGRBoard} placeholder='e.g. Fedral Board' />
                    </div>
                    <div>
                        <p className='info-tags'>Passing Year</p>
                        <input className='info-input-tags' type="number" value={grPY} onChange={handleGRPY} placeholder='e.g. 2019' />
                    </div>
                    <div>
                        <p className='info-tags'>Obtained Marks</p>
                        <input className='info-input-tags' type="text" value={grObMarks} 
                        onKeyDown={(event) => { 
                            if (
                                !/[0-9]/.test(event.key) && 
                                !['Backspace'].includes(event.key)
                            ) {
                                event.preventDefault();
                            }
                            if (event.target.value.length >= 4 && 
                                !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(event.key)
                            ) {
                                event.preventDefault();
                            }
                        }}
                        onChange={handleGRobMarks} placeholder='e.g. 921' />
                    </div>
                    <div>
                        <p className='info-tags'>Total Marks</p>
                        <input className='info-input-tags' type="text" value={grTMarks} 
                        onKeyDown={(event) => { 
                            if (
                                !/[0-9]/.test(event.key) && 
                                !['Backspace'].includes(event.key)
                            ) {
                                event.preventDefault();
                            }
                            if (event.target.value.length >= 4 && 
                                !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(event.key)
                            ) {
                                event.preventDefault();
                            }
                        }}
                        onChange={handleGRTMarks} placeholder='e.g. 1100' />
                    </div>
                </div>
                <hr />
                <p className='info-tags'><strong>Others</strong></p>
                <div className='ed-div'>
                    <div>
                        <p className='info-tags'>Group</p>
                        <input className='info-input-tags' type="text" value={otGroup} onChange={handleOTGroup} placeholder='e.g. ABCD' />
                    </div>
                    <div>
                        <p className='info-tags'>Roll No.</p>
                        <input className='info-input-tags' type="text" value={otRollNo} onChange={handleOTRollNo} placeholder='e.g. ABC3H1' />
                    </div>
                    <div>
                        <p className='info-tags'>Board/Institute</p>
                        <input className='info-input-tags' type="text" value={otBoard} onChange={handleOTBoard} placeholder='e.g. Fedral Board' />
                    </div>
                    <div>
                        <p className='info-tags'>Passing Year</p>
                        <input className='info-input-tags' type="number" value={otPY} onChange={handleOTPY} placeholder='e.g. 2019' />
                    </div>
                    <div>
                        <p className='info-tags'>Obtained Marks</p>
                        <input className='info-input-tags' type="text" value={otObMarks} 
                        onKeyDown={(event) => { 
                            if (
                                !/[0-9]/.test(event.key) && 
                                !['Backspace'].includes(event.key)
                            ) {
                                event.preventDefault();
                            }
                            if (event.target.value.length >= 4 && 
                                !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(event.key)
                            ) {
                                event.preventDefault();
                            }
                        }}
                        onChange={handleOTobMarks} placeholder='e.g. 921' />
                    </div>
                    <div>
                        <p className='info-tags'>Total Marks</p>
                        <input className='info-input-tags' type="text" value={otTMarks} 
                        onKeyDown={(event) => { 
                            if (
                                !/[0-9]/.test(event.key) && 
                                !['Backspace'].includes(event.key)
                            ) {
                                event.preventDefault();
                            }
                            if (event.target.value.length >= 4 && 
                                !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(event.key)
                            ) {
                                event.preventDefault();
                            }
                        }}
                        onChange={handleOTTMarks} placeholder='e.g. 1100' />
                    </div>
                </div>
            </div>
            
            <div className='page-navigation-btns'>
                <button onClick={previousPage}><span className='arrow-tag'>&#x2039;</span> Previous</button>
                <button onClick={nextPage}>Next <span className='arrow-tag'>&#x203A;</span></button>
            </div>

            <div className='ed-warning-container'>
                <div className='ed-inner-warning-container'>
                    <p className='ed-warning-text'>warning</p>
                    <div className='cross' onClick={removeWarning}>X</div>
                    <button onClick={removeWarning}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default EducationInfo;