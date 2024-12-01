import axiosInstance from '@/axiosInstance'

interface FrequentItemListData {
  item_list: string
  cnt: number
}

export interface FrequentItemList {
  itemList: string[]
  count: number
}

export const getFrequentItemList = async (): Promise<FrequentItemList[]> => {
  try {
    const response = await axiosInstance.get<FrequentItemListData[]>(
      '/ads_top10_frequent_item_list',
    )
    return response.data.map((item) => ({
      itemList: item.item_list.split(','),
      count: item.cnt,
    }))
  } catch (error) {
    console.error('Error fetching frequent item list data:', error)
    throw error
  }
}
