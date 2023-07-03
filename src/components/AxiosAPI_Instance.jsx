import axios from 'axios'

 const instance = axios.create({
    baseURL:"http://localhost:3000/",
    timeout:1000,
})

export const GetInstanceAxiosAPI  = async (endUrl)=>{
    const response = await instance.get(endUrl)
    return response;
}

export const GetInstanceAxiosAPI_ID = async (endUrl,id) =>{
    const response = await instance.get(`${endUrl}/${id}`)
    return response;
}

export const PostInstanceAxiosAPI = async (endUrl,data)=>{
    const response = await instance.post(endUrl,data)
    return response;
}

export const PutInstanceAxiosAPI = async (endUrl,id,data)=>{
    const response = await instance.put(`${endUrl}/${id}`,data)
    return response; 
}

export const PatchInstanceAxiosAPI = async (endUrl,id,data)=>{
    const response = await instance.patch(`${endUrl}/${id}`,data)
    return response;
}

export const DeleteInstanceAxiosAPI = async (endUrl,id)=>{
    const response = await instance.delete(`${endUrl}/${id}`)
    return response;
}