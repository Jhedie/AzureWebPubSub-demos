#python program to test branching in git
#run length encoding program 
def lineEncoding(s):
    st= ''

    for i in range(len(s)):
        if s[i] == s[i-1]:#check in a backwards manner because if you use i +1 you will get an index error
            st += s[i]
        else:
            st += ' '+ s[i]
    st = st.split()



    finalstring = ''
    for i in st:
        if len(i) > 1:
            finalstring += str(len(i)) + i[0]
        else:
            finalstring += i[0]
    return finalstring
    
        
print(lineEncoding('aba'))

