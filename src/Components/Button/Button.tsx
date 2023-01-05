import { IButton } from "../../Interfaces";
import Spinner from "../Spinner";

const Button = ({ buttonText, classNames, onClickFn, loading }: IButton) => {
  return (
    <div onClick={onClickFn} className={`btn ${classNames}`}>
      {loading ? <Spinner /> : buttonText}
    </div>
  );
};

export default Button;
