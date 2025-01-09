import { useState } from 'react';
import './OptionsVertical.css';

interface OptionsVerticalProps {
  options: string[];
  onClick: (option: string) => void;
}

const OptionsVertical = ({ options, onClick }: OptionsVerticalProps) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

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
