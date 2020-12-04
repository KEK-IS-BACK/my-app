import React from "react";


const Input = ({input, meta, ...restProps}) => {
  return(
    <div>
      <input {...input} {...restProps}/>
      {meta.touched && meta.error && <span>Error</span>}
    </div>
  )
}

export default Input