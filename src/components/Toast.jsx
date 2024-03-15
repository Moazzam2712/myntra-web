import React from 'react'

const Toast = () => {
  return (
    <div aria-live="polite" aria-atomic="true" class="d-flex justify-content-center align-items-center w-100">
    
      <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
          <strong class="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
          Order Placed Successfully!
        </div>
      </div>
    </div>  )
}

export default Toast