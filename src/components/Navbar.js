const Navbar = (props) => {
  // Here lies the code for a Magnificent Navbar
  // the nav contains a dropdown list for the number of images cards
  // and the title on the right "Image App" or something like that
  const handleSelect = (e) => {
    props.setImgNo(e.target.value);
  }
  let options= [];
  for(let i = 1; i<21; i++){
    options.push(i);
  }
  return (
    <nav className="navbar">
      <div className="navSelectImgNo">
        <label htmlFor="imgNo">Number of Images{props.selectedImgNo}</label>
        <select onChange={(e) => handleSelect(e)} name="imgNo" id="imgNo">
          {options.map((option, id) => (<option key={id} value={option}>{option}</option>))}
          
        </select>
        
      </div>
      <h2 className="navTitleText">Reactjs Image Application</h2>
    </nav>
  );
};

export default Navbar;
