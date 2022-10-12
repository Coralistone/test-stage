import * as React from "react";
import {useForm} from "react-hook-form";
import {useNavigate } from "react-router-dom";

function TaskEdit(){
    let navigate = useNavigate();
    const{register, handleSubmit, formState: {errors}} = useForm();
   const onSubmit = async (data) => {
       console.log(data)
       const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
        };
         console.log(options);
       const fetchresult = await fetch("http://localhost:4000/taches", options);
       const resultdata = await fetchresult.json(); 
       navigate("/tasks")
   }

  return(
  <div className="container">

   <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group form-group-lg">
          <label htmlFor="title" className="sr-only"> title </label>
          <input id="title" {...register("title", {required: true})} type="text" className="form-control " placeholder=" Title"/>
          {errors.title && <span>This field is required</span>}
      </div>
      <div className="form-group form-group-lg">
          <label htmlFor="description" className="sr-only"> description </label>
          <textarea {...register("description", {required: true, maxLength:20})} className="form-control" id="description" rows="3"></textarea>
          {errors.description && <span>This field is required</span>}
          {errors?.description?.maxLength && <span> Max atteint </span> }
      </div>
      <div className="form-group form-group-lg">
          <label htmlFor="number" className="sr-only"> statut </label>
             <select className="form-control" name="departement" defaultValue="2" {...register("statut")} type="number" id="number" placeholder=" Statut">
              <option> choisir un Statut</option>
              <option value="1">1</option>
              <option value="2">2</option>
             <option value="3">3</option>
             <option value="4">4</option>
              
           </select>
          
     </div>



      <div className="form-group form-group-lg">
          <label htmlFor="ti" className="sr-only"> ti </label>
          <input id="ti" {...register("ti", {required: true})} type="number" className="form-control "  placeholder=" TI"/>
          {errors.ti && <span>This field is required</span>}
      </div>
      <div className="form-group form-group-lg">
          <label htmlFor="tr" className="sr-only"> tr </label>
          <input id="tr"  {...register("tr", {required: true})} type="number" className="form-control "  placeholder=" TR"/>
          {errors.tr && <span>This field is required</span>}
      </div>

      <p className="text-uppercase">
          <button  type="submit" className="btn btn-success" >Continuer</button>
      </p>
       
    </form>
  </div>
        
    
  );
}
export default TaskEdit;