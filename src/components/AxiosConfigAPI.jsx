import axios from "axios";

export const GetAxiosConfigAPI = async (url)=>{
     const response = axios({
        method:'get',
        url:url,
     })
     return response;
}

export const GetAxiosConfigAPI_ID = async (url,id)=>{
    const response = axios({
        method:"get",
        url:`${url}/${id}`
    })
    return response;
}

export const PostAxiosConfigAPI = async (url,data)=>{
    const response = await axios({
        method:"post",
        url: url,
        data:data
    })
    return response;
}

export const PutAxiosConfigAPI = async (url,id,data)=>{
    const response = await axios({
        method:"put",
        url:`${url}/${id}`,
        data:data
    })
    return response;
}

export const PatchAxiosConfigAPI = async (url,id,data) =>{
    const response = await axios({
        method:"patch",
        url : `${url}/${id}`,
        data:data
    })
    return response;
}

export const DeleteAxiosConfigAPI = async (url,id)=>{
    const response = await axios({
        method:"delete",
        url:`${url}/${id}`
    })
    return response;
}