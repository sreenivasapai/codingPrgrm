n = int(input())
temp = n
total = 0

while n!=0:
    digit = n%10
    total +=digit**3
    n = n//10
if temp == total:
    print("Armstrong")
else:
    print("Not Armstrong")
