let s='abcd'
 const f = (s, index=0) => s.length-1 === index ? s[index] : f(s, index+1) + s[index]
s = f(s)
