import React from 'react';
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { loginSchema } from "@/lib/validation"
import { GoogleSVG, FacebookSVG, AppleSVG } from "@/svg"



const ForgotPassword = () => {


    const form = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            phone: '',
        }
    })

    function onSubmit(data) {
        console.log(data)
        form.reset()
    }


    return (
        <div className='w-full bg-[url(/bg.jpg)] h-full 2xl:h-screen bg-cover bg-no-repeat bg-center bg-blend-overlay bg-[#212121]/80  grid grid-cols-1 md:grid-cols-2 items-center'>
            <div className='flex flex-col justify-start items-start max-w-96 mx-auto gap-20'>
                <h1 className='text-2xl md:text-3xl text-orange font-Potta'>
                    SAMBRAMA
                </h1>
                <div className="flex flex-col items-start justify-center w-full my-4 ">
                    <h2 className="font-poppins font-bold text-4xl leading-11 text-white">Building the <br />Future...</h2>
                    <p className="font-poppins font-normal text-base leading-7 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-start max-w-[460px] p-10 bg-white rounded-md text-start gap-3 bottom-0'>
                <div>
                    <span className='font-poppins text-xs font-normal leading-5 text-black'>Forgot password</span>
                    <h3 className='font-poppins text-2xl font-medium leading-11 text-orange' >Please enter your email to reset the password</h3>
                </div>
                <form id='signIn-form' onSubmit={form.handleSubmit(onSubmit)} className='w-full '>
                    <FieldGroup className="gap-4">
                        <Controller
                            name="phone"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="phone" className="ml-4 -mb-6 z-10 bg-white !w-max font-poppins font-normal text-xs leading-5 text-gray">Phone Number</FieldLabel>
                                    <Input id="phone" type="text" className="h-16 border border-[#BDBDBD] font-poppins text-base text-gray z-0" placeholder="Enter your phone number" aria-invalid={fieldState.invalid}{...field} />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                    </FieldGroup>
                    <Button type="submit" className="font-poppins font-bold text-xs leading-5 mt-4 text-white bg-orange h-16 w-full" form="signIn-form">Reset Password</Button>
                </form>
                <div className="flex items-center justify-center w-full my-4">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="mx-3 text-xs font-bold text-[#212121] font-poppins">or</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>
                <Button className="w-full h-12 border text-black  border-[#EEEEEE] rounded-md font-poppins font-normal text-xs leading-5 bg-transparent hover:bg-transparent"><GoogleSVG className="mr-5" /> Sign up with Google</Button>
                <Button className="w-full h-12 border text-black  border-[#EEEEEE] rounded-md font-poppins font-normal text-xs leading-5 bg-transparent hover:bg-transparent"><FacebookSVG className="mr-5" /> Log In with Facebook</Button>
                <Button className="w-full h-12 border text-black  border-[#EEEEEE] rounded-md font-poppins font-normal text-xs leading-5 bg-transparent hover:bg-transparent"><AppleSVG className="mr-5" /> Log In with Apple</Button>
                <p className="font-poppins font-normal text-xs leading-5 text-black text-center mt-4">New User?<span className="text-orange capitalize font-bold" >SIGN UP HERE</span></p>

            </div>
        </div>
    );
}

export default ForgotPassword;
