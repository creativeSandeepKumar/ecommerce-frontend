import React from 'react'

const Container = ({children}) => {
  return (
    <div className='max-w-7xl mx-auto px-4 py-3'>
        {children}
    </div>
  )
}

export default Container