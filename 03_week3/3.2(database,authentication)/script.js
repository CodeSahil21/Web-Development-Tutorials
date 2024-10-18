//hashing
/*
During authentication we sign in with username(email) and password and while storing it in the database it hashes password 
ie whenver we write password abcc it hashes it into 123a so that whenver hacker hack data base they won't be easliy see our password
it is one way ti can one be convereted into hash not other way around
*/
//Encryption
/*
some gives it string it convert into gibberish and it also convert that same gibbersh into the string by provided key
ie it requires password to encrypt it both way
*/
//json web token
/*
it also convert pasword in certain string but it is differnet from hashing and encryption
even  though it has same functionality
1)it takes json as a input
2)used on the web
3)the long string it gives in the end after converting password  is a token
this string/token can be decoded by anyone but it can only be verfied by person who has the password
hence only JWt token and password  can help you complete the verficationprocess
*/
//local storage
/*
this jwt tokens are stored in local storage
*/