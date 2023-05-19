const validLogins = [
    {
        username: 'admin',
        password: 'admin',
    },
    {
        username: 'user',
        password: 'user',
    }
];


export function validateLogin(username, password){
    for(let i = 0; i < validLogins.length; i++){
        if(username === validLogins[i].username && password === validLogins[i].password){
            return true
        }
    }
    return false;
}




