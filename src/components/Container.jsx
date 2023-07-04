import React from 'react'

const Container = ({children}) => {
  return (
    <div className='container mx-auto max-sm:px-6'>
        {children}
    </div>
  )
}

export default Container