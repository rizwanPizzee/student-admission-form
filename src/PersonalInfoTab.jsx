import React, {useState, useEffect} from 'react';

function PersonalInfo({
    stdName,
    setStdName,
    stdFName,
    setStdFName,
    stdCNIC,
    setStdCNIC,
    gender,
    setGender,
    dob,
    setDob,
    province,
    setProvince,
    domicile,
    setDomicile,
    city,
    setCity,
    phone,
    setPhone,
    poAddress,
    setPoAddress,
    prAddress,
    setPrAddress,
    email,
    setEmail,
}){
    
    const [eError, setEError] = useState('');

    function handleStdName(event){
        setStdName(event.target.value);
        document.querySelector('.std-name-tag').style.color = 'black';
    }

    function handleStdFName(event){
        setStdFName(event.target.value);
        document.querySelector('.f-name-tag').style.color = 'black';
    }

    function handleCNIC(event){
        let inputValue = event.target.value.replace(/\D/g, ''); 
    
        if (inputValue.length > 5) {
            inputValue = inputValue.slice(0, 5) + '-' + inputValue.slice(5);
        }
        if (inputValue.length > 13) {
            inputValue = inputValue.slice(0, 13) + '-' + inputValue.slice(13);
        }
        if (inputValue.length > 14) {
            inputValue = inputValue.slice(0, 15);
            document.querySelector('.warning-stdCNIC').style.display = 'none'; 
            document.querySelector('.std-cnic-tag').style.color = 'black';
        }
        
        setStdCNIC(inputValue);
    }

    function handleGender(event){
        setGender(event.target.value);
        document.querySelector('.gender-tag').style.color = 'black';
    }

    function handleDob(event){
        const inputDOB = event.target.value;
        const formatedDOB = dayjs(event.target.value).format('DD-MM-YYYY');
        setDob(formatedDOB);
        document.querySelector('.dob-input').value = inputDOB;
        document.querySelector('.dob-tag').style.color = 'black';
    }

    function handleProvince(event){
        setProvince(event.target.value);
        document.querySelector('.prov-tag').style.color = 'black';
    }

    function handleDomicile(event){
        setDomicile(event.target.value);
        document.querySelector('.domic-tag').style.color = 'black';
    }

    function handleCity(event){
        setCity(event.target.value);
        document.querySelector('.city-tag').style.color = 'black';
    }

    function handlePhone(event){
        let inputValue = event.target.value.replace(/\D/g, ''); 
        if(inputValue.length > 0 && inputValue[0] !== '0' ){
            document.querySelector('.warning-phone-03').style.display = 'inline';
            inputValue = inputValue.slice(0, 1);
        }
        if(inputValue.length > 1 && inputValue[1] !== '3'){
            document.querySelector('.warning-phone-03').style.display = 'inline';
            inputValue = inputValue.slice(0, 2);
        }
        if(inputValue[1] === '3'){
            document.querySelector('.warning-phone-03').style.display = 'none';
        }
        if (inputValue.length > 4) {
            inputValue = inputValue.slice(0, 4) + '-' + inputValue.slice(4);
        }
        if (inputValue.length > 11) {
            inputValue = inputValue.slice(0, 12);
            document.querySelector('.phone-tag').style.color = 'black';
            document.querySelector('.warning-phone').style.display = 'none'; 
        }

        setPhone(inputValue);
        
    }

    function handlePoAddress(event){
        setPoAddress(event.target.value);
        document.querySelector('.po-ad-tag').style.color = 'black';
    }

    function handlePrAddress(event){
        setPrAddress(event.target.value);
        document.querySelector('.pr-ad-tag').style.color = 'black';
    }

    function handleEmail(event){
        setEmail(event.target.value);
        document.querySelector('.email-tag').style.color = 'black';
        setEError('');
    }

    function halfFilledWarning(){
        
       if(stdCNIC.length < 15){
            window.scrollTo({
                top: 60, 
                behavior: "smooth",
            });
            document.querySelector('.warning-stdCNIC').style.display = 'inline';
        }
        else if(phone[0] !== '0' || phone[1] !== '3'){
            window.scrollTo({
                top: document.body.scrollHeight, 
                behavior: "smooth",
            });
            document.querySelector('.warning-phone-03').style.display = 'inline';
        }
        else if(phone.length < 12){
            window.scrollTo({
                top: document.body.scrollHeight, 
                behavior: "smooth",
            });
            document.querySelector('.warning-phone').style.display = 'inline';
        }
    }
    
    function previousPage(){
            document.querySelector('.ad-info-btn-title').style.opacity = 1;
            document.querySelector('.personal-info-btn-title').style.opacity = 0.6;
            document.querySelector('.outer-ad-info-container').style.display = 'flex';
            document.querySelector('.outer-personal-info-container').style.display = 'none';
    }
    function nextPage(){
        const errorsWarning = [];
        const emailWarning = [];
        if (stdName.trim() === "") {
            errorsWarning.push("Student Name");
            document.querySelector('.std-name-tag').style.color = 'red';
        };
        if (stdFName.trim() === "") {
            errorsWarning.push("Father's Name");
            document.querySelector('.f-name-tag').style.color = 'red';
        };
        if (stdCNIC.trim() === "") {
            errorsWarning.push("Student CNIC");
            document.querySelector('.std-cnic-tag').style.color = 'red';
        };
        if (gender.trim() === "") {
            errorsWarning.push("Gender");
            document.querySelector('.gender-tag').style.color = 'red';
        };
        if (dob.trim() === "") {
            errorsWarning.push("Date of birth");
            document.querySelector('.dob-tag').style.color = 'red';
        };
        if (province.trim() === "") {
            errorsWarning.push("Province");
            document.querySelector('.prov-tag').style.color = 'red';
        };
        if (domicile.trim() === "") {
            errorsWarning.push("Domicile");
            document.querySelector('.domic-tag').style.color = 'red';
        };
        if (city.trim() === "") {
            errorsWarning.push("Current City");
            document.querySelector('.city-tag').style.color = 'red';
        };
        if (phone.trim() === "") {
            errorsWarning.push("phone No.");
            document.querySelector('.phone-tag').style.color = 'red';
        };
        if (poAddress.trim() === "") {
            errorsWarning.push("Postal Address");
            document.querySelector('.po-ad-tag').style.color = 'red';
        };
        if (prAddress.trim() === "") {
            errorsWarning.push("Permanent Address");
            document.querySelector('.pr-ad-tag').style.color = 'red';
        };

        if(email.trim() !== ""){
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                setEError("Please enter a valid email address. like 'someone@someone.com'");
                emailWarning.push("Please enter a valid email address. like 'someone@someone.com'");
                document.querySelector('.email-tag').style.color = 'red';
            } else {
                setEError('');
            }
            
        }

        if (errorsWarning.length > 0) {
            document.querySelector('.pr-warning-container').style.display = 'flex';
            document.querySelector('.pr-warning-text').innerHTML = `Please fill out: <strong>${errorsWarning.join(", ")}</strong> info`;
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }else if (errorsWarning.length === 0 && emailWarning.length > 0) {
            document.querySelector('.pr-warning-container').style.display = 'flex';
            document.querySelector('.pr-warning-text').innerHTML = `<strong>${emailWarning}</strong>`;
            window.scrollTo({
                top: document.body.scrollHeight, 
                behavior: "smooth",
            });
        }else{
            if(phone.length < 12 || stdCNIC.length < 15 || ((phone[0] !== '0' || phone[1] !== '3'))){
                halfFilledWarning();
            }
            else{
                document.querySelector('.ed-info-btn-title').style.opacity = 1;
                document.querySelector('.personal-info-btn-title').style.opacity = 0.6;
                document.querySelector('.outer-personal-info-container').style.display = 'none';
                document.querySelector('.outer-ed-info-container').style.display = 'flex';
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            }   
        }  
    }

    function removeWarning(){
        document.querySelector('.pr-warning-container').style.display = 'none';
    }


    return(
        <div className='info-container'>
            <div className='info-container-header'>
                <div className='top-prev-arrow-div' onClick={previousPage}>
                    <span className='arrow-tag arrow-tag-top-back'>&#x2039;</span>
                    <span className='tooltip-top-back'>Back</span>
                </div>
                <h1>PERSONAL INFO</h1>
                <div className='top-next-arrow-div' onClick={nextPage}>
                    <span className='arrow-tag arrow-tag-top-next'>&#x203A;</span>
                    <span className='tooltip-top-next'>Next</span>
                </div>
            </div>
            <hr />
            <p className='info-tags std-name-tag'>Student Name <span className='star'>*</span></p>
            <input className='info-input-tags' type="text" value={stdName} 
                onKeyDown={(event) => {
                    if (!/[a-zA-Z\s]/.test(event.key)) {
                    event.preventDefault();
                    }
                }}
                placeholder='e.g. Muhammad Rizwan' onChange={handleStdName} />

            <p className='info-tags f-name-tag'>Father's name <span className='star'>*</span></p>
            <input className='info-input-tags' type="text" value={stdFName} 
                onKeyDown={(event) => {
                    if (!/[a-zA-Z\s]/.test(event.key)) {
                    event.preventDefault();
                    }
                }}
                placeholder='e.g. Muhammad Shoaib' onChange={handleStdFName} />

            <p className='info-tags std-cnic-tag'>Student CNIC <span className='star'>*</span> <span className='warning-stdCNIC'>(Student CNIC must be, <strong>13</strong> digits)</span></p>
            <input className='info-input-tags' type="text" value={stdCNIC} placeholder='e.g. 61101-1234569-7' onChange={handleCNIC}/>
            <p className='info-tags gender-tag'>Gender <span className='star'>*</span></p>
            <label className='radio-label'>
                <input type="radio" value="Male" checked={gender === "Male"} onChange={handleGender}/>
                Male
            </label>
            
            <label className='radio-label'>
                <input type="radio" value="Female" checked={gender === "Female"} onChange={handleGender}/>
                Female
            </label>
            
            <p className='info-tags dob-tag'>Date of Birth <span className='star'>*</span></p>
            <input className='info-input-tags dob-input' type="date" onChange={handleDob}/>
            <p className='info-tags prov-tag'>Province <span className='star'>*</span></p>
            <select value={province} className='dropdown-menu' onChange={handleProvince}>
                <option value="">Select Province</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Punjab">Punjab</option>
                <option value="KPK">KPK</option>
                <option value="Gilgit Baltistan">Gilgit Baltistan</option>
                <option value="Balochistan">Balochistan</option>
                <option value="Sindh">Sindh</option>
            </select>
            
            <p className='info-tags domic-tag'>Domicile <span className='star'>*</span></p>
            <input className='info-input-tags' type="text" value={domicile}
                onKeyDown={(event) => {
                    if (!/[a-zA-Z\s]/.test(event.key)) {
                    event.preventDefault();
                    }
                }}
            placeholder='e.g. Mansehra' onChange={handleDomicile}/>

            <p className='info-tags city-tag'>Current City <span className='star'>*</span></p>
            <input className='info-input-tags' type="text" value={city} 
                onKeyDown={(event) => {
                    if (!/[a-zA-Z\s]/.test(event.key)) {
                    event.preventDefault();
                    }
                }}
            placeholder='e.g. Islamabad' onChange={handleCity}/>
            <p className='info-tags po-ad-tag'>Postal Address <span className='star'>*</span></p>
            <textarea className='info-input-tags' type="text" value={poAddress} placeholder='e.g. House # 10, Street 9, Block A Karachi' onChange={handlePoAddress}/>
            <p className='info-tags pr-ad-tag'>Permanent Address <span className='star'>*</span></p>
            <textarea className='info-input-tags' type="text" value={prAddress} placeholder='e.g. House # 10, Street 9, Block A Karachi' onChange={handlePrAddress}/>
            <p className='info-tags phone-tag'>Phone No. <span className='star'>*</span> 
                <span className='warning-phone'>(Phone No. must have <strong>11</strong> digits)</span>
                <span className='warning-phone-03'>(Phone No. must start with <strong>03</strong>)</span>
            </p>
            <input className='info-input-tags' type="text" value={phone} placeholder='e.g. 03123456789' 
            onChange={handlePhone}/>
            
            <p className='info-tags email-tag'>Email</p>
            <input className='info-input-tags' type="email" value={email}
                placeholder='example@example.com' onChange={handleEmail}/>
            <div className='page-navigation-btns'>
                <div className='div-nav-prev'>
                    <button onClick={previousPage}><span className='arrow-tag'>&#x2039;</span> Previous</button>
                    <label className='tooltip-prev'>Go to Admission Info Page</label>
                </div>
                <div className='div-nav-next'>
                    <button onClick={nextPage}>Next <span className='arrow-tag'>&#x203A;</span></button>
                    <label className='tooltip-next'>Go to Educational Info Page</label>
                </div>  
            </div>
            <div className='pr-warning-container' onClick={removeWarning}>
                <div className='pr-inner-warning-container'
                    onClick={(event) => event.stopPropagation()}
                >
                    <p className='pr-warning-text'>warning</p>
                    <div className='cross' onClick={removeWarning}>X</div>
                    <button onClick={removeWarning}>Close</button>
                </div>
            </div>
        </div>
        
    );
}

export default PersonalInfo;