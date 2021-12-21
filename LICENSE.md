 A TypeScript implementation of the Unix crypt(3) call.
 
 This is a rewrite of the JavaScript port of the Java port of the original C source. It provides a crypt() function which will return a hash based on the input parameters.
 
 originalLicense The Original License
 
 The original source contains the following license:
 
 This library is free for commercial and non-commercial use as long as the following conditions are aheared to. The following conditions apply to all code found in this distribution, be it the RC4, RSA, lhash, DES, etc., code; not just the SSL code. The SSL documentation included with this distribution is covered by the same copyright terms except that the holder is Tim Hudson (tjh@mincom.oz.au).
 
 Copyright remains Eric Young's, and as such any Copyright notices in the code are not to be removed. If this package is used in a product, Eric Young should be given attribution as the author of the parts of the library used. This can be in the form of a textual message at program startup or in documentation (online or textual) provided with the package.
 
 Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
 1. Redistributions of source code must retain the copyright
    notice, this list of conditions and the following disclaimer.
 2. Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the
    documentation and/or other materials provided with the distribution.
 3. All advertising materials mentioning features or use of this software must display the following acknowledgement:
    "This product includes cryptographic software written by Eric Young (eay@mincom.oz.au)"
    The word 'cryptographic' can be left out if the rouines from the library being used are not cryptographic related :-).
 4. If you include any Windows specific code (or a derivative thereof) from the apps directory (application code) you must include an acknowledgemnt:
    "This product includes software written by Tim Hudson (tjh@mincom.oz.au)"
   
   THIS SOFTWARE IS PROVIDED BY ERIC YOUNG ``AS IS'' AND
   ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
   IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
   ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHOR OR CONTRIBUTORS BE LIABLE
   FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
   DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
   OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
   HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
   LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
   OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
   SUCH DAMAGE.
   
   The licence and distribution terms for any publically available version or derivative of this code cannot be changed. i.e. this code cannot simply be copied and put under another distribution licence
   [including the GNU Public Licence.]
   
   javaPort The Java Port
   
   The port to Java is known as jcrypt.java and can be found at:
   http://locutus.kingwoodcable.com/jfd/crypt.html
   
   javascriptPort The JavaScript Port
   
   The original JavaScript port can be found here:
   http://whereswalden.com/tech/internet/javacrypt/
   
   TypeScript The TypeScript Port by Michael Gärtner (mgaert@gmx.de)
   
   The port for TypeScript simplifies the callable interface, and cleans up the code.
   There is now a 'crypt' function that looks like and behaves the same as the C function of the same name.
   All of the other code and variables needed for the implementation are now in the 'Crypt3' name space.
   No class instance is required any more.
   
   The authors:
   Eric Young <eay@mincom.oz.au> - the original code
   John F. Dumas - jcrypt.java
   Jeff Walden - javacrypt.js
   
