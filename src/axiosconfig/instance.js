import axios from 'axios'
import store from '../store/store';
import { changeLoaderSpiner } from '../store/slices/loader';

const axiosInstance=axios.create({
    baseURL:"https://api.themoviedb.org/3",
    // headers:{
//  "content":"application/json"
//   
    // },
    params:{
        api_key:"0f0681a3d3b0c82452c14bcfc30d8ee3"
    }
})

axiosInstance.interceptors.request.use((config)=>{

// >>>dispatch function from store as we canot use Dispatch()>>HOOk in this component as not rfc
 const ayy= store.dispatch(changeLoaderSpiner(true))

console.log(ayy);
    return config;
},(err)=>{

    return Promis.reject(err)

})


axiosInstance.interceptors.response.use((res)=>{

    const ayy=store.dispatch(changeLoaderSpiner(false))
    console.log(ayy);

return res
},(err)=>{
   
    return Promis.reject(err);
})


export default axiosInstance