import { useState } from "react";
import "./App.css";
import TextInput from "./components/Input/Input";

function App() {
  return <SignUpCard />;
}

const SignUpCard = () => {
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  return (
    <div>
      {formSubmitted ? (
        <SuccessCard setFormSubmitted={setFormSubmitted} email={email} />
      ) : (
        <div className="signup-card">
          <SignUpForm
            setFormSubmitted={setFormSubmitted}
            email={email}
            setEmail={setEmail}
          />
          <div className="img"></div>
        </div>
      )}
    </div>
  );
};

interface SignUpFormProps {
  setFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

const SignUpForm: React.FC<SignUpFormProps> = ({
  setFormSubmitted,
  email,
  setEmail,
}) => {
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      setIsValidEmail(false);
      return;
    }
    setFormSubmitted(true); //placeholder can be replaced with an API call with a success answer
    setIsValidEmail(true);
  };

  return (
    <div className="signup-info">
      <h1>Stay updated!</h1>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>
      <ul>
        <li>Product discovery and building what matters</li>
        <li>Measuring to ensure updates are a success</li>
        <li>And much more!</li>
      </ul>
      <form onSubmit={handleOnSubmit}>
        <TextInput
          placeholder="email@company.com"
          label="Email address"
          onChange={(e) => setEmail(e.target.value)}
          error={!isValidEmail}
          error_message={"Valid email required"}
        />
        <button className="button" type="submit">
          Subscribe to monthly newsletter
        </button>
      </form>
    </div>
  );
};

interface SuccessCardProps {
  setFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  email: string;
}

const SuccessCard: React.FC<SuccessCardProps> = ({
  setFormSubmitted,
  email,
}) => {
  return (
    <div className="success-card">
      <div className="success-body">
        <img src="images/icon-success.svg" alt="success!" />
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to
          <span className="email"> {email}.</span> Please open it and click the
          button inside to confirm your subscription.
        </p>
        <form onSubmit={(e) => setFormSubmitted(false)}>
          <button className="button" type="submit">
            Dismiss message
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
