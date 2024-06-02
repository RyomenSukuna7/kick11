import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import ErrorMessage from "./errorMessage";
export default async function Checking (){
    const {getUser}=getKindeServerSession();
    const user=await getUser();
    return(
        <>
           {
            (!user)?<ErrorMessage/>:<h1>{user.given_name}</h1>

            
           }
        </>
    )
}