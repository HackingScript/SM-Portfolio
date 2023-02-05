import React from 'react'

function Alert(props) {
    return (
        <div style={{height: 'auto'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" 
        style={{position:'fixed', width:'100%', display: 'inline-flex',justifyContent:'center'}}
        >
           <strong>{props.alert.msg} </strong>
        </div>}
        </div>
    )
}

export default Alert
