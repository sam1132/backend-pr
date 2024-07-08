const asyncHandler = (func) =>{
    return (req,res,next)=>{
        Promise.resolve(func(req,res,next)).catch((err)=>{
       console.log(`error ${err.message}`)
        })
    }
}

export {asyncHandler}