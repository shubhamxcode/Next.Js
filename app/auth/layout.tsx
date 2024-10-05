import React from 'react'

function layout({children}:{
    children:React.ReactNode
}) {
  return (
    <div>
        <div>
            <h1>hello this is auth layout</h1>
        </div>
        {children}
    </div>
  )
}

export default layout