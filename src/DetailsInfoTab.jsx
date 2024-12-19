import React, {useState, useEffect} from 'react';

function DetailsInfo({
    department,
    program,
    semester,
    shift,
    stdName,
    stdFName,
    stdCNIC,
    gender,
    dob,
    province,
    domicile,
    city,
    phone,
    poAddress,
    prAddress,
    email,
    sscGroup,
    sscRollNo,
    sscBoard,
    sscPY,
    sscObMarks,
    sscTMarks,
    hsscGroup,
    hsscRollNo,
    hsscBoard,
    hsscPY,
    hsscObMarks,
    hsscTMarks,
    grGroup,
    grRollNo,
    grBoard,
    grPY,
    grObMarks,
    grTMarks,
    otGroup,
    otRollNo,
    otBoard,
    otPY,
    otObMarks,
    otTMarks,
    stfileData
}){
    function downloadDivAsImage() {
        const resultDiv = document.querySelector('.detail-info-container');
        let printBtn = document.querySelector('.print-btn');
        printBtn.style.display = 'none';
        html2canvas(resultDiv).then(canvas => {
            const image = canvas.toDataURL('image/jpeg');
            const link = document.createElement('a');
            link.href = image;
            const fileName = stdName.toUpperCase();
            link.download = fileName + "'s Admission Form";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
        printBtn.style.display = 'block';
    }

    return(
        <div className='info-container detail-info-container'>
            <h1>STUDENT ADMISSION FORM</h1>
            <div className='image-std'>
                <img src={stfileData} alt="Std Pic" />
            </div>
            <h2>Admission Info</h2>
            <div className='ad-details'>
                <div>Department: <span className='detail-info'><strong>{department || "Not provided"}</strong></span></div>
                <div>Program: <span className='detail-info'><strong>{program}</strong></span></div>
                <div>Semester:<span className='detail-info'><strong>{semester}</strong></span></div>
                <div>Shift: <span className='detail-info'><strong>{shift}</strong></span></div>
            </div>
            <hr />
            <h2>Personal Info</h2>
            <div className='pr-details'>
                <div>Student Name: <span className='detail-info'><strong>{stdName}</strong></span></div>
                <div>Father's Name: <span className='detail-info'><strong>{stdFName}</strong></span> </div>
                <div>Student CNIC: <span className='detail-info'><strong>{stdCNIC}</strong></span></div>
                <div>Gender: <span className='detail-info'><strong>{gender}</strong></span></div>
                <div>Date of Birth: <span className='detail-info'><strong>{dob}</strong></span></div>
                <div>Province: <span className='detail-info'><strong>{province}</strong></span></div>
                <div>Domicile: <span className='detail-info'><strong>{domicile}</strong></span></div>
                <div>Current City: <span className='detail-info'><strong>{city}</strong></span></div>
                <div>Postal Address: <span className='detail-info'><strong>{poAddress}</strong></span></div>
                <div>Permanent Address: <span className='detail-info'><strong>{prAddress}</strong></span></div>
                <div>Phone No.: <span className='detail-info'><strong>{phone}</strong></span></div>
                <div>Email Address: <span className='detail-info'><strong>{email}</strong></span></div>
            </div>
            <hr />
            <h2>Educational Info</h2>
            <div className='ed-details'>
                <div><strong>Certificates</strong></div>
                <div><strong>Group</strong></div>
                <div><strong>Roll No.</strong></div>
                <div><strong>Board</strong></div>
                <div><strong>Passing Year</strong></div>
                <div><strong>Obtained Marks</strong></div>
                <div><strong>Total Marks</strong></div>
                <div>SSC/Equi.</div>
                <div>{sscGroup}</div>
                <div>{sscRollNo}</div>
                <div>{sscBoard}</div>
                <div>{sscPY}</div>
                <div>{sscObMarks}</div>
                <div>{sscTMarks}</div>
                <div>HSSC/Equi.</div>
                <div>{hsscGroup}</div>
                <div>{hsscRollNo}</div>
                <div>{hsscBoard}</div>
                <div>{hsscPY}</div>
                <div>{hsscObMarks}</div>
                <div>{hsscTMarks}</div>
                <div>Graduation/Equi.</div>
                <div>{grGroup}</div>
                <div>{grRollNo}</div>
                <div>{grBoard}</div>
                <div>{grPY}</div>
                <div>{grObMarks}</div>
                <div>{grTMarks}</div>
                <div>Other</div>
                <div>{otGroup}</div>
                <div>{otRollNo}</div>
                <div>{otBoard}</div>
                <div>{otPY}</div>
                <div>{otObMarks}</div>
                <div>{otTMarks}</div>
            </div>
            <div className='page-navigation-btns'>
                <button className='print-btn' onClick={downloadDivAsImage}>Print </button>
            </div>
        </div>
    );
}

export default DetailsInfo;