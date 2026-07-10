n = int(input())
sign = -1 if n<0 else 1
abs(n)

rev = int(str(n)[::-1])*sign

if rev>= -32768 and rev<=32767:
    print(rev)
else:
    print("Wrong Value")
