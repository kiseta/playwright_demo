const ADMIN = [ 'admin@', 'root' ];
const USER = [ 'Demouser', 'Demopass' ];
const NOUSER = ['foo', 'bar']
var usersList = [ADMIN, USER, NOUSER]

for (let x in usersList) {
    console.log(usersList[x][0], usersList[x][1])
}

