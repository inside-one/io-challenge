import React from 'react'
import TimeAgo from 'javascript-time-ago'
import es from 'javascript-time-ago/locale/es'

TimeAgo.locale(es)

const getTimeAgo = (date) => new TimeAgo('es-AR').format(date);

const TicketsListItem = (props) => (
    <div>
        <div style={{cursor: 'pointer', borderBottom: '1px solid', borderBottomColor: 'var(--light)'}}>
            <div style={{paddingLeft: '40px', display: 'flex'}}>
                <div style={{flexDirection: 'row', alignItems: 'center', display: 'flex', height: '77px'}}>
                    <div style={{fontFamily: 'Lato-Medium', fontSize: '14px', color: 'var(--secondary)', width: '50px'}}>
                        {props.ticket.code}
                    </div>
                </div>
                <div style={{flexDirection: 'column', display: 'flex', justifyContent: 'space-between', paddingLeft: '12px', paddingTop: '15px', paddingBottom:'15.5px'}}>
                    <div style={{fontFamily: 'Lato-Heavy', fontSize: '15px', lineHeight: '22.5px'}}>
                        {props.ticket.title}
                    </div>
                    <div style={{fontFamily: 'Lato-Medium', fontSize: '15px', color: 'var(--secondary)', lineHeight: '18px'}}>
                        {getTimeAgo(props.ticket.createdOn)}
                    </div>
                </div>
            </div>
        </div>
        
    </div>
)

const TicketsList = (props) =>{
    return(
        
        props.tickets.status === 'TICKETS_LOADING' ?
                    <div>
                        Loading...
                    </div>
        : props.tickets.status === 'TICKETS_LOADED' ?
            <div style={{overflowY: 'scroll', height: 'calc(100vh - 126px)'}}> {
                props.tickets.all.tickets.map(
                    (ticket) => (    
                        <TicketsListItem key={ticket._id} ticket={ticket} />
                    )
                )
            }
            </div>
        : <div></div>            
    )
}

export default TicketsList