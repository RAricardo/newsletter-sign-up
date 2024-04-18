import { TextInputProps } from "../../types/input-types";
import "./input.css";

const TextInput = ({
  placeholder,
  label,
  onChange,
  error,
  error_message,
}: TextInputProps) => {
  return (
    <div className={`text-input ${error && "error"}`}>
      <div className="labels">
        <label>{label}</label>
        {error && <label className="error-label">{error_message}</label>}
      </div>
      <input type="text" placeholder={placeholder} onChange={onChange} />
    </div>
  );
};

export default TextInput;
