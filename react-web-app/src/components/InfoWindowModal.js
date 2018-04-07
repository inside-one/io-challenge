import React from 'react'

const InfoWindowModal = (props) =>{
  return(
    <div style={{padding: '5pt', width: '250pt', overflow: 'hidden'}}>
        <div style={{height: '25pt', alignItems: 'center', display: 'flex'}}>
            <div style={{fontFamily: 'Lato-Heavy', fontSize: '16px'}}>{props.activeTicket.title}</div>
        </div>
        <div style={{borderBottom: '1px solid', borderBottomColor: 'rgb(0,181,204)', width: '30pt'}}></div>
      
            <div style={{width: '307pt', height: '20pt', alignItems: 'center', display: 'flex', borderBottom: '2px solid', borderBottomColor: 'var(--light)'}}>
                <div style={{fontFamily: 'Lato-Medium', fontSize: '13px'}}>{props.activeTicket.createdOn}</div>
            </div>
        <div style={{minHeight: '54pt', alignItems: 'center', display: 'flex'}}>
            <div style={{fontFamily: 'Lato-Medium', fontSize: '15px', lineHeight: '22.5pt'}}>{props.activeTicket.description}</div>
        </div>
    </div>
  )
}

export default InfoWindowModal