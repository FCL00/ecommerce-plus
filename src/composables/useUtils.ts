import { ElNotification } from 'element-plus'
type ToastType = 'success' | 'warning' | 'error' | 'info'

export const useUtils = () => {
  const formatPrice = (amount: number): string => {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP',
      minimumFractionDigits: 2,
    }).format(amount)
  }

  /**
   * Display toast message
   * @param {string} title:string
   * @param {string} message:string
   * @param {ToastType} type: success | warning | error | info
   */
  const toastMessage = (title: string, message: string, type: ToastType) => {
    ElNotification({
      title: title,
      type: type,
      position: 'bottom-right',
      message: message,
      duration: 1000,
    })
  }

  return { formatPrice, toastMessage }
}
