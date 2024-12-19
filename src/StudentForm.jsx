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

    const [sscGroup, setSSCGroup] = useState('');
    const [sscRollNo, setSSCRollNo] = useState('');
    const [sscBoard, setSSCBoard] = useState('');
    const [sscPY, setSSCPY] = useState(2019);
    const [sscObMarks, setSSCobMarks] = useState(''); 
    const [sscTMarks, setSSCTMarks] = useState('');
    const [hsscGroup, setHSSCGroup] = useState('');
    const [hsscRollNo, setHSSCRollNo] = useState('');
    const [hsscBoard, setHSSCBoard] = useState('');
    const [hsscPY, setHSSCPY] = useState(2019);
    const [hsscObMarks, setHSSCobMarks] = useState(''); 
    const [hsscTMarks, setHSSCTMarks] = useState('');
    const [grGroup, setGRGroup] = useState('');
    const [grRollNo, setGRRollNo] = useState('');
    const [grBoard, setGRBoard] = useState('');
    const [grPY, setGRPY] = useState('');
    const [grObMarks, setGRobMarks] = useState(''); 
    const [grTMarks, setGRTMarks] = useState('');
    const [otGroup, setOTGroup] = useState('');
    const [otRollNo, setOTRollNo] = useState('');
    const [otBoard, setOTBoard] = useState('');
    const [otPY, setOTPY] = useState('');
    const [otObMarks, setOTobMarks] = useState(''); 
    const [otTMarks, setOTTMarks] = useState('');
    const [degree, setDegree] = useState('');

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
                        sscGroup={sscGroup}
                        setSSCGroup={setSSCGroup}
                        sscRollNo={sscRollNo}
                        setSSCRollNo={setSSCRollNo}
                        sscBoard={sscBoard}
                        setSSCBoard={setSSCBoard}
                        sscPY={sscPY}
                        setSSCPY={setSSCPY}
                        sscObMarks={sscObMarks}
                        setSSCobMarks={setSSCobMarks}
                        sscTMarks={sscTMarks}
                        setSSCTMarks={setSSCTMarks}
                        hsscGroup={hsscGroup}
                        setHSSCGroup={setHSSCGroup}
                        hsscRollNo={hsscRollNo}
                        setHSSCRollNo={setHSSCRollNo}
                        hsscBoard={hsscBoard}
                        setHSSCBoard={setHSSCBoard}
                        hsscPY={hsscPY}
                        setHSSCPY={setHSSCPY}
                        hsscObMarks={hsscObMarks}
                        setHSSCobMarks={setHSSCobMarks}
                        hsscTMarks={hsscTMarks}
                        setHSSCTMarks={setHSSCTMarks}
                        grGroup={grGroup}
                        setGRGroup={setGRGroup}
                        grRollNo={grRollNo}
                        setGRRollNo={setGRRollNo}
                        grBoard={grBoard}
                        setGRBoard={setGRBoard}
                        grPY={grPY}
                        setGRPY={setGRPY}
                        grObMarks={grObMarks}
                        setGRobMarks={setGRobMarks}
                        grTMarks={grTMarks}
                        setGRTMarks={setGRTMarks}
                        otGroup={otGroup}
                        setOTGroup={setOTGroup}
                        otRollNo={otRollNo}
                        setOTRollNo={setOTRollNo}
                        otBoard={otBoard}
                        setOTBoard={setOTBoard}
                        otPY={otPY}
                        setOTPY={setOTPY}
                        otObMarks={otObMarks}
                        setOTobMarks={setOTobMarks}
                        otTMarks={otTMarks}
                        setOTTMarks={setOTTMarks}
                        degree ={degree}
                        setDegree={setDegree}
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
                        sscGroup={sscGroup}
                        sscRollNo={sscRollNo}
                        sscBoard={sscBoard}
                        sscPY={sscPY}
                        sscObMarks={sscObMarks}
                        sscTMarks={sscTMarks}
                        hsscGroup={hsscGroup}
                        hsscRollNo={hsscRollNo}
                        hsscBoard={hsscBoard}
                        hsscPY={hsscPY}
                        hsscObMarks={hsscObMarks}
                        hsscTMarks={hsscTMarks}
                        grGroup={grGroup}
                        grRollNo={grRollNo}
                        grBoard={grBoard}
                        grPY={grPY}
                        grObMarks={grObMarks}
                        grTMarks={grTMarks}
                        otGroup={otGroup}
                        otRollNo={otRollNo}
                        otBoard={otBoard}
                        otPY={otPY}
                        otObMarks={otObMarks}
                        otTMarks={otTMarks}
                        stfileData = {stfileData}
                        degree ={degree}
                    />
                </div>
            </section>
        </div>
    );
}

export default StudentForm;