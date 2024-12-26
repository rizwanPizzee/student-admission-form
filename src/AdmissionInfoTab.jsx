
import React, {useState, useEffect} from 'react';
import DetailsInfo from './DetailsInfoTab';

function AdmissionInfo({
    department,
    setDepartment,
    program,
    setProgram,
    semester,
    setSemester,
    shift,
    setShift,
}){
    
    
    
    function handleDepartment(event){
        setDepartment(event.target.value);
        document.querySelector('.dept-tag').style.color = 'black';
    }
    function handleProgram(event){
        setProgram(event.target.value);
        document.querySelector('.prog-tag').style.color = 'black';
    }

    function handleSemester(event){
        setSemester(event.target.value);
        document.querySelector('.sem-tag').style.color = 'black';
    }

    function handleShift(event){
        setShift(event.target.value);
        document.querySelector('.shift-tag').style.color = 'black';
    }
    
    function nextPage(){
        
        const errorsWarning = [];
        if (department.trim() === "") {
            errorsWarning.push("Department");
            document.querySelector('.dept-tag').style.color = 'red';
        };
        if (program.trim() === "") {
            errorsWarning.push("Program");
            document.querySelector('.prog-tag').style.color = 'red';
        };
        if (semester.trim() === "") {
            errorsWarning.push("Semester");
            document.querySelector('.sem-tag').style.color = 'red';
        };
        if (shift.trim() === "") {
            errorsWarning.push("Shift")
            document.querySelector('.shift-tag').style.color = 'red';
        };

        if (errorsWarning.length > 0) {
            document.querySelector('.warning-container').style.display = 'flex';
            document.querySelector('.warning-text').innerHTML = `Please fill out: <strong>${errorsWarning.join(", ")}</strong> info`;

        }
        else{
            document.querySelector('.personal-info-btn-title').style.opacity = 1;
            document.querySelector('.ad-info-btn-title').style.opacity = 0.6;
            document.querySelector('.outer-ad-info-container').style.display = 'none';
            document.querySelector('.outer-personal-info-container').style.display = 'flex';
        }
    }

    function removeWarning(){
        document.querySelector('.warning-container').style.display = 'none';
    }

    
    
    return(
        <div className='info-container'>
            <div className='info-container-header'>
                <div><span></span></div>
                <h1>ADMISSION INFO</h1>
                <div className='top-next-arrow-div' onClick={nextPage}>
                    <span className='arrow-tag arrow-tag-top-next'>&#x203A;</span>
                    <span className='tooltip-top-next'>Next</span>
                </div>
            </div>
            <hr />
            <p className='info-tags dept-tag'>Department <span className='star'>*</span></p>
            <select value={department} className='dropdown-menu' onChange={handleDepartment}>
                <option value="">Select Department</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Software Engineering">Software Engineering</option>
                <option value="Commerce">Commerce</option>
                <option value="Aritificial Intelligence">Aritificial Intelligence</option>
                <option value="Electrical Engineering">Electrical Engineering</option>
                <option value="English">English</option>
                <option value="Islamic Studies">Islamic Studies</option>
                <option value="Urdu">Urdu</option>
            </select>
            <p className='info-tags prog-tag'>Program <span className='star'>*</span></p>
            <select value={program} className='dropdown-menu' onChange={handleProgram}>
                <option value="">Select Program</option>
                <option value="BS">BS</option>
                <option value="MS">MS</option>
                <option value="PHD">PHD</option>
            </select>

            <p className='info-tags sem-tag'>Semester <span className='star'>*</span></p>
            <label className='radio-label'>
                <input type="radio" value="Fall" checked={semester === "Fall"} onChange={handleSemester} />
                Fall
            </label>
            <label className='radio-label'>
                <input type="radio" value="Spring" checked={semester === "Spring"} onChange={handleSemester}/>
                Spring
            </label>

            <p className='info-tags shift-tag'>Shift <span className='star'>*</span></p>
            <label className='radio-label'>
                <input type="radio" value="Morning" checked={shift === "Morning"} onChange={handleShift}/>
                Morning
            </label>
            <label className='radio-label'>
                <input type="radio" value="Evening" checked={shift === "Evening"} onChange={handleShift}/>
                Evening
            </label>
            <div className='page-navigation-btns'>
            <div className='div-nav-next'>
                    <button onClick={nextPage}>Next <span className='arrow-tag'>&#x203A;</span></button>
                    <label className='tooltip-next'>Go to Personal Info Page</label>
                </div>    
            </div>
            
            <div className='warning-container'>
                <div className='inner-warning-container'>
                    <p className='warning-text'>warning</p>
                    <div className='cross' onClick={removeWarning}>X</div>
                    <button onClick={removeWarning}>Close</button>
                </div>
            </div>

            
        </div>
    );

}

export default AdmissionInfo;