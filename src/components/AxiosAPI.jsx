import axios from "axios";

export const GetAxioxAPI = async (url)=>{
    const respnse = await axios.get(url)
    return respnse.data;
}

export const GetAxiosAPI_ID = async (url,id)=>{
    const response = await axios.get(`${url}/${id}`)
    return response.data;
}

export const PostAxiosAPI = async (url,data) =>{
    const response = await axios.post(url,data)
    return response;
}

export const PutAxiosAPI = async (url,id,data)=>{
    const response = await axios.put(`${url}/${id}`,data)
    return response;
}

export const PatchAxiosAPI = async (url,id,data)=>{
    const response = await axios.patch(`${url}/${id}`,data)
    return response;
}

export const DeleteAxiosAPI = async (url,id)=>{
    const response = await axios.delete(`${url}/${id}`)
    return response;
}