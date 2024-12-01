import axiosInstance from '@/axiosInstance'

interface DayPurchaseData {
  dt: string
  purchase_cnt: number
}

export interface DayPurchase {
  date: string
  purchaseCount: number
}

export const getDayPurchase = async (): Promise<DayPurchase[]> => {
  try {
    const response = await axiosInstance.get<DayPurchaseData[]>('/ads_day_purchase')
    return response.data.map((item) => ({
      date: item.dt,
      purchaseCount: item.purchase_cnt,
    }))
  } catch (error) {
    console.error('Error fetching daily purchase data:', error)
    throw error
  }
}
