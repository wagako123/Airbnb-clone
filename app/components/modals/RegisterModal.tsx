'use client';

import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import {FcGoogle} from "react-icons/fc";
import {useCallback, useState} from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modals from "./Modals";
import Heading from "../Heading";
import Inputs from "../inputs/Inputs";
import { toast } from "react-hot-toast";
import Button from "../Button";
import { signIn } from "next-auth/react";

const RegisterModal = () => {

    const registerModal= useRegisterModal();
    const [isLoading , setIsLoading] = useState(false);

    const{ register, handleSubmit, formState:{errors,}}=useForm<FieldValues>({
        defaultValues:{
            name:"",
            email:"",
            password:"",
        }
    });

    const onSubmit: SubmitHandler<FieldValues>= (data) =>{
        setIsLoading(true);

        axios.post('/registerApi/register', data)
         .then(()=>{
            registerModal.onClose();
         })
         .catch((error)=>{
            toast.error('Something went wrong')
         })
         .finally(()=>{
            setIsLoading(false);
        })

    }

    const bodyContent=(
        <div className="flex flex-col gap-2 ">
            <Heading
            title="welcome to Airbnb"
            subtitle="create an  account?" />
            <Inputs
            id="email"
            label="Email"
            disabled={isLoading}
            register={register}
            errors={errors}
            required/>
            <Inputs
            id="name"
            label="Name"
            disabled={isLoading}
            register={register}
            errors={errors}
            required/>
            <Inputs
            id="password"
            type="password"
            label="password"
            disabled={isLoading}
            register={register}
            errors={errors}
            required/>
        </div>

        
    );
    const footerContent = (
        <div className="flex flex-col gap-2 mt-3">
            <hr />
                <Button outline label="Contine with google" icon={FcGoogle}
                onClick={()=>{}}/>
                <Button outline label="Contine with Github" icon={AiFillGithub}
                onClick={()=>signIn('github')}/>
                <div className="text-neutral-500 text-center mt-4 font-light">
                    <div className="justify-center flex flex-row items-center gap-2">
                        <div>
                            Already have an account?
                        </div>
                        <div onClick={registerModal.onClose} 
                        className="text-neutral-800 cusror-pointer hover:underline ">
                            Log in
                        </div>
                    </div>
                </div>
           

        </div>
            
        )
  return (
        <Modals 
            disable={isLoading}
            isOpen={registerModal.isOpen}
            title="Register"
            actionLabel="Continue"
            onClose={registerModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    )
}

export default RegisterModal