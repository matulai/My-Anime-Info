import { useState, useEffect } from 'react';
import './OptionsVertical.css';

interface OptionsVerticalProps {
  options: string[];
  onClick: (option: string) => void;
  defaultOption: string;
}

const OptionsVertical = ({
  options,
  onClick,
  defaultOption,
}: OptionsVerticalProps) => {
  const [selectedOption, setSelectedOption] = useState<string>(
    defaultOption || ''
  );

  useEffect(() => {
    setSelectedOption(defaultOption);
  }, [defaultOption]);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    onClick(event.target.value);
  };

  return (
    <select
      className="options-vertical-container-options"
      value={selectedOption}
      onChange={handleChange}
    >
      {options.map((option, index) => (
        <option
          className="options-vertical-container-option"
          key={index}
          value={option}
        >
          {option}
        </option>
      ))}
    </select>
  );
};

export default OptionsVertical;
