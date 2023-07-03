// get api 
export const GetAPI = async (url)=>{
        const response = await fetch(url)
        const result = await response.json()
        return result;
    }
// get api with id
export const GetAPI_ID = async (url,id)=>{
    const response = await fetch(`${url}/${id}`)
    const result = await response.json()
    return result;
}

//post api 
export const PostAPI = async (url,body)=>{
    const response = await fetch(`${url}`,{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify(body)  
    })
    return response;
}

// put api
export const PutAPI = async (url,id,body)=>{
    const response =await fetch(`${url}/${id}`,{
        method:"PUT",
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify(body)
    })
    return response;
}

//patch api
export const PatchAPI = async (url,id,body)=>{
    const response = await fetch(`${url}/${id}`,{
        method:"PATCH",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(body)
    })
    return response;
}

//delete api
export const DeleteAPI = async (url,id)=>{
    const response = await fetch(`${url}/${id}`,{
        method:"DELETE"
    })
    return response;
}