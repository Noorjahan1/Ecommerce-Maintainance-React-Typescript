import Data from "../data"
import { createContext } from "react"
import {TagType} from "../types"
export const DataContext = createContext(
  {
    data: Data, search: (val: string) => { },
    filterApply: (tags: TagType) => { },
    pageNumber: (itemOffset: number, itemsPerPage: number) => { },
    Page: 0
  }
)