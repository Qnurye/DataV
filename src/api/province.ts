import axiosInstance from '../axiosInstance'

interface ProvinceData {
  province_id: number
  province: string
  orders_cnt: number
}

export interface Province {
  name: string
  value: number
}

export const getProvinces = async (): Promise<Province[]> => {
  try {
    const response = await axiosInstance.get<ProvinceData[]>('/province')
    return response.data.map((provinceData) => ({
      name: provinceData.province,
      value: provinceData.orders_cnt,
    }))
  } catch (error) {
    console.error('Error fetching provinces:', error)
    throw error
  }
}

