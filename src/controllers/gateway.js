import axios from 'axios';

const request = async (body, url, method) => {
   try {
      return await axios({
         url,
         method,
         data: body
       })
   } catch(e){
      console.log(e);
   }
}

export const gateway = async ( body, url, method) => {
   const res = await request(body, url, method);
   
    return { status: res.status, data: { message: `${res.data}` } };
};
