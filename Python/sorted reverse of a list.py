#n=list(map(int,input().split()))
#m = sorted(n)

n = input()
m = list(sorted(n))
print(*m[::-1], sep ="")
