
import { useState } from "react"
import "./index.css"

const HomeForm = () => {
    // السيشن الاول

    const [UserName, SETUserName] = useState("")
    const [UserEmail, SETUserEmail] = useState("")
    const [UserPhone, SETUserPhone] = useState("")
    const [errors, setErrors] = useState({});

    // التعديل تبع السيشن التاني 


    const [data, setData] = useState({
        isEmployee: false,
        gender: "",
        country: ""

    })


    const validate = () => {
        const newErrors = {};

        if (!UserName.trim()) {
            newErrors.UserName = "Name is required"
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!UserEmail.trim()) {
            newErrors.UserEmail = "Email address is required";
        } else if (!emailRegex.test(UserEmail)) {
            newErrors.UserEmail = "Please enter a valid email address";
        }

        const phoneRegex = /^[0-9+\s()-]{7,15}$/;
        if (!UserPhone.trim()) {
            newErrors.UserPhone = "Phone number is required";
        } else if (!phoneRegex.test(UserPhone)) {
            newErrors.UserPhone = "Please enter a valid phone number";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const handleSubmit = (e) => {
        e.preventDefault()
        if (validate()) {

            const user = {
                name: UserName,
                email: UserEmail,
                phone: UserPhone,
                ...data

            };
            console.log(user);
            setErrors({})
        }
    }



    return (
        <main>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <div className="form-header">
                        <h2>Personal info</h2>
                        <p>
                            Please provide your name, email address, and phone number.
                        </p>
                    </div>

                    <div className="inputs">

                        <div className="name">
                            <label>Name</label>
                            <input
                                value={UserName}
                                type="text"
                                onChange={(e) => {
                                    SETUserName(e.target.value)

                                }}
                                placeholder="e.g. Stephen King" />
                            {errors.UserName && <span className="error-message" >{errors.UserName}</span>}
                        </div>

                        <div className="email">
                            <label>Email Address</label>
                            <input
                                value={UserEmail}
                                type="email"
                                onChange={(e) => {
                                    SETUserEmail(e.target.value)

                                }}
                                placeholder="e.g. stephenking@lorem.com" />
                            {errors.UserEmail && <span className="error-message" >{errors.UserEmail}</span>}

                        </div>
                        <div className="phone">
                            <label>Phone Number</label>
                            <input
                                value={UserPhone}
                                type="tel"
                                onChange={(e) => {
                                    SETUserPhone(e.target.value)

                                }}
                                placeholder="e.g. +1 234 567 890" />
                            {errors.UserPhone && <span className="error-message" >{errors.UserPhone}</span>}

                        </div>

                    </div>

                    <div className="flex gap-4 ">
                        <input
                            type="checkbox"
                            onChange={() => {
                                setData((prev) => ({ ...prev, isEmployee: !data.isEmployee }))
                                
                            }}
                            className="w-5 h- accent-[#02295a] cursor-pointer"
                        />
                        <label>Egyption</label>
                    </div>
                    <div className="flex gap-5">

                        <div className="flex gap-4 ">
                            <input
                                name="gender"
                                checked={data.gender == "male"}
                                onChange={() => {
                                    setData((prev) => ({ ...prev, gender: "male" }))
                                }}
                                type="radio" className="w-5 h- accent-[#02295a] cursor-pointer" />
                            <label>male</label>
                        </div>

                        <div className="flex gap-4 ">
                            <input
                                name="gender"
                                checked={data.gender == "female"}
                                onChange={() => {
                                    setData((prev) => ({ ...prev, gender: "female" }))
                                }}
                                type="radio" className="w-5 h- accent-[#02295a] cursor-pointer"
                            />
                            <label>female</label>
                        </div>

                        <select name="country" onChange={() => {
                            setData((prev) => ({ ...prev, country: e.target.value }))
                        }}>
                            <option id="" value="Egypt">Egypt</option>
                            <option id="" value="American">American</option>
                        </select>

                    </div>




                    <button type="submit">Next Step</button>
                </div>
            </form>
        </main>
    )


}

export default HomeForm
