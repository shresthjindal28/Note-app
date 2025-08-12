"use server"

import {auth} from "@/lib/auth";

export const signInUser = async (email: string, password: string) => {
    try {
        await auth.api.signInEmail({
            body: {
                email,
                password
            }
        });
        return { success: true, message: "User signed in successfully" };
    } catch (error) {
        const e = error as Error;
        return { success: false, message: e.message || "Unknown error occurred" };
    }
};


export const signUpUser = async (email: string, password: string, name: string) => {
    try {
        await auth.api.signUpEmail({
            body: {
                email,
                password,
                name: name || email,
            },
            asResponse: true // returns a response object instead of data
        });
        return { success: true, message: "User signed up successfully" };
    } catch (error) {
        const e = error as Error;
        return { success: false, message: e.message || "Unknown error occurred" };
    }
};