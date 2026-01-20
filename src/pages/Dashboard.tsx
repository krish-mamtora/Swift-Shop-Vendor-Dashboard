import { useState } from 'react'
import '../App.css'
import { useForm } from 'react-hook-form'

function Dashboard() {
  const {register  , handleSubmit , formState : {error}} = useForm();

  const onSubmit = (data) =>{

    console.log(data);
  }

  const addItem = () =>{
    
  }

  return (
    <>
    
    <div>
     
      <div >
        <h4>Dashboard</h4>
        <div>
           <h5>Items</h5>
        </div>
        <div>
          <h5>Form</h5>
          <div style={{border:"1px solid black"}}>
            <form  onSubmit={handleSubmit(onSubmit)}>
                <h6>Product Name : </h6>
                <input {...register("ProductName" , {required : true})} />
                <h6>Category : </h6>
                <input {...register("Category" , {required : true})} />
                <h6>Price : </h6>
                <input {...register("Price" , {required : true})} />
              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div> 
    </>
  )
}

export default Dashboard
