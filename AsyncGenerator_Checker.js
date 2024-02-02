async function* checker(x) {
try {
    await isValid(x);
    yield "Processing";
   yield processX(x).then(()=> "Success", ()=> "Error")
}
catch (error){
    yield "Invalid argument"
}
}
