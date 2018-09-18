import axios from 'axios';


let url = 'https://d1lkpy0bcch7uu.cloudfront.net/api/'


axios.defaults.baseURL = url;

class UserApi {
    constructor() {
        this.path = '/users';
    }


    async signup(name,
                 email,
                 password, userType) {
        try {
            const {data} = await axios.post(`${this.path}/new`, {
                name,
                email,
                password, userType
            });


            return data;
        } catch (e) {
           return {error:true, message :e.response.data.error.message}

        }
    }

    async getUserCounts()
    {
        try {
            const {data} = await axios.get(`${this.path}/counts`);


            return data;
        } catch (e) {
            return {error:true, message :'something wrong happened'}

        }
    }

}



class NewsletterApi {


    async subscribe(email) {
        console.log('check')
        try {
            const {data} = await axios.post(`newsletter/subscribe`, {
               email
            });


            return data;
        } catch (e) {
            return {error:true, message :e.response.data.error.message}

        }
    }


}


export const User = new UserApi();
export const Newsletter = new NewsletterApi();



