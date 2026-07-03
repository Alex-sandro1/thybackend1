import {Schema} from 'mongoose'

export const thystatus=new Schema({
    gendr: String,
    thyage: String,
    exp: String,
    pos: String,
    educ: String,
    num: String,
    chall: String,
    acd: String,
    eng: String,
    part: String,
    attendance: String,
    disc: String,
    differentiatedfreq: String,
    differentiatedeffect: String,
    collabfreq: String,
    collabeffect: String,
    activefreq: String,
    activeeffect: String,
    thyrepeatfreq: String,
    thyrepeateffect: String,
    date:{type:Date, default:Date.now}

})