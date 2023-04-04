def solution(s):
    c = [];
    for i in range(len(s)):
        if(s[i]=='('): c.append(s[i])
        else:
            if c:
                c.pop()
            else: return False
    
    if(c): return False
    else: return True