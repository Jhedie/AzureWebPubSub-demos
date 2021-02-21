#python program to test branching in git
#run length encoding program 
'''adding a feature that returns a palindrome of string obtained from lineEncoding function'''
def palindrome(String):
    return String[::-1]



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
encoding =   lineEncoding('aaaaaabbbbccccddd')
print("Run length Encoding is " + encoding) 
print("The palindrome of " + str(encoding) + " is " + palindrome(encoding))

