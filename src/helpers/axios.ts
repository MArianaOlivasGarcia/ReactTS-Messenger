

import axios from 'axios';


const api = axios.create({
    baseURL: 'http://localhost:3000/api'
});

export const axiosWithoutToken = async( endpoint: string, data?: any, method = 'GET' ) => {
 

    if ( method === 'GET' ) {


        try {        
            const resp = await api({
                method,
                url: endpoint
            })

            return resp.data;

        } catch (error: any) {
            return error.response.data
        }

    } else {

        try {
            const resp = await api({
                method,
                url: endpoint,
                headers: {
                    'Content-type': 'application/json'
                },
                data
            });
    
           return await resp.data;
        } catch (error: any) {
            return error.response.data
        }

       
    }

}



export const axiosWithToken = async( endpoint: string, data?: any, method = 'GET' ) => {
    
    const accessToken = localStorage.getItem('accessToken') || '';

    if ( method === 'GET' ) {

        try {        
            const resp = await api({
                method,
                url: endpoint,
                headers: {
                    Authorization: `Bearer ${accessToken}`
                },
            })

            return resp.data;

        } catch (error: any) {
            return error.response.data
        }

    } else {

        try {
            const resp = await api({
                method,
                url: endpoint,
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${accessToken}`
                },
                data
            });
    
           return await resp.data;
        } catch (error: any) {
            return error.response.data
        }

       
    }

}