import React, { useState } from 'react';
export default function SortFilter({setSelectedCategory, setSelectedSort, setSelectedPrice}) {

  // Define styles for different parts of the sidebar
  const stylediv = {
    textAlign: 'left',
    padding: '40px',
    marginTop: '-50px',
    fontSize: '15px'
  };
  const top = {
    marginTop: '20px',
    textAlign: 'left',
    padding: '40px',
    fontSize: '15px',
  };
  const stylediv2 = {
    backgroundColor: '#F6F3F9',
    height: '70px',
    textAlign: 'center',
    borderRadius: '20px 20px 0px 0px',
    padding: '20px',
  };
  const checkBox= {
    marginRight: '20px',
     width: '15px',
  };
  const textType = {
    fontSize: '15px',
    fontWeight: 'bolder',
  };

 


  // Define state and handlers for product type checkboxes
  const [categories, setCategories] = useState([
    { name: 'ExteriorInterior', checked: false },
    { name: 'Parts', checked: false },
    { name: 'Wheel', checked: false },
    { name: 'Electronics', checked: false },
  ]);
  const handleCheckbox = (index) => {
    const newCategories = [...categories];
    newCategories[index].checked = !newCategories[index].checked;
    setCategories(newCategories);
  };

  
  function onChangeValue(event) {
  
    console.log("inside onchangevalue", event.target.value);
    setSelectedCategory(event.target.value)
  }


  function onChangeValueSort(event) {
    console.log("inside onchangevalueSort", event.target.value);
    setSelectedSort(event.target.value)
  }

 
       
   return (
     <div style={{
      marginTop:"120px",
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
        height: "fit-content",
        width:'auto',
        position: "fixed",
        zIndex: "1",
        top: "0",
        overflowX: "hidden",
        paddingBottom:"150px"
     }}>
       <div style={stylediv2}>
         
         <h3 style={textType}>Sort By</h3>
         <div onChange={onChangeValueSort}>
         <div><input type="radio" value="asc" name="sort"/> Low to High</div>
         <div><input type="radio" value="desc" name="sort"/> High to Low</div>
         </div>
        </div>
        <br />
        <div style={stylediv2}>
        <h3 style={textType}>Filter By</h3>
        </div>
    <div style={top} onChange={onChangeValue}>
      <h1 style={textType}>Product Type</h1>
      {categories.map((category, index) => (
        <div key={index}>
          <input style={checkBox} type="radio" name="button1" value={category.name} checked={category.checked} onChange={() => handleCheckbox(index)} />
          {category.name}
        </div>
      ))}
    </div>

<hr />
    

     </div>
   )
 }
 