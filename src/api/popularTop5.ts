import axiosInstance from '@/axiosInstance'

interface PopularItemData {
  item_id: number
  browse_cnt: number
  like_cnt: number
  purchase_cnt: number
  popularity_score: number
}

export interface PopularItem {
  id: number
  browseCount: number
  likeCount: number
  purchaseCount: number
  popularityScore: number
}

export const getTop5PopularItems = async (): Promise<PopularItem[]> => {
  try {
    const response = await axiosInstance.get<PopularItemData[]>('/ads_top5_popular_items')
    return response.data.map((item) => ({
      id: item.item_id,
      browseCount: item.browse_cnt,
      likeCount: item.like_cnt,
      purchaseCount: item.purchase_cnt,
      popularityScore: item.popularity_score
    }))
  } catch (error) {
    console.error('Error fetching top 5 popular items:', error)
    throw error
  }
}
