import React, { Component } from 'react'

class Home extends Component {
    state = {  }
    render() { 
        return ( 
        <>
        <div className="py-5">
        <div className="jumbotron">
  <h1 className="display-4 text-center" style={{color:"red"}}>choose your order from the Menu !!</h1>
  <hr className="my-4"/>
  <p style={{color:"grey"}} className="">This is test website a simple restaurant with crud operation and call the Api</p>
  <p style={{color:"black",fontSize:"bold"}} className="text-center">You can choose from the menu below and click on the icon 
   then you will see the order on the shopping cart <br/>
   you can add the amount, reset or delete the order<br/>
   The Admin page you can add , edit and delete and it will be affected on the backend  
     "http://localhost:3000/products/"
  </p>
</div>
</div>
        </>
        );
    }
}
 
export default Home;