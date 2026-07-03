
export const countilize=(thyreq:any[],thyref:Record<string,string[]>)=>{
    const status:any={}
    const totally=thyreq.length
    let thyv:string
    for(const [key,value] of Object.entries(thyref)){
            const thycount:Record<string,number>={}
            for(const sythy of thyreq){
                thyv=sythy[key]||key
                thycount[thyv]=(thycount[thyv]||0)+1    
                    
            }
            status[key]=value.map(thyop=>({
                opty:thyop,
                num:thycount[thyop]||0,
                thypercent:((thycount[thyop]||0)/totally)*100
            }))
    }
    return status
}