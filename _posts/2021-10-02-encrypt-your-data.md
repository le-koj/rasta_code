---
author: Le Koj
---

#### SIMPLE STEPS TO ENCRYPT A FILE 

The following steps will show you how to encrypt and decrypt your data using AES Encryption technique and the openssl tool in command line.

#### BASICS

[AES ( Advanced Encryption Standard or Rijndael )](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) is a specification for encrypting electronic data established by the U.S National Institute of Standards and Technology.  It is a [symmetric encryption](https://en.wikipedia.org/wiki/Symmetric-key_algorithm) based of the [block encryption algorithm](https://en.wikipedia.org/wiki/Block_cipher).  

AES supports five [modes](https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation) of encryption:

ECB mode  | Electronic Code Book mode
CBC mode  | Cipher Block Chaining mode
CFB mode  | Cipher Feedback mode
OFB mode  | Output Feedback mode
CTR mode  | Counter mode

We’ll be using the simplest of the five encryption modes, ECB.  With ECB, the message is divided into blocks, and each block is encrypted separately.  


#### OPENSSL INSTALLATION

[OpenSSL](https://www.openssl.org/) is a robust, commercial-grade, and full-featured toolkit for the Transport Layer Security (TLS) and Secure Sockets Layer (SSL) protocols. It is also a general-purpose cryptography library. 
OpenSSL supports many different cryptographic operations, such as symmetric key encryption, public/private key pair generation, public-key encryption, hash functions, digital signatures, etc.

##### Linux

OpenSSL comes pre-installed on most linux distributions. To check if OpenSSL is installed, run the following command:

```
which openssl
```
{: #gui-app1 .code-container}

If you get zero output, you can install openssl as follows.

First, update and upgrade the `apt` package manager:

```
sudo apt-get update; sudo apt-get upgrade
```
{: #gui-app2 .code-container}

second, install openssl:

```
sudo apt-get install openssl
```
{: #gui-app3 .code-container}

<span></span>

##### Windows

you can install openssl on windows by following the instructions in the article provided:

[Installing OpenSSL on Windows 10 and updating PATH](https://medium.com/swlh/installing-openssl-on-windows-10-and-updating-path-80992e26f6a1)



<span></span>

##### Mac

to install openssl on Mac OS, you can simply run the folowing command in the command line:

```
brew install openssl
```
{: #gui-app5 .code-container}

<span></span>

#### ENCRYPTING YOUR DATA/FILE

To begin encrypting your data, run the following command:

```
openssl enc -aes-256-cbc -a -A -md sha512 -pbkdf2 -iter 250000 -salt -in InputFilePath -out OutputFilePath
```
{: #gui-app6 .code-container}

After the command is executed, you’ll be prompted to set a passphrase.  The passphrase is required to decrypt the data and it is virtually impossible to decrypt the file without the passphrase, even with brute force.

##### Command Breakdown:

- `enc` is used to specify the cipher name

- `aes-256-cbc` is the cipher name along with the mode of operation which is CBC (Cipher Block Chaining mode)

- `a` is used for Base64 encode/decode.

- `A` is used with `-a` to specify base64 buffer as a single line.

- `md` sha512 specifies which digest to use for the generation of the key from the passphrase. The default value from version 1.1.0 is SHA256. Before version 1.1.0 MD5 was the default digest.

- `pbkdf2` specifies to use PBKDF2 (Password-Based Key Derivation Function 2) algorithm

- `iter 250000` is overriding the default count of iterations for the password. High values increase the time required to brute-force the resulting file. This option enables the use of the PBKDF2 algorithm to derive the key.

- `salt` Use salt in Key Derivation Function (KDF). This is the default behaviour and thus this option is not required.


#### DECRYPTING YOUR DATA/FILE

To decrypt your data/file, use the same commands for encryption, but with a `-d` option in it, as follows:

```
openssl enc -aes-256-cbc -a -A -d -md sha512 -pbkdf2 -iter 250000 -salt -in InputFilePath -out OutputFilePath
```
{: #gui-app7 .code-container}

<span></span>

##### NOTE:

The above commands to encrypt and decrypt only works on single files.  To encrypt/decrypt multiple files, you’ll need to first convert it into a `tar` file, then run the same commands on the tar file.

You should now have the knowledge to secure your data/file for your eyes only.  

One Love, and be secured in the matrix.

<span></span>
CREDITS:
[AES Encryption in Linux](https://dev.to/blastoise/aes-encryption-in-linux-585f)