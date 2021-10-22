left = []
middle = []
right = []

def disk_mover(disks, source_rod, target_rod, spare_rod):
    if (disks <= 0):
        return 0
    
    if (disks == 1):
        value = source_rod.pop()
        target_rod.append(value)
        
        print(f"L: {str(left).ljust(max_padding)} M: {str(middle).ljust(max_padding)} R: {str(right).ljust(max_padding)}")

        return 1
            
    # This is the recursive portion of the function
    moves = disk_mover(disks - 1, source_rod, spare_rod, target_rod)

    value = source_rod.pop()
    target_rod.append(value)
    print(f"L: {str(left).ljust(max_padding)} M: {str(middle).ljust(max_padding)} R: {str(right).ljust(max_padding)}")

    moves += 1
    moves += disk_mover(disks - 1, spare_rod, target_rod, source_rod)

    return moves


disks_to_move = int(input("Enter number of disks to move: "))

temp = disks_to_move
while temp > 0:
    left.append(''.join([char*temp for char in '*']))
    temp -=1

max_padding = len(str(left))
    
total_moves = disk_mover(disks_to_move, left, right, middle)
print (f"Steps executed: {total_moves}")