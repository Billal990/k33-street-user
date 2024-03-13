import React from 'react'

export default function FormError({children}) {
  return (
    <div className={`text-red-500 text-[14px] ${!children && 'py-3'}`}>{children}</div>
  )
}
