import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'

enum FORMAT {
  CN = 'YYYY-MM-DD',
}

export const formatDate = (date?: Dayjs, format: string = FORMAT.CN) => {
  return dayjs(date).format(format)
}
