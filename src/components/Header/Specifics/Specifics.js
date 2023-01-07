import { ThemeEditor } from "../../Theme/Theme"
import Language from "../../Language/Language";

const Specifics = () => { 
    const right= { ThemeEditor, Language }
    
    return (
      <div className="right">
        {Object.keys(right).map((key) => (
          <div id={key} key={key} className={`right_${key}`}>
            {right[key]()}
          </div>
        ))}
      </div>
    );
}
export default Specifics