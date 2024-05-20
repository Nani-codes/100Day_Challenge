function fnc(jsonbody) {
    console.log(jsonbody);      
}

function fn(res) {
    res.json().then(fnc)
}

let obj = {
    method : "POST"
}



fetch("http://localhost:3000/post?counter=9",obj).then(fn)