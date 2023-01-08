import Preview from "./Preview";
import Specifics from "./Specifics";
import HeadersLeft from "./HeadersLeft";

export const Header = ({ preview }) => {
  return (
    <div key="headers" id="headers" className={`header header_${preview}`}>
      <div key="headCon" id="headCon" className={`headCon headCon_${preview}`}>
        <Preview />
        <HeadersLeft />
        <Specifics />
      </div>
    </div>
  );
};
export default Header;
