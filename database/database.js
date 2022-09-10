import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config({ path: "../.env", encoding: null });
// import express from "express";
// console.log(process.env);
const api_key = process.env.NEXT_PUBLIC_MONGODB_CONFIG;

const user = process.env.NEXT_PUBLIC_MONGODB_CONFIG;

console.log(JSON.parse(process.env.NEXT_PUBLIC_MONGODB_CONFIG).USERNAME);
