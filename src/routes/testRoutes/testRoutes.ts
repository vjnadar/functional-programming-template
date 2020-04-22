import express, { Router } from "express";
import { httpRequestTypes } from "../../enums/httpRequestTypes/httpRequestTypes";
import RouterSingleton from "../RouterSingleton";
import testController from "../../controllers/test/testController";
const testRouter = RouterSingleton.getRouter();
const { get, post } = testController();

testRouter.get("/test", get());
testRouter.post("/test", post());

export { testRouter };
