import Data from "../data"
import { createContext } from "react"
// export const data=Data
interface Tag {
  price: number[],
  theme: string[],
  Age: string[]
}
export const DataContext = createContext(
  {
    data: Data, search: (val: string) => { },
    filterApply: (tags: Tag) => { },
    pageNumber: (itemOffset: number, itemsPerPage: number) => { },
    Page: 0
  }
)