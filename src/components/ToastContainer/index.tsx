import { ApiErrorContext } from 'components/Context/ApiErrorContext'
import Toast from 'components/Toast'
import { useContext, useEffect, useState } from 'react'

const ToastContainer = () => {
  const [open, setOpen] = useState(false)
  const errorContext = useContext(ApiErrorContext)

  useEffect(() => {
    if (!errorContext.error) return
    setOpen(true)
  }, [errorContext.error])

  if (!errorContext.error) return

  return (
    open && (
      <Toast message={errorContext.error.message} onAnimationEnd={() => setOpen(false)} />
    )
  )
}

export default ToastContainer
