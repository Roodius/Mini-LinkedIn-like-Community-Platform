### POSTMAN ENDPOINTS 
---
1 > ***http://localhost:5000/user/signup***  
2 > ***http://localhost:5000/user/signin***
3 > ***http://localhost:5000/user/adminAccess***
---
4 > ***http://localhost:5000/post/createpost***
5 > ***http://localhost:5000/post/AdminAccess***
6 > ***http://localhost:5000/post/post/:userId***
---
try 
1 > sign in ===> {
    "firstName":"roodius",
    "lastName":"saifi",
    "username":"roosdiusXosman",
    "password":"osmanxroodius@7900",
    "email":"osmansaifi30@gmail.com"
}
---
    with token in headers
2 > sign up ===> {
    "username":"roosdiusXosman",
    "password":"osmanxroodius@7900"
}

3 > http://localhost:5000/user/adminAccess

---------------------------------------------
    with token
1 > createpost ===> {
    "title":"My new Phone",
    "description" : "gift my my sister",
    "timestamp" : "2025-08-03T12:33:56.000Z"
}

2 > http://localhost:5000/post/AdminAccess ====> {
    params : userId
}
------------------------------------- 


