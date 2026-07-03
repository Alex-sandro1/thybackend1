import express from 'express'
import {thyref} from '../thyref'
import {countilize} from '../countilise'
import mongoose from 'mongoose'
import {thystatus} from '../thyschema'
import {thyconny} from '../thyconn'

export default async function thysend(req:any,res:any){
    let thycache:typeof mongoose|null=null
    await thyconny(thycache)
    const thymod=mongoose.model("thystatus", thystatus)
    const thysat=await thymod.find({})
    const thyy=countilize(thysat,thyref)
    res.json(thyy)
}