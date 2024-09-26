import { json } from "@remix-run/node"

export const loader = async () => {
   return json({
    check : 'Check'
   })
}

export const action = ({request} : any) => {
 console.log('-------------------------------------------------',request);
 console.log('Request method:', request.method);
   const method = request.method ;
   switch(method) {
    case 'POST' : {
       return json({
        method : 'this post method'
       })
    }
    case 'PATCH' : {
       return json({
        method : 'this patch method'
       })
    }
   }
}