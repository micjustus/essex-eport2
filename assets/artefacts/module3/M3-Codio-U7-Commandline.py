import os

class SampleCLI():
    
    def list_contents(self):
        """Lists contents of the current directory"""
        try:
            for item in os.scandir(path='.'):
                size = os.stat(item.name).st_size
                print(f"Directory element: {item.name.ljust(60)}   {size} bytes")
                
        except Exception:
            print("Unable to list contents of the current directory")

            
    def add_number(self, x, y):
        """Adds two numbers together and displays the end results"""
        try:
            res= x + y
            print(f"Result of {x} and {y}= {res}")
        except Exception:
            print("Error occurred attempting to add two numbers")

            
    def show_commands(self):
        """Lists all the commands available for selection by an end user"""
        
        print ("""
            LIST - Shows all commands
            ADD - computes the sum of two numbers
            HELP - shows all available commands
            EXIT - termintes the application
            """)

    
def main():
    cli = SampleCLI()
    
    while True:
        inp = input("> ")
        if inp == "LIST":
            cli.list_contents()
        elif inp == "ADD":
            x = int(input(" 1st Number: "))
            y = int(input(" 2nd Number: "))
            cli.add_number(x, y)
        elif inp == "HELP":
            cli.show_commands()
        elif inp == "EXIT":
            break
    
        
if __name__ == "__main__":
    main()
