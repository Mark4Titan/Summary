import {
  AiOutlineDesktop,
  AiOutlineTablet,
  AiOutlineMobile,
} from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  // getPreview,
  setPreviewActions,
} from "../../redux/services/PreviewSlice";

// const previewItem = { AiOutlineDesktop, AiOutlineTablet, AiOutlineMobile };

const Preview = () => {
  const dispatch = useDispatch();

  const previewClick = (e) => {
    dispatch(setPreviewActions(e.target.id));
  };

  return (
    <div className="preview">
      {/* Desktop */}
      <button
        id="Desktop"
        key="Desktop"
        placement="bottom"
        onClick={previewClick}
        ngbtooltip="Desktop_Preview"
        className="previewButton btn_icon btn active"
      >
        <div id="Tablet" key="Tablet" className="preview_Tablet previewIco ">
          <AiOutlineDesktop />
        </div>
      </button>
      {/* Tablet */}
      <button
        id="Tablet"
        key="Tablet"
        placement="bottom"
        onClick={previewClick}
        ngbtooltip="Tablet_Preview"
        className="previewButton btn_icon btn active"
      >
        <div id="Tablet" key="Tablet" className="preview_Tablet previewIco">
          <AiOutlineTablet />
        </div>
      </button>
      {/* Mobile */}
      <button
        id="Mobile"
        key="Mobile"
        placement="bottom"
        onClick={previewClick}
        ngbtooltip="Mobile_Preview"
        className="previewButton btn_icon btn active"
      >
        <div id="Mobile" key="Mobile" className="preview_Mobile previewIco ">
          <AiOutlineMobile />
        </div>
      </button>
      {/*  */}
    </div>
  );
};
export default Preview;
