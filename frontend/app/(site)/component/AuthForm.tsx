'use client'

import { Button } from "@/app/component/Button"
import { Input } from "@/app/component/input/Input"
import { error } from "console"
import { useCallback, useState } from "react"
import {FieldValues, SubmitHandler, useForm} from 'react-hook-form'
import { AuthSocialButton } from "./AuthSocialButton"
import { BsGoogle } from "react-icons/bs"
import axios from "axios"

type Variant='LOGIN' | 'REGISTER'


export const AuthForm = ()=>{

    const [variant,setVariant] = useState<Variant>('LOGIN')
    const [isLoading,setIsLoading] = useState(false)

    const toggleVariant = useCallback(()=>{
        if(variant==='LOGIN'){
            setVariant('REGISTER')
        }else{
            setVariant('LOGIN')

        }

    },[variant])



    const {
        register,
        handleSubmit,
        formState:{
            errors
        }
      }=useForm<FieldValues>({
        defaultValues:{
            name:'',
            email:'',
            password:''
        }
    })


    const onSubmit :SubmitHandler<FieldValues> = async(data) =>{
         setIsLoading(true)

         if(variant==='REGISTER'){

            //axios register

        try {
            const response = await axios.post('/api/register', data);
            console.log('Registration successful:', response.data);
        } catch (error) {
            console.error('Error during registration:', error);
        } finally {
            setIsLoading(false);
        }


         }

         if(variant==='LOGIN'){
            //NextAuth SignIn

         }
    }


    const socialAction =(action:string)=>{
        setIsLoading(true)


        //nextAuth Socail SignIn

    }


    return(
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    { variant==='REGISTER' &&(
                    <Input id="name" label="Name" register={register} errors={errors} disabled={isLoading} />)}

                    <Input id="email" label="Email" register={register} errors={errors} disabled={isLoading}/>
                    <Input id="password" label="Password" register={register} errors={errors} disabled={isLoading}/>

                    <div>
                         <Button disabled={isLoading}
                         fullwidth
                         type="submit"
                         
                         >{variant==='LOGIN'?'SignIn':'REGISTER'}</Button>
                    </div>
                </form>

                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"/>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-white px-2 text-gray-500">Or continue with</span>
                        </div>
                    </div>

                    <div className="mt-6 flex gap-1 ">
                        <AuthSocialButton icon={BsGoogle} onClick={()=>socialAction('google')}/>
                    </div>
                </div>

                <div className="flex gap-2 justify-center ">
                    <div>
                        {variant==='LOGIN' ?'New to Movie?':'Already have an account'}
                    </div>
                    <div onClick={toggleVariant} className="underline cursor-pointer">
                        {variant==='LOGIN'?'create an account':'Login'}

                    </div>

                </div>


            </div>
            
        </div>
    )
}