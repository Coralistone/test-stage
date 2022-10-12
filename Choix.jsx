import React from "react";
function Choix({setChoix}){
return(
    <p class="text-uppercase">
        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
         <button type="button" class="btn btn-success">liker</button>
         <button type="button" class="btn btn-success">disliker</button>
        </div>
    </p>
)
}
export default Choix;