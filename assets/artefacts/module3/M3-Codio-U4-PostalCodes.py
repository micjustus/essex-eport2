import re

def postcodes(codes):
    if type(codes) is not list:
        print("Please provide a list of UK-style postcodes.")
        return
    
    rex = re.compile('[A-Za-z]{1,2}\d[A-Za-z\d]?\s*\d[A-Za-z]{2}$')
    
    for code in codes:
        match = rex.match(code)
        print(f"{code} is valid? ".ljust(22) + ("Yes" if match != None else "No"))

postcodes(['ST7 9HV', 'M1 1AA', 'M60 1NW', 'CR2 6XH', 'DN55 1PT', 'W1A 1HQ', 'EC1A 1BB'])
        