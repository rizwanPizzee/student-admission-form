import AdmissionInfo from './AdmissionInfoTab';
import EducationInfo from './EducationInfoTab';
import PersonalInfo from './PersonalInfoTab';
import DocumentTab from './Documentstab';
import DetailsInfo from './DetailsInfoTab';

import React, {useState} from 'react';

function StudentForm(){
    
    const [department, setDepartment] = useState("");
    const [program, setProgram] = useState("");
    const [semester, setSemester] = useState("");
    const [shift, setShift] = useState("");

    const [stdName, setStdName] = useState("");
    const [stdFName, setStdFName] = useState("");
    const [stdCNIC, setStdCNIC] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDob] = useState("");
    const [province, setProvince] = useState("");
    const [domicile, setDomicile] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");
    const [poAddress, setPoAddress] = useState("");
    const [prAddress, setPrAddress] = useState("");
    const [email, setEmail] = useState("");

    const [education, setEducation] = useState([]);
    const [degree, setDegree] = useState('');
    const [group, setGroup] = useState('');
    const [board, setBoard] = useState('');
    const [rollNo, setRollNo] = useState('');
    const [passYear, setPassYear] = useState('2019');
    const [obMarks, setObMarks] = useState('');
    const [toMarks, setToMarks] = useState('');

    const [stfileData, setSTFileData] = useState(null); 

    return (
        <div>
            <header>
                <h1>STUDENT ADMISSION FORM</h1>
            </header>
            <section>
                <div className='title-header'>
                    <div><button className='ad-info-btn-title'>Admission Info</button></div>
                    <div><button className='personal-info-btn-title'>Personal Info</button></div>
                    <div><button className='ed-info-btn-title'>Educational Info</button></div>
                    <div><button className='doc-info-btn-title'>Documents</button></div>
                    <div><button className='details-info-btn-title'>Details</button></div>
                </div>
                <div className='outer-ad-info-container'>
                    <AdmissionInfo 
                        department={department}
                        setDepartment={setDepartment}
                        program={program}
                        setProgram={setProgram}
                        semester={semester}
                        setSemester={setSemester}
                        shift={shift}
                        setShift={setShift}
                    />
                </div>
                <div className='outer-personal-info-container'>
                    <PersonalInfo
                        stdName={stdName}
                        setStdName={setStdName}
                        stdFName={stdFName}
                        setStdFName={setStdFName}
                        stdCNIC={stdCNIC}
                        setStdCNIC={setStdCNIC}
                        gender={gender}
                        setGender={setGender}
                        dob={dob}
                        setDob={setDob}
                        province={province}
                        setProvince={setProvince}
                        domicile={domicile}
                        setDomicile={setDomicile}
                        city={city}
                        setCity={setCity}
                        phone={phone}
                        setPhone={setPhone}
                        poAddress={poAddress}
                        setPoAddress={setPoAddress}
                        prAddress={prAddress}
                        setPrAddress={setPrAddress}
                        email={email}
                        setEmail={setEmail}
                    />
                </div>
                <div className='outer-ed-info-container'>
                    <EducationInfo
                        education={education}
                        setEducation={setEducation}
                        degree = {degree}
                        setDegree = {setDegree}
                        group = {group}
                        setGroup = {setGroup}
                        board = {board}
                        setBoard = {setBoard}
                        rollNo = {rollNo}
                        setRollNo = {setRollNo}
                        passYear = {passYear}
                        setPassYear = {setPassYear}
                        obMarks = {obMarks}
                        setObMarks = {setObMarks}
                        toMarks = {toMarks}
                        setToMarks = {setToMarks}
                    />
                </div>
                <div className='outer-doc-info-container'>
                    <DocumentTab 
                    stfileData = {stfileData}
                    setSTFileData = {setSTFileData}
                    />
                </div>
                <div className='outer-details-info-container'>
                    <DetailsInfo 
                        department={department}
                        program={program}
                        semester={semester}
                        shift={shift}
                        stdName={stdName}
                        stdFName={stdFName}
                        stdCNIC={stdCNIC}
                        gender={gender}
                        dob={dob}
                        province={province}
                        domicile={domicile}
                        city={city}
                        phone={phone}
                        poAddress={poAddress}
                        prAddress={prAddress}
                        email={email}
                        education={education}
                        degree = {degree}
                        group = {group}
                        board = {board}
                        rollNo = {rollNo}
                        passYear = {passYear}
                        obMarks = {obMarks}
                        toMarks = {toMarks}
                        stfileData = {stfileData}
                    />
                </div>
            </section>
        </div>
    );
}

export default StudentForm;