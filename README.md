# TSCrypt
## A TypeScript implementation of the Unix crypt(3) call.

This is a rewrite of the JavaScript port of the Java port of the original C source. It provides a crypt() function which will return a hash based on the input parameters.

The original source contains the following license: OpenSSL former SSLeay

>"This product includes cryptographic software written by Eric Young (eay@cryptsoft.com)"

### The Java Port

   The port to Java is known as jcrypt.java and can be found at:
   http://locutus.kingwoodcable.com/jfd/crypt.html
   
### The JavaScript Port
   
   The original JavaScript port can be found here:
   http://whereswalden.com/tech/internet/javacrypt/

### The TypeScript Port by Michael Gärtner (mgaert@gmx.de)

   The port for TypeScript simplifies the callable interface, and cleans up the code.
   There is now a static 'crypt' member that looks like and behaves the same as the C function of the same name.

### The authors:
- Eric Young (eay@cryptsoft.com) - the original code
- John F. Dumas - jcrypt.java
- Jeff Walden - javacrypt.js
- Michael Gaertner - crypt3.ts
