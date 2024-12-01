import axiosInstance from '@/axiosInstance'

interface PopularItemData {
  item_id: number
  behavior_type: number
  popularity: number
}

export interface PopularItem {
  id: number
  behaviorType: number
  itemId: number
  popularity: number
}

export const getTop20PopularItemsByBehavior = async (): Promise<PopularItem[]> => {
  try {
    const response = await axiosInstance.get<PopularItemData[]>('/top20_popular_items_by_behavior')
    return response.data.map((item) => ({
      id: item.item_id,
      behaviorType: item.behavior_type,
      itemId: item.item_id,
      popularity: item.popularity,
    }))
  } catch (error) {
    console.error('Error fetching top 20 popular items by behavior:', error)
    throw error
  }
}
