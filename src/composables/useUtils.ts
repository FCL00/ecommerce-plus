import { ElNotification } from 'element-plus'

type variant = 'info' | 'warning' | 'success' | 'error'

export const useUtils = () => {
  const formatPrice = (amount: number): string => {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP',
      minimumFractionDigits: 2,
    }).format(amount)
  }

  /**
   * Display a toast message on bottom right
   * @param {string} title:string
   * @param {string} message:string
   * @param {string } type: 'info' | 'warning' | 'success' | 'error'
   */
  const toastMessage = (title: string, message: string, type: variant) => {
    ElNotification({
      title: title,
      message: message,
      type: type,
      duration: 0o500,
      position: 'bottom-right',
    })
  }

  return { formatPrice, toastMessage }
}
