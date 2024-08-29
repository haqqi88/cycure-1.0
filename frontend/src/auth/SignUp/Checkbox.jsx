import React from "react";

const GenderCheckbox = ({onCheckboxChange,selectedGender}) => {
    return (
        <div className="flex">
            <div className="form-control">
                <label className={`cursor-pointer gap-2 ml-1 label ${selectedGender === "male" ? "selected" : ""} `}>
                    <span className="label-text poppins-regular text-gray-300">Male</span>
                    <input type="checkbox"  className="checkbox-sm" 
                    checked={selectedGender === "male"}
                    onChange={() => onCheckboxChange("male")}
                    />
                </label>
            </div>
            <div className="form-control">
                <label className={`cursor-pointer gap-2 label ml-4 ${selectedGender === "female" ? "selected" : ""} `}>
                    <span className="label-text poppins-regular text-gray-300">Female</span>
                    <input type="checkbox" className="checkbox-sm" 
                    checked={selectedGender === "female"}
                    onChange={() => onCheckboxChange("female")}
                    />
                </label>
            </div>
        </div>
    )
}

export default  GenderCheckbox;