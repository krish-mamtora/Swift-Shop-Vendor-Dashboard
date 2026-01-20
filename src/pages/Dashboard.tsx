import { useEffect, useState } from 'react'
import '../App.css'
import { useForm } from 'react-hook-form'

function Dashboard() {

  const {register  , handleSubmit , formState : {error}} = useForm();
  const [items , setItems] = useState([]);
  
  useEffect(()=>{
    const dispItems = JSON.parse(localStorage.getItem('items'))||[];
    setItems(dispItems);
  },[]);

  const onSubmit = (data) =>{
    // console.log(typeof(data));
    addItem(data);
    // listproduct();
  }

  const addItem = (data) =>{

    let items = JSON.parse(localStorage.getItem('items'))||[]; 
    // console.log('here : ', data.ProductName , typeof(data.ProductName));

    // items = items + ',' +(data.ProductName);
    items.push({
      ProductName: data.ProductName,
      Price : data.Price,
      Category : data.Category,
    })
    localStorage.setItem('items' , JSON.stringify(items));
    // console.log(localStorage.getItem('items'));
    // localStorage.setItem('items' , items);
    // localStorage.setItem(data.ProductName , [data.Price , data.Category]);
   
  }

    // const listproduct =()=> {
    //     const allItems = localStorage.getItem('items');
    //     console.log(allItems);
        // if(allitems){
        //     const words = allitems.split(',');
            
        //     words.forEach((word,index) => {
        //         console.log(`${word} is at ${index}`);
        //         store.push(word);
        //     });
        // }    
        
    // }
  return (
    <>
    
    <div>
     
      <div >
        <h4>Dashboard</h4>
        <div>
           <h5>Items</h5>
           <div>
            {/* {items.map((item, index))} */}
            {items}
           </div>
        </div>
        <div>
          <h5>Form</h5>
          <div style={{border:"1px solid black"}}>
            <form  onSubmit={handleSubmit(onSubmit)}>
                <span>Product Name : </span>
                <input {...register("ProductName" , {required : true})} placeholder='Product Name' /> <br />
                <span>Category : </span>
                <input {...register("Category" , {required : true})} placeholder='Category' /> <br />
                <span>Price : </span>
                <input {...register("Price" , {required : true})} placeholder='Price'/> <br />
             <button type='submit'>Add Item</button>
            </form>
          </div>
        </div>
      </div>
    </div> 
    </>
  )
}

export default Dashboard
