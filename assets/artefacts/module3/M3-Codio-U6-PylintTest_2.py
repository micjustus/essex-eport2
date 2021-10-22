
# SOURCE OF CODE: https://docs.pylint.org/en/1.6.0/tutorial.html
# Corrected version of pylintTest.py

'''
Performs some code but really, what is the answer to life?
'''

import string

SHIFT = 3
CHOICE = raw_input("would you like to encode or decode?")
WORD = raw_input("Please enter text")
LETTERS = string.ascii_letters + string.punctuation + string.digits
ENCODED = ''

if CHOICE == "encode":
    for letter in WORD:
        if letter == ' ':
            ENCODED = ENCODED + ' '
        else:
            x = LETTERS.index(letter) + SHIFT
            ENCODED = ENCODED + LETTERS[x]

if CHOICE == "decode":
    for letter in WORD:
        if letter == ' ':
            ENCODED = ENCODED + ' '
        else:
            x = LETTERS.index(letter) - SHIFT
            ENCODED = ENCODED + LETTERS[x]

print ENCODED
