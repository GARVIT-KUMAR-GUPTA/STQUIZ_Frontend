import React from 'react'

import { TextField } from '@mui/material';

// const Login = () => {
//     return (
//         <div className=" mx-10 bg-sky-50">


//         <section className="h-screen">
//             <div className="h-full">
//                 <div
//                     className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
//                     <div
//                         className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
//                         <img
//                             src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
//                             className="w-full"
//                             alt="Sample image" />
//                     </div>
//                     <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
//                         <form>
//                             <div
//                                 className="flex flex-row items-center justify-center lg:justify-start">
//                                 <p className="mb-0 mr-4 text-lg">Sign in with</p>
//                                 <button
//                                     type="button"
//                                     data-te-ripple-init
//                                     data-te-ripple-color="light"
//                                     className="mx-1 h-9 w-9 rounded-full bg-blue-700 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
//                                     {/* <!-- Facebook --> */}
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         className="mx-auto h-3.5 w-3.5"
//                                          fill="currentColor"
//                                         viewBox="0 0 24 24">
//                                         <path
//                                             d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
//                                     </svg>

//                                 </button>

//                                 <button
//                                     type="button"
//                                     data-te-ripple-init
//                                     data-te-ripple-color="light"
//                                     className="mx-1 h-9 w-9 rounded-full bg-blue-700 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
//                                     {/* <!-- Twitter --> */}
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         className="mx-auto h-3.5 w-3.5"
//                                         fill="currentColor"
//                                         viewBox="0 0 24 24">
//                                         <path
//                                             d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//                                     </svg>
//                                 </button>

//                                 <button
//                                     type="button"
//                                     data-te-ripple-init
//                                     data-te-ripple-color="light"
//                                     className="mx-1 h-9 w-9 rounded-full bg-blue-700 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
//                                     {/* <!-- Linkedin --> */}
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         className="mx-auto h-3.5 w-3.5"
//                                         fill="currentColor"
//                                         viewBox="0 0 24 24">
//                                         <path
//                                             d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
//                                     </svg>
//                                 </button>
//                             </div>

//                             <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-black-300 after:mt-0.5 after:flex-1 after:border-t after:border-black-300">
//                                 <p
//                                     className="mx-4 mb-0 text-center font-semibold text-black">
//                                     Or
//                                 </p>
//                             </div>

//                             {/* <!-- Email input --> */}

//                             <TextField label="Email Address" 
//                             variant="outlined" />






//                             <div className="relative mb-6" data-te-input-wrapper-init={true}>
//                                 <input
//                                     type="password"
//                                     className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-black-200 placeholder:text-black-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
//                                     id="exampleFormControlInput22"
//                                     placeholder="Password" />
//                                 <label
//                                     for="exampleFormControlInput22"
//                                     className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-black-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-black-200 peer-focus:text-black-200"
//                                 >Password
//                                 </label>
//                             </div>

//                             <div className="mb-6 flex items-center justify-between">
//                                 <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
//                                     <input
//                                         className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-[rgba(0,0,0,0.25)] bg-white before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:bg-white focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
//                                         type="checkbox"
//                                         value=""
//                                         id="exampleCheck2" />
//                                     <label
//                                         className="inline-block pl-[0.15rem] hover:cursor-pointer"
//                                         for="exampleCheck2">
//                                         Remember me
//                                     </label>
//                                 </div>
//                                 <a href="#!">Forgot password?</a>
//                             </div>

//                             <div className="text-center lg:text-left">
//                                 <button
//                                     type="button"
//                                     className="inline-block rounded bg-blue-700 text-white px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
//                                     data-te-ripple-init
//                                     fill="currentColor"
//                                     data-te-ripple-color="light">
//                                     Login
//                                 </button>
//                                 <p className="mt-2 mb-0 pt-1 text-sm font-semibold">
//                                     Don't have an account?
//                                     <a
//                                         href="#!"
//                                         className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
//                                     >Register</a>
//                                 </p>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </section>
//         </div>
//     )
// }
const Login = () => {
    return (
    <div class=" mx-10 bg-sky-50">
        <section class="h-screen">
            <div class="h-full">
                <div
                    class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                    <div
                        class="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                        <img
                            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            class="w-full"
                            alt="Sample image" >
                                </img>
                    </div>
                    <div class="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                        <form>
                            <div
                                class="flex flex-row items-center justify-center lg:justify-start">
                                <p class="mb-0 mr-4 text-lg">Sign in with</p>
                                <button
                                    type="button"
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                    class="mx-1 h-9 w-9 rounded-full bg-blue uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="mx-auto h-3.5 w-3.5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" ></path>
                                    </svg>
                                </button>

                                <button
                                    type="button"
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                    class="mx-1 h-9 w-9 rounded-full bg-blue uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="mx-auto h-3.5 w-3.5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                </button>

                                <button
                                    type="button"
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                    class="mx-1 h-9 w-9 rounded-full bg-blue uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="mx-auto h-3.5 w-3.5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                    </svg>
                                </button>
                            </div>

                            <div
                                class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                <p
                                    class="mx-4 mb-0 text-center font-semibold dark:text-black">
                                    Or
                                </p>
                            </div>

                            {/* <!-- Email input --> */}
                            <div class="flex flex-col mt-2">
                                <label for="email" class="hidden">Email</label>
                                <input type="email" name="email" id="email" placeholder="Email" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none" />
                            </div>

                            {/* <!-- Password input --> */}
                            <div class="flex flex-col mt-2">
                                <label for="tel" class="hidden">Password</label>
                                <input type="password" name="password" id="password" placeholder="Password" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none" />
                            </div>

                            <div class="mb-6 flex items-center justify-between">
                                <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                                    <input
                                        class="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-[rgba(0,0,0,0.25)] bg-white before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:bg-white focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
                                        type="checkbox"
                                        value=""
                                        id="exampleCheck2" />
                                    <label
                                        class="inline-block pl-[0.15rem] hover:cursor-pointer"
                                        for="exampleCheck2">
                                        Remember me
                                    </label>
                                </div>
                                <a href="#!">Forgot password?</a>
                            </div>

                            <div class="text-center lg:text-left">
                                <button
                                    type="button"
                                    class="inline-block rounded bg-blue px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    Login
                                </button>
                                <p class="mt-2 mb-0 pt-1 text-sm font-semibold">
                                    Don't have an account?
                                    <a
                                        href="#!"
                                        class="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                                    >Register</a
                                    >
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}

export default Login

