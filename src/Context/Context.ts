// import Data from "../data"
import { createContext } from "react"
import { TagType} from "../types"
import Data from "../Graphql/Graphql"
import Types,{Datatype} from "./Type"
export const DataContext = createContext<Types|Datatype>({data:Data})