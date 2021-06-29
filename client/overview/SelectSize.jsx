import React from 'react';

function SelectSize(props) {

  // receives:
  // inventory={inventory}
  // saveSize={saveOrderSize}

  const saveSize = (event => {
    let size = event.currentTarget.value === 'Select Size' ? null : event.currentTarget.value;
    props.saveSize(size);
  });

  const renderSizeOptions = (() => {
    const sizeOptions = Object.keys(props.inventory).map(size => {
      return (
        <option key={size} value={size}>{size}</option>
      );
    });
    return (
      <React.Fragment>
        <select name="size" className="o-size-list" onChange={saveSize}>
          <option value='Select Size'>Select Size</option>
          {sizeOptions}
        </select>
      </React.Fragment>
    )
  });

  if (!props) {
    return null;  // TODO: need to handle OUT OF STOCK here or below
  } else {
    return renderSizeOptions();
  }

}

export default SelectSize;