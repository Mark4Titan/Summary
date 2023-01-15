
const Specifics = ({ elements }) => { 
    
    return (
      <div className="element">
        {Object.keys(elements).map((key) => (
          <div id={key} key={key} className={`element_${key}`}>
            {elements[key]()}
          </div>
        ))}
      </div>
    );
}
export default Specifics