import { useState } from 'react'
import '../App.css'
import { useForm } from 'react-hook-form'

function Dashboard() {

  const {register  , handleSubmit , formState : {error}} = useForm();

  const onSubmit = (data) =>{
    // console.log(typeof(data));
    addItem(data);
    listproduct();
  }

  const addItem = (data) =>{

    let items = (localStorage.getItem('items')); 
    // console.log('here : ', data.ProductName , typeof(data.ProductName));

    items = items + ',' +(data.ProductName);
  
    localStorage.setItem('items' , JSON.stringify(items));
    localStorage.setItem('items' , items);
    localStorage.setItem(data.ProductName , [data.Price , data.Category]);
   
  }

    const listproduct =()=> {
        let allitems = localStorage.getItem('items');
        if(allitems){
            const words = allitems.split(',');
            
            words.forEach((word,index) => {
                console.log(`${word} is at ${index}`);
                // <li key={index}>{word}</li>
            });
        }    
        
    }
  return (
    <>
    
    <div>
     
      <div >
        <h4>Dashboard</h4>
        <div>
           <h5>Items</h5>
           <div>
           {/* {listproduct} */}
           </div>
        </div>
        <div>
          <h5>Form</h5>
          <div style={{border:"1px solid black"}}>
            <form  onSubmit={handleSubmit(onSubmit)}>
                <span>Product Name : </span>
                <input {...register("ProductName" , {required : true})} /> <br />
                <span>Category : </span>
                <input {...register("Category" , {required : true})} /> <br />
                <span>Price : </span>
                <input {...register("Price" , {required : true})} /> <br />
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
