import React from 'react';

const Scroll = (props) => {
    return ( 
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '500px' , marginBottom : '4em'}}>
            {console.log(props)}
            {props.children}
        </div>
     );
}
 
export default Scroll;