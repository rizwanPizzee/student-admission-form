import React, {useState, useEffect} from 'react';
import trashImg from './assets/trash1.png';
function EducationInfo({
    education, setEducation,
    degree, setDegree,
    group, setGroup,
    board, setBoard,
    rollNo, setRollNo,
    passYear, setPassYear,
    obMarks, setObMarks,
    toMarks, setToMarks
}){

    const [groupOptions, setGroupOptions] = useState([{value:'', label:'First Select Degree'}]);
    const [boardOptions, setBoardOptions] = useState([{value:'', label:'First Select Degree'}]);

    useEffect(()=>{
        if(education.length === 0){
            document.querySelector('.ed-details-edu-tab').style.display = 'none';
        }
    }, [education]);



    const handleDegree = (event) => {
        const selectedDegree = event.target.value;
        setDegree(selectedDegree);
        
        document.querySelector('.deg-tag').style.color = 'black';

        document.querySelectorAll('.dropdown-menu').forEach((dropdown)=>{
            dropdown.disabled = false;
        });

        document.querySelectorAll('.info-input-tags').forEach((inputTag)=>{
            inputTag.disabled = false;
        });
        

        if (selectedDegree === 'SSC') {
            setGroupOptions([
                { value: '', label: 'Select Group' },
                { value: 'Science(Bio)', label: 'Science(Bio)' },
                { value: 'Science(Comp)', label: 'Science(Comp)' },
                { value: 'Other', label: 'Other' }
            ]);
            setBoardOptions([
                {value: '', label: 'Select Board'},
                {value: 'FBISE', label: 'FBISE'},
                {value: 'RWP BISE', label: 'RWP BISE'},
                {value: 'Peshawar Board', label: 'Peshawar Board'},
                {value: 'Sindh Board', label: 'Sindh Board'},
                {value: 'Gujrat Board', label: 'Gujrat Board'},
            ]);
        } else if (selectedDegree === 'HSSC') {
            setGroupOptions([
                { value: '', label: 'Select Group' },
                { value: 'Pre-Engineering', label: 'Pre-Engineering' },
                { value: 'Pre-Medical', label: 'Pre-Medical' },
                { value: 'ICS', label: 'ICS' },
                { value: 'Other', label: 'Other' }
            ]);
            setBoardOptions([
                {value: '', label: 'Select Board'},
                {value: 'FBISE', label: 'FBISE'},
                {value: 'RWP BISE', label: 'RWP BISE'},
                {value: 'Peshawar Board', label: 'Peshawar Board'},
                {value: 'Sindh Board', label: 'Sindh Board'},
                {value: 'Gujrat Board', label: 'Gujrat Board'},
            ]);
        }else if(selectedDegree === 'BS'){
            setGroupOptions([
                { value: '', label: 'Select Group' },
                {value: 'Computer Science', label: 'Computer Science'},
                {value: 'Software Engineering', label: 'Software Engineering'},
                {value: 'Electrical Engineering', label: 'Electrical Engineering'},
                {value: 'Commerce', label: 'Commerce'},
                {value: 'Aritificial Intelligence', label: 'Aritificial Intelligence'},
                {value: 'English', label: 'English'},
                {value: 'Urdu', label: 'Urdu'},
            ]);
            setBoardOptions([
                {value: '', label: 'Select Institute'},
                {value: 'NUST', label: 'NUST'},
                {value: 'FAST', label: 'FAST'},
                {value: 'COMSATS ISB', label: 'COMSATS ISB'},
                {value: 'LUMS', label: 'LUMS'},
                {value: 'FUUAST ISB', label: 'FUUAST ISB'},
            ]);
        }else if(selectedDegree === 'MS'){
            setGroupOptions([
                { value: '', label: 'Select Group' },
                {value: 'Computer Science', label: 'Computer Science'},
                {value: 'Software Engineering', label: 'Software Engineering'},
                {value: 'Electrical Engineering', label: 'Electrical Engineering'},
                {value: 'Commerce', label: 'Commerce'},
                {value: 'Aritificial Intelligence', label: 'Aritificial Intelligence'},
                {value: 'English', label: 'English'},
                {value: 'Urdu', label: 'Urdu'},
            ]);
            setBoardOptions([
                {value: '', label: 'Select Institute'},
                {value: 'NUST', label: 'NUST'},
                {value: 'FAST', label: 'FAST'},
                {value: 'COMSATS ISB', label: 'COMSATS ISB'},
                {value: 'LUMS', label: 'LUMS'},
                {value: 'FUUAST ISB', label: 'FUUAST ISB'},
            ]);
        }else if(selectedDegree === 'PHD'){
            setGroupOptions([
                { value: '', label: 'Select Group' },
                {value: 'Computer Science', label: 'Computer Science'},
                {value: 'Software Engineering', label: 'Software Engineering'},
                {value: 'Electrical Engineering', label: 'Electrical Engineering'},
                {value: 'Commerce', label: 'Commerce'},
                {value: 'Aritificial Intelligence', label: 'Aritificial Intelligence'},
                {value: 'English', label: 'English'},
                {value: 'Urdu', label: 'Urdu'},
            ]);
            setBoardOptions([
                {value: '', label: 'Select Institute'},
                {value: 'NUST', label: 'NUST'},
                {value: 'FAST', label: 'FAST'},
                {value: 'COMSATS ISB', label: 'COMSATS ISB'},
                {value: 'LUMS', label: 'LUMS'},
                {value: 'FUUAST ISB', label: 'FUUAST ISB'},
            ]);
        }else {
            setGroupOptions([{ value: '', label: 'First Select Degree' }]);
            setBoardOptions([{ value: '', label: 'First Select Degree' }]);
            document.querySelector('.group-dropdown-menu').disabled = true;
            document.querySelector('.board-dropdown-menu').disabled = true;
            document.querySelectorAll('.info-input-tags').forEach((inputTag)=>{
                inputTag.disabled = true;
            });
        }
    }

    function handleGroup(event){
        setGroup(event.target.value);
        document.querySelector('.grp-tag').style.color = 'black';
    }

    function handleBoard(event){
        setBoard(event.target.value);
        document.querySelector('.brd-tag').style.color = 'black';
    }

    function handleRollNo(event){
        setRollNo(event.target.value);
        document.querySelector('.rn-tag').style.color = 'black';
    }

    function handlePassYear(event){
        setPassYear(event.target.value);
        document.querySelector('.py-tag').style.color = 'black';
    }

    function handleObMarks(event){
        setObMarks(event.target.value);
        document.querySelector('.obm-tag').style.color = 'black';
    }

    function handleToMarks(event){
        setToMarks(event.target.value);
        document.querySelector('.tm-tag').style.color = 'black';
    }

    function addDegree(){
            const errorWarning = [];
            let obMarksWarning = '';
            let toMarksWarning = '';
            const marksWarning = [];
            if(degree.trim() === ""){
                errorWarning.push("Degree");
                document.querySelector('.deg-tag').style.color = 'red';
            }
            if(group.trim() === ""){
                errorWarning.push("Group");
                document.querySelector('.grp-tag').style.color = 'red';
            }
            if(board.trim() === ""){
                errorWarning.push("Board/institute");
                document.querySelector('.brd-tag').style.color = 'red';
            }
            if(rollNo.trim() === ""){
                errorWarning.push("Roll No");
                document.querySelector('.rn-tag').style.color = 'red';
            }
            if(passYear.trim() === ""){
                errorWarning.push("Pass Year");
                document.querySelector('.py-tag').style.color = 'red';
            }
            if(obMarks.trim() === ""){
                errorWarning.push("Obtained Marks");
                document.querySelector('.obm-tag').style.color = 'red';
            }
            if(toMarks.trim() === ""){
                errorWarning.push("Total Marks");
                document.querySelector('.tm-tag').style.color = 'red';
            }
            if(obMarks > 1100 || obMarks < 0){
                obMarksWarning = "Obtained marks must be less than 1101";
                marksWarning.push(obMarksWarning);
            }
            if(toMarks > 1100 || toMarks < 0){
                toMarksWarning = "Total marks must be less than 1101";
                marksWarning.push(toMarksWarning);
            }
            if(errorWarning.length > 0){
                document.querySelector('.ed-warning-container').style.display = 'flex';
                document.querySelector('.ed-warning-text').innerHTML = `
                    Please fill out: <strong>${errorWarning.join(", ")}</strong> info
                    `;
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            }else if(errorWarning.length === 0 && marksWarning.length > 0){
                document.querySelector('.ed-warning-container').style.display = 'flex';
                document.querySelector('.ed-warning-text').innerHTML = `
                    <strong>${marksWarning.join(", ")}</strong> 
                    `;
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            }else{
                document.querySelector('.ed-details-edu-tab').style.display = 'grid';
                const newEducation ={
                    newDegree: degree,
                    newGroup: group,
                    newBoard: board,
                    newRollNo: rollNo,
                    newPassYear: passYear,
                    newObMarks: obMarks,
                    newToMarks: toMarks
                };
                setEducation(e => [...e, newEducation]);
                setDegree('');
                setGroup('');
                setBoard('');
                setRollNo('');
                setPassYear('2019');
                setObMarks('');
                setToMarks('');
                setGroupOptions([{value:'', label:'First Select Degree'}]);
                setBoardOptions([{value:'', label:'First Select Degree'}]);
                document.querySelector('.group-dropdown-menu').disabled = true;
                document.querySelector('.board-dropdown-menu').disabled = true;
            }
    }

    function removeEdu(index){
            setEducation(education.filter((_, i)=> i !== index));
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

        if (education.length === 0) {
            document.querySelector('.ed-warning-container').style.display = 'flex';
            document.querySelector('.ed-warning-text').innerHTML = `
            <strong>There must be minimum 1 educational record</strong>
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
                <div className='top-prev-arrow-div' onClick={previousPage}>
                    <span className='arrow-tag arrow-tag-top-back'>&#x2039;</span>
                    <span className='tooltip-top-back'>Back</span>
                </div>
                <h1>EDUCATIONAL INFO</h1>
                <div className='top-next-arrow-div' onClick={nextPage}>
                    <span className='arrow-tag arrow-tag-top-next'>&#x203A;</span>
                    <span className='tooltip-top-next'>Next</span>
                </div>
            </div>
            <hr />
            <div className='ed-info-container'>
                <p className='info-tags'><strong>EDUCATION</strong></p>
                <div className='ed-div'>
                    <div>
                        <p className='info-tags deg-tag'>Degree <span className='star'>*</span></p>
                        <select value={degree} className='dropdown-menu' onChange={handleDegree}>
                            <option value="">Select Degree</option>
                            <option value="SSC">SSC</option>
                            <option value="HSSC">HSSC</option>
                            <option value="BS">BS</option>
                            <option value="MS">MS</option>
                            <option value="PHD">PHD</option>
                        </select>
                    </div>
                    <div>
                        <p className='info-tags grp-tag'>Group <span className='star'>*</span></p>
                        <select value={group} className='dropdown-menu group-dropdown-menu' onChange={handleGroup} disabled>
                            {groupOptions.map((gOption) => (
                                <option key={gOption.value} value={gOption.value}>
                                {gOption.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <p className='info-tags brd-tag'>Board/Institute <span className='star'>*</span></p>
                        <select value={board} className='dropdown-menu board-dropdown-menu' onChange={handleBoard} disabled>
                            {boardOptions.map((bOption) => (
                                <option key={bOption.value} value={bOption.value}>
                                {bOption.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <p className='info-tags rn-tag'>Roll No. <span className='star'>*</span></p>
                        <input className='info-input-tags' type="text" value={rollNo} onChange={handleRollNo} placeholder='e.g. ABC3H1' disabled/>
                    </div>
                    <div>
                        <p className='info-tags py-tag'>Passing Year <span className='star'>*</span></p>
                        <input className='info-input-tags' type="number" value={passYear} onChange={handlePassYear} placeholder='e.g. 2019' disabled/>
                    </div>
                    <div>
                        <p className='info-tags obm-tag'>Obtained Marks <span className='star'>*</span></p>
                        <input className='info-input-tags' type="text" value={obMarks}
                        onKeyDown={(event) => {
                            if (
                                !/[0-9]/.test(event.key) &&
                                !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(event.key)
                            ) {
                                event.preventDefault();
                            }
                            if (event.target.value.length >= 4 &&
                                !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(event.key)
                            ) {
                                event.preventDefault();
                            }
                        }}
                        onChange={handleObMarks} placeholder='e.g. 921' disabled/>
                    </div>
                    <div>
                        <p className='info-tags tm-tag'>Total Marks <span className='star'>*</span></p>
                        <input className='info-input-tags' type="text" value={toMarks}
                        onKeyDown={(event) => {
                            if (
                                !/[0-9]/.test(event.key) &&
                                !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(event.key)
                            ) {
                                event.preventDefault();
                            }
                            if (event.target.value.length >= 4 &&
                                !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(event.key)
                            ) {
                                event.preventDefault();
                            }
                        }}
                        onChange={handleToMarks} placeholder='e.g. 1100' disabled/>
                    </div>
                </div>

                <div className='add-div-edu'>
                    <button className='add-edu' onClick={addDegree}>ADD</button>
                    <label className='tooltip-add-edu'>Click To Add Record</label>
                </div>
                <hr />
                <div className='ed-details-edu-tab'>
                    <div></div>
                    <div><strong>Certificates</strong></div>
                    <div><strong>Group</strong></div>
                    <div><strong>Board</strong></div>
                    <div><strong>Roll No.</strong></div>
                    <div><strong>Passing Year</strong></div>
                    <div><strong>Obtained Marks</strong></div>
                    <div><strong>Total Marks</strong></div>
                                
                    {education.map((edu, index)=>
                        <React.Fragment key={index}>
                            <div className='remove-edu-div'>
                                <img className='remove-edu' 
                                src={trashImg} alt="trash.png" 
                                onClick={() => {removeEdu(index)}}/>
                                <label className='tooltip-del'>Click To Remove Record</label>
                            </div>
                            <div>{edu.newDegree}</div>
                            <div>{edu.newGroup}</div>
                            <div>{edu.newBoard}</div>
                            <div>{edu.newRollNo}</div>
                            <div>{edu.newPassYear}</div>
                            <div>{edu.newObMarks}</div>
                            <div>{edu.newToMarks}</div>
                        </React.Fragment >
                    )}
                </div>
            </div>
            
            <div className='page-navigation-btns'>
                <div className='div-nav-prev'>
                    <button onClick={previousPage}><span className='arrow-tag'>&#x2039;</span> Previous</button>
                    <label className='tooltip-prev'>Go to Personal Info Page</label>
                </div>
                <div className='div-nav-next'>
                    <button onClick={nextPage}>Next <span className='arrow-tag'>&#x203A;</span></button>
                    <label className='tooltip-next'>Go to Documents Page</label>
                </div> 
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