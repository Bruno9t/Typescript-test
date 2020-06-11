import {Request, Response} from 'express'
import EmailService from  '../services/EmailService'

const users = [
    {name:'Bruno',email:'bruno@bruno.com.br'},
    {name:'Sherlock',email:'sherlock@holmes.com'},
    {name:'Bruno',email:'bruno@bruno.com.br'},
    {name:'Sherlock',email:'sherlock@holmes.com'},
    {name:'Bruno',email:'bruno@bruno.com.br'},
    {name:'Sherlock',email:'sherlock@holmes.com'}
]

export default {
    index(req:Request,res:Response){
        return res.json(users)
    },

    create(req:Request,res:Response){

        EmailService.sendMail({
        to:{
            name:'Bruno',
            email:'bruno@bruno.com.br'
        },
        message:{
            subject:'Bem vindo ao sistema!',
            body:'Seja bem vindo'
        }
    })

        return res.send('Sucesso')

    }
}