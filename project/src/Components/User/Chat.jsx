import React from 'react'
import Dash from './Dash'

function Chat() {
    return (
        <div>
            <div className='container-fluid ' style={{ height: "100vh" }}>
                <div className='row h-100'>
                    <div className='col-md-2 bg-primary h-100 '>
                        <Dash />
                    </div>
                    <div className='col-md-10'>
                        <h5 className='my-2'>Administrator</h5>
                        <p className='text-success'>Online</p>
                        <hr></hr>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Chat