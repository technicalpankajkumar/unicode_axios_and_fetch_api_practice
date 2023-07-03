import React, { useEffect } from 'react'
import { DeleteAPI, GetAPI, GetAPI_ID, PatchAPI, PostAPI, PutAPI } from './components/FetchAPI'
import { DeleteAxiosAPI, GetAxiosAPI_ID, GetAxioxAPI, PatchAxiosAPI, PostAxiosAPI, PutAxiosAPI } from './components/AxiosAPI'
import { DeleteInstanceAxiosAPI, GetInstanceAxiosAPI, GetInstanceAxiosAPI_ID, PatchInstanceAxiosAPI, PostInstanceAxiosAPI, PutInstanceAxiosAPI } from './components/AxiosAPI_Instance'
import { DeleteAxiosConfigAPI, GetAxiosConfigAPI, GetAxiosConfigAPI_ID, PatchAxiosConfigAPI, PostAxiosConfigAPI, PutAxiosConfigAPI } from './components/AxiosConfigAPI'

function App() {
  useEffect(() => {

    //fetch method venila javascript practice

    // GetAPI(`http://localhost:3000/products`).then(res => console.log(res))

    // GetAPI_ID(`http://localhost:3000/products`,9).then(res => console.log(res))

    // PostAPI(`http://localhost:3000/products`,{name:"pankaj",lastName:"kumar"}).then(res => console.log(res))

    // PutAPI(`http://localhost:3000/products`, 32, 
    // { 
    //   fullName: "akashkumar", 
    //   address: { post: "saraimeer", dist: "azamgarh" } 
    // }).then(res => console.log(res))

    // PatchAPI(`http://localhost:3000/products`,31,
    // {
    //   fullName:"Pankaj Kumar"
    // }
    // ).then(res => console.log(res))

    // DeleteAPI('http://localhost:3000/products',35).then(res => console.log(res))


    //axios api practice

    // GetAxioxAPI('http://localhost:3000/products').then(res => console.log(res))

    // GetAxiosAPI_ID('http://localhost:3000/products',32).then(res => console.log(res))

    // PostAxiosAPI('http://localhost:3000/products',{name:"shailesh verma",address:{dist:"Ambedkar nagar",vill:"village not found!"}}).then(res => console.log(res))

    //  PutAxiosAPI('http://localhost:3000/products',34,
    //  {
    //   name:"harendra kumar",
    //   address:{ post:"saraimeer",dist:"azamgarh" }
    // }).then(res => console.log(res))

    // PatchAxiosAPI('http://localhost:3000/products', 45,
    //   {
    //     name: "Jitendra Yadav",
    //     address: { vill: "khathar dagra", post: "kerakat" }
    //   }).then(res => console.log(res))

    //  DeleteAxiosAPI('http://localhost:3000/products',45).then(res => console.log(res))


    //Axios api instance

    // GetInstanceAxiosAPI('/products').then(res => console.log(res.data))

    // GetInstanceAxiosAPI_ID('/products',34).then(res => console.log(res.data))

    // PostInstanceAxiosAPI('/products',
    //   {
    //     name: "new data",
    //     address: { "street": "new round flx" }
    //   }).then(res => console.log(res))

    // PutInstanceAxiosAPI('/products',45,{name:"product 54"}).then(res => console.log(res))

    // PatchInstanceAxiosAPI('/products',46,{name:"new data added!",langauage:"hindi"}).then(res => console.log(res))

    //  DeleteInstanceAxiosAPI('/products',45).then(res => console.log(res))


    // axios config api

    // GetAxiosConfigAPI('http://localhost:3000/products').then(res => console.log(res.data))

    // GetAxiosConfigAPI_ID('http://localhost:3000/products',12).then(res => console.log(res.data))

    // PostAxiosConfigAPI('http://localhost:3000/products',
    //   {
    //     name: "Danish", address: { dist: "mau", vill: "ranveerpur" }
    //   }).then(res => console.log(res))

    // PutAxiosConfigAPI('http://localhost:3000/products', 32,
    //   {
    //     name: "Aditya Prakash",address:{dist:"mau",vill:"not found!!"}
    //   }).then(res => console.log(res))

    // PatchAxiosConfigAPI('http://localhost:3000/products',32,
    // {
    //   name:"Aditya Prakash Yadav"
    // }).then(res => console.log(res))

    // DeleteAxiosConfigAPI('http://localhost:3000/products',32
    // ).then(res => console.log(res.statusText)).catch(err => { console.log(new Error(err))})

  }, [])

  return (
    <div className="App">

    </div>
  );
}

export default App;
