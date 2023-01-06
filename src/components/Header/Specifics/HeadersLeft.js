import {
    AiOutlineGithub,
} from "react-icons/ai";

const HeadersLeft = () => {
  const left = { AiOutlineGithub };

  return (
    <div className="left">
      {Object.keys(left).map((key) => (
        <div id={key} key={key} className={`left leftItem left_${key}`}>
          <button
            id={key}
            key={key}
            className={`leftButton left_${key} btn_icon btn active`}
          >
            {left[key]()}
          </button>
        </div>
      ))}
    </div>
  );
};
export default HeadersLeft;
