import commonAPI from "./commonAPI"
import SERVER_URL from "./server_url"

export const addContact=async(contact)=>{
    return await commonAPI("POST", `${SERVER_URL}/allContacts`, contact)
}

export const getContact = async()=>{
    return await commonAPI("GET", `${SERVER_URL}/allContacts`, "")
}