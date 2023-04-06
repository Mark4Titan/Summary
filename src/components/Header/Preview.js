
import {
  AiOutlineDesktop,
  AiOutlineTablet,
  AiOutlineMobile,
} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setPreviewActions } from "../../redux/services/PreviewSlice";
import Burger from "./Burger";
import useMedia from "use-media";
import { setBurgerActions } from "../../redux/services/BurgerSlice";
import { useEffect } from "react";

const Preview = ({ preview, theme }) => {
  const dispatch = useDispatch();

  const isWide = useMedia({ maxWidth: 1280 });

  const previewClick = (e) => {
    dispatch(setPreviewActions(e.target.id));
    e.target.id === "Desktop" && dispatch(setBurgerActions(false));
  };

  useEffect(() => {
    isWide && dispatch(setPreviewActions("Desktop"));
  }, [dispatch, isWide]);

  return (
    <>
      <div className="preview">
        {/* Desktop */}
        <button
          id="Desktop"
          key="Desktop"
          placement="bottom"
          onClick={previewClick}
          aria-label="Button Desktop"
          ngbtooltip="Desktop_Preview"
          className="previewButton btn_icon btn active"
        >
          <div key="Tablet" className="preview_Tablet previewIco ">
            <AiOutlineDesktop />
          </div>
        </button>
        {/* Tablet */}
        {preview === "Tablet" ? (
          <Burger preview={preview} theme={theme} />
        ) : (
          <button
            id="Tablet"
            key="Tablet"
            placement="bottom"
            onClick={previewClick}
            aria-label="Button Tablet"
            ngbtooltip="Tablet_Preview"
            className="previewButton btn_icon btn active"
          >
            <div key="Tablet" className="preview_Tablet previewIco">
              <AiOutlineTablet />
            </div>
          </button>
        )}
        {/* Mobile */}
        {preview === "Mobile" ? (
          <Burger preview={preview} theme={theme} />
        ) : (
          <button           
            id="Mobile"
            key="Mobile"
            placement="bottom"
            onClick={previewClick}
            aria-label="Button Mobile"
            ngbtooltip="Mobile_Preview"
            className="previewButton btn_icon btn active"
          >
            <div
             
              key="Mobile"
              className="preview_Mobile previewIco "
            >
              <AiOutlineMobile />
            </div>
          </button>
        )}
      </div>
      {/*  */}
      {isWide && <Burger theme={theme} />}
    </>
  );
};
export default Preview;
