import React from 'react';

function Button(prop){
  return(
    <div>
      <button className=" rounded-md p-2 font-semibold hover:bg-indigo-500">{prop.children}</button>
    </div>
  );
}
export default Button;