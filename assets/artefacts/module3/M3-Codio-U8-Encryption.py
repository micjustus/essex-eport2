from Crypto.PublicKey import RSA
from Crypto.Cipher import PKCS1_OAEP
from Crypto.Signature import PKCS1_v1_5
from Crypto.Hash import SHA512, SHA384, SHA256, SHA, MD5
from Crypto import Random
from base64 import b64encode, b64decode
import os



hash = 'SHA-256'
key_size = 1024

private_key, get_public_key = b"",b""


def new_keys(key_size):
    random = Random.new().read
    key = RSA.generate(key_size, random)
    
    private, public = key, key.publickey()
    return private, public


def import_key(key):
    return RSA.importKey(key)


def get_public_key(private_key):
    return private_key.publickey()


def encrypt_file(source, destination):
    cipher = PKCS1_OAEP.new(public_key)

    with open(source, "rb") as src, open(destination, "wb") as dest:
        for chunk in iter(lambda: src.read(80), b""):
            encrypted = cipher.encrypt(chunk)
            dest.write(encrypted)


def decrypt_file(source, destination):
    cipher = PKCS1_OAEP.new(private_key)

    with open(source, "rb") as src, open(destination, "wt") as dest:
        for chunk in iter(lambda: src.read(128), b""):
            decrypted = cipher.decrypt(chunk).decode('utf-8')
            dest.write(decrypted)


def read_content_as_text(source):
    with open(source, "r") as src:
        print(src.read())


def read_content_as_binary(source):
    with open(source, "rb") as src:
        data = src.read().hex()

        print(data)


private_key, public_key = new_keys(key_size)

if __name__ == "__main__":
    filename = "RSA_SampleText.txt"

    print (f"* Before encryption, content is:\n------------------------------------------")
    read_content_as_text(filename)

    # Run the encryption example
    destination = os.path.basename(filename)
    name = destination.split('.', 1)[0]
    extension = destination.split('.', 1)[1]
    destination = name + ".encrypt." + extension
    print (f"\n* Encrypting file to: {destination}...\n------------------------------------------")

    encrypt_file(filename, destination)

    print (f"\n* After encryption, content is:\n------------------------------------------")
    read_content_as_binary(destination)

    # Run the decryption example
    destination2 = name + ".descrypt." + extension

    decrypt_file(destination, destination2)

    print (f"\n* After decryption, content is:\n------------------------------------------")
    read_content_as_text(destination2)