import { Slider } from "@mui/material";
import React, { useState } from "react";
// import { CheckboxProps } from "./CheckboxDetails";

import CheckboxDetails from "./CheckboxDetails";
import PasswordStrength from "./PasswordStrength";
import Password from "./Password";

function Character() {
  const [value, setValue] = useState<number>(0);
  const [passwordLength, setPasswordLength] = useState<number>(0);
  const [checkedNumbers, setCheckedNumbers] = useState<number>(0);
  const [generatedPassword, setGeneratedPassword] = useState<string>("");
  const [formData, setFormData] = useState({
    includeUppercaseLetters: false,
    includeLowercaseLetters: false,
    includeNumbers: false,
    includeSymbols: false,
  });
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
    setPasswordLength(newValue as number);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });

    const numChecked = Object.values({ ...formData, [name]: checked }).filter(
      Boolean
    ).length;
    setCheckedNumbers(numChecked);
  };
  const generatePassword = () => {
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let characters = "";
    let password = "";
    if (formData.includeUppercaseLetters) characters += uppercaseLetters;
    if (formData.includeLowercaseLetters) characters += lowercaseLetters;
    if (formData.includeNumbers) characters += numbers;
    if (formData.includeSymbols) characters += symbols;
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    setGeneratedPassword(password);
  };
  const handleCopyToClipboard = () => {
    navigator.clipboard
      .writeText(generatedPassword)
      .then(() => {
        alert("Password copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy password: ", err);
      });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    generatePassword();
  };
  return (
    <>
      <Password onCopy={handleCopyToClipboard} password={generatedPassword} />
      <div className="character">
        <div className="char">
          <p className="char-length">character length</p>
          <p className="value">{value}</p>
        </div>
        <Slider
          value={value}
          onChange={handleChange}
          max={20}
          sx={{
            color: "#A4FFAF",
            "& .MuiSlider-thumb": {
              backgroundColor: "#FFF",
            },
            "& .MuiSlider-rail": {
              backgroundColor: "#18171F",
            },
            "& .MuiSlider-track": {
              backgroundColor: "#A4FFAF",
            },
          }}
        />
        <form onSubmit={handleSubmit}>
          <div>
            <div className="checkbox-container">
              <CheckboxDetails
                name="includeUppercaseLetters"
                checked={formData.includeUppercaseLetters}
                onChange={handleInputChange}
              />
              <p>Include Uppercase Letters</p>
            </div>
            <div className="checkbox-container">
              <CheckboxDetails
                name="includeLowercaseLetters"
                checked={formData.includeLowercaseLetters}
                onChange={handleInputChange}
              />
              <p>Include Lowercase Letters</p>
            </div>
            <div className="checkbox-container">
              <CheckboxDetails
                name="includeNumbers"
                checked={formData.includeNumbers}
                onChange={handleInputChange}
              />
              <p> Include Numbers</p>
            </div>
            <div className="checkbox-container">
              <CheckboxDetails
                name="includeSymbols"
                checked={formData.includeSymbols}
                onChange={handleInputChange}
              />
              <p>Include Symbols</p>
            </div>
          </div>
          {checkedNumbers < 2 ? (
            <PasswordStrength
              color="#F64A4A"
              strength="too weak"
              numColors={checkedNumbers}
            />
          ) : checkedNumbers === 2 ? (
            <PasswordStrength
              numColors={checkedNumbers}
              strength="weak"
              color="#FB7C58"
            />
          ) : checkedNumbers === 3 ? (
            <PasswordStrength
              numColors={checkedNumbers}
              strength="medium"
              color="#F8CD65"
            />
          ) : (
            <PasswordStrength
              numColors={checkedNumbers}
              strength="strong"
              color="#A4FFAF"
            />
          )}
          <button
            className="submit"
            disabled={checkedNumbers === 0}
            type="submit"
          >
            <span>generate</span>
            <span>
              <svg
                className="arrow"
                width="12"
                height="12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#24232C"
                  d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
                />
              </svg>
            </span>
          </button>
        </form>
      </div>
    </>
  );
}

export default Character;
