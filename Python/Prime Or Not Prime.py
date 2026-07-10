import math

n = int(input())
prime = True
if n<=1:
    prime = False
for i in range(2,int(math.sqrt(n))+1):
    if n%i == 0:
        prime = False
        break
if prime:
    print("prime")
else:
    print("Not Prime")
