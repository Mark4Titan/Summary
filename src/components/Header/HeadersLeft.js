import { AiOutlineGithub, AiOutlineBulb } from "react-icons/ai";

const HeadersLeft = () => {
  const left = { AiOutlineGithub, AiOutlineBulb };

  return (
    <div className="left">
      {Object.keys(left).map((key) => (
        <div id={key} key={key} className={`leftItem left_${key}`}>
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
