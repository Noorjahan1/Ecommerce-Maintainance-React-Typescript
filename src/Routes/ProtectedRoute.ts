import { useNavigate} from "react-router-dom";
import { useAuth } from "../Authentication/hook/useAuth";
import Authtype from "../Authentication/hook/AuthType"
export const ProtectedRoute=({children})=>{
    const navigate = useNavigate();
    const {user} = useAuth() as Authtype;
    if(!user){
        navigate("/")
    }
    return children
}