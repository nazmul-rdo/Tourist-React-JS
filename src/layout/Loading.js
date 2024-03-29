import React from 'react'

const Loading = () => {
  return (
    <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary w-16 h-16" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
  )
}

export default Loading