import React from 'react';

class Component1 extends React.Component {
   constructor() {
      super();
      this.state = {
       list:[
            {
                "name":"mahbobe",
                "id":1
            },
            {
                "name":"faeze",
                "id":2
            },
            {
               "name":"zohre",
               "id":3
           }
        ]

      };
   }

  
   onItemDeleted = (key) => this.setState(prevstate =>{
      return{
         places:prevstate.places.filter(place =>{
            return place.key !== key;
         })
      }
   })
   render() {
      return (
         <div>
          {this.state.list.map((a,i)=> <Component4 key= {i} list= {a}/>)}  
         </div>
      );
   }
}
class Component2 extends React.Component {
   render() {
      return (
         <div>
             <Component3/>
         </div>
      );
   }
}

class Component3 extends React.Component {
   render() {
      return (
         <div>   
             <Component4/>
         </div>
      );
   }
}
class Component4 extends React.Component {
    render() {
       return (
          <div>
             {this.props.list.name}
             {this.props.list.id}
             <br/>
             <button title='delete'> 
             
                </button>
          </div>
       );
    }
 }
 export default Component1;
