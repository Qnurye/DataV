import axiosInstance from '@/axiosInstance'

interface ProductAnalysisData {
  browse_cnt: number
  like_cnt: number
  add_cart_cnt: number
  purchase_cnt: number
}

export interface ProductAnalysis {
  browseCount: number
  likeCount: number
  addCartCount: number
  purchaseCount: number
}

export const getProductAnalysis = async (): Promise<ProductAnalysis> => {
  try {
    const response = await axiosInstance.get<ProductAnalysisData>('/ads_product_analysis')
    const data = response.data
    return {
      browseCount: data.browse_cnt,
      likeCount: data.like_cnt,
      addCartCount: data.add_cart_cnt,
      purchaseCount: data.purchase_cnt,
    }
  } catch (error) {
    console.error('Error fetching product analysis data:', error)
    throw error
  }
}
