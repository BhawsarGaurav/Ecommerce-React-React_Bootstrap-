import React, { Component } from 'react'
import Product from './Product';
import axios from 'axios';
export class CreateProducts extends Component {
    constructor(props){
        super(props)
        
    }
         handler(event){
        const data=event.target.name;
        // const formData=[{id:data.id,pname:data.pname}];
        console.log(data)
        // this.setState({
        //    products:formData
        // })
        
        // try{
          
        //     await axios.post('${URL}',this.state.products)
        //     }
        //     catch(err){
        //         console.log(err);
        //     }
            event.preventDefault();
    }
    handleChange(event){
        const{name,value}=event.target;
        this.setState({Product:{
            id:value,
            pname:value
        }})
        console.log(this.state.products)
    }

    render() {
        return (
            <>
             <div className=" justify-content-center" style={{"backgroungColor": 'white'}}>
                 <form>
                    <div className="form-group" onSubmit={()=>this.handler}>
                        <label >Id</label>
                        <input type="text" className="form-control" onChange={this.handleChange} aria-describedby="emailHelp" placeholder="Enter Id" name="id"/>
                       
                    </div>
                    <div className="form-group">
                        <label >Name</label>
                        <input type="text" className="form-control" onChange={this.handleChange}  aria-describedby="emailHelp" placeholder="Enter Name" name="pname"/>
                       
                    </div>
                    {/* <div className="form-group">
                        <label >Id</label>
                        <input type="text" className="form-control"  aria-describedby="emailHelp" placeholder="Enter Id" name=""/>
                       
                    </div> */}
                    <button  className="btn btn-primary">Submit</button>
                </form>
            </div>  
            </>
        )
    }
}

export default CreateProducts
