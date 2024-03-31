import React from 'react'
import Style from './Forms.module.css'

function Forms({children}) {
  return (

    <div className={Style.forms}>{children}</div>

  )
}

export default Forms