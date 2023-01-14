

const Specifics = ({ element }) => { 
    
    return (
      <div className="element">
        {Object.keys(element).map((key) => (
          <div id={key} key={key} className={`element_${key}`}>
            {element[key]()}
          </div>
        ))}
      </div>
    );
}
export default Specifics