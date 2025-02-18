import './App.css';
import { React, useState } from 'react';
import Logo from "./assets/Logo.jpg";

export default function App() {
    const [fullName, setFullName] = useState("");
    const [fatherName, setFatherName] = useState("");
    const [motherName, setMotherName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [experience, setExperience] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [emergency, setEmergency] = useState("");
    const [photo, setPhoto] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            fullName,
            fatherName,
            motherName,
            email,
            contact,
            age,
            gender,
            experience,
            selectedOption,
            emergency,
            photo
        );
    }

    const handelReset = () => {
        setFullName("");
        setFatherName("");
        setMotherName("");
        setEmail("");
        setContact("");
        setAge("");
        setGender("");
        setExperience("");
        setSelectedOption("");
        setEmergency("");
        setPhoto("");
    }

    return (
        <div className="Application">
            <div className="heading-container">
                <img src={Logo} alt="Logo"></img>
                <h1>Imagine Dance Studio</h1>
            </div>
            <h3>Registration Application Form</h3>
            <form action="#" method="GET">
                <fieldset className="watermark">
                    <label htmlfor="fullname">Student Full Name: * </label>
                    <input type="text" name="fullname" id="regForm" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Student Full Name" required></input>
                    <label htmlfor="fatherName">Father Name: * </label>
                    <input type="text" name="fatherName" id="regForm" value={fatherName} onChange={(e) => setFatherName(e.target.value)} placeholder="Father Name" required></input>
                    <label htmlfor="motherName">Mother Name: * </label>
                    <input type="text" name="motherName" id="regForm" value={motherName} placeholder="Mother Name" onChange={(e) => setMotherName(e.target.value)} required></input>
                    <label htmlfor="email">Email: * </label>
                    <input type="email" name="email" id="regForm" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"></input>
                    <label htmlfor="contact">Contact Number: * </label>
                    <input type="number" name="contact" id="regForm" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Contact Number" required></input>
                    <label htmlfor="age">Age: * </label>
                    <input type="number" name="age" id="regForm" value={age} placeholder="Age" onChange={(e) => setAge(e.target.value)} required></input>
                    <label htmlfor="gender" onChange={(e) => setGender(e.target.value)} >Gender: * </label>
                    <input type="radio" name="male" id="regForm" value="male" checked={gender === "male"} onChange={(e) => setGender(e.target.value)} /> Male
                    <input type="radio" name="female" id="regForm" value="female" checked={gender === "female"} onChange={(e) => setGender(e.target.value)} />Female
                    <label>Experience: * </label>
                    <select name="experience" id="select" value={experience} onChange={(e) => setExperience(e.target.value)} required>
                        <optgroup label="Experience" selected={experience === ""}>
                            <option value="1">Beginner</option>
                            <option value="2">Intermediate</option>
                            <option value="3">Advance</option>
                        </optgroup>
                    </select>
                    <label>Branch</label>
                    <select name="select" id="select" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} required>
                        <optgroup label="Branch" selected={selectedOption === ""}>
                            <option value="1">Police Chowki Branch</option>
                            <option value="2">Gopala Branch</option>
                        </optgroup>
                    </select>
                    <label htmlFor="emenregencycontact" >Emergency Contact*</label>
                    <input type="number" name="emergencycontact" id="regForm" value={emergency} onChange={(e) => setEmergency(e.target.value)} placeholder="Emergency Contact" required />
                    <label htmlFor="file">Upload Photo*</label>
                    <input type="file" name="file" id="file" onChange={(e) => setPhoto(e.target.files[0])} placeholder="Upload Photo" required />
                    <h4>Terms & Conditions: </h4>
                    <p>1. Should wear proper shoes while entering the class.<br />
                        2. Wearing jeans inside the class is strictly prohibited.<br />
                        3. Carrying water bottle is compulsary.<br />
                        4. Maintain covid 19 protocol as per the guideliness. By submitting this form, you, the Parent or Guardian of the above student(s), agree to release "Imagine Dance Studio", including instructors and assistants from liability for any and all injuries which may occur while training, practicing, performing, or during any studio event or activity. You also agree that you are responsible for health and accident insurance and any medical costs incurred due to injury.
                    </p>
                    {/* I Agree Checkbox and Label */}
                    <div className="checkbox-container">
                        <input type="checkbox" name="Iagree" id="Iagree" required />
                        <label htmlFor="Iagree">I Agree.</label>
                    </div>

                    {/* Button Container */}
                    <div className="button-container">
                        <button type="reset" onClick={() => handelReset()}>Reset</button>
                        <button type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
}