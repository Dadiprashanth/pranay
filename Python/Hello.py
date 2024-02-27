print('hello world')
#variable is container store the data values.
x=10;
print(x);
print(type(x));
#############casting----If you want to specify the data type of a variable,this can be done with casting.
str_1=str(x);
print(str_1,type(str_1));
#camel case//-----Each word, except the first, starts with a capital letter:
myVariableName = "John"
print(myVariableName)
#pascal case//-----Each word starts with a capital letter:
MyVariableName = "John"
print(MyVariableName)
#Snake Case//----my_variable_name = "John"
my_variable_name = "John"
print(my_variable_name)
#Python allows you to assign values to multiple variables in one line:
#Note: Make sure the number of variables matches the number of values, or else you will get an error.
x, y, z = "Orange", "Banana", "Cherry"
print(x)
print(y)
print(z)
#And you can assign the same value to multiple variables in one line:
x = y = z = "Orange"
print(x)
print(y)
print(z)
################unpacking-------
#we are also allowed to extract the values back into variables. This is called "unpacking":
''' If you have a collection of values in a list, tuple etc.
 Python allows you to extract the values into variables. This is called unpacking.'''

fruits = ["apple", "banana", "cherry"]
x, y, z = fruits
print(x)
print(y)
print(z)
#############tuple unpacking
#Note: The number of variables must match the number of values in the tuple, if not, you must use an asterisk to collect the remaining values as a list.
fruits = ("apple", "banana", "cherry")
(green, yellow, red) = fruits
print(green)
print(yellow)
print(red)
#If the number of variables is less than the number of values, you can add an * to the variable name and the values will be assigned to the variable as a list:
fruits = ("apple", "mango", "papaya", "pineapple", "cherry")
(green, *tropic, red) = fruits
print(green)
print(tropic)
print(red)

####################Indentation----------------------
#Indentation refers to the spaces at the beginning of a code line.
#Where in other programming languages the indentation in code is for readability only, 
# the indentation in Python is very important.
#Python uses indentation to indicate a block of code.
if 5 > 2:
  print("Five is greater than two!")
#Python will give you an error if you skip the indentation:
"""if 5 > 2:
   print("Five is greater than two!")"""
#The number of spaces is up to you as a programmer, the most common use is four, 
# but it has to be at least one.
if 5 > 2:
 print("Five is greater than two!") 
if 5 > 2:
        print("Five is greater than two!") 
#You have to use the same number of spaces in the same block of code,
#  otherwise Python will give you an error:
"""if 5 > 2: #its give indeation error
 print("Five is greater than two!")
        print("Five is greater than two!")"""
if 5 > 2:#its is not give error
 print("Five is greater than two!")
 print("Five is greater than two!")

#############Gobal variable----------
#Variables that are created outside of a function (as in all of the examples above) are known as global variables.
#Global variables can be used by everyone, both inside of functions and outside.
x = "awesome"

def myfunc():
  print("Python is " + x)
myfunc()
#If you create a variable with the same name inside a function, this variable will be local, 
# and can only be used inside the function. The global variable with the same name will remain as it was, 
# global and with the original value.
x = "awesome"
def myfunc():
  x = "fantastic"
  print("Python is " + x)
myfunc()
print("Python is " + x)
#To create a global variable inside a function, you can use the global keyword.
def myfunc():
  global x
  x = "fantastic"
myfunc()
print("Python is " + x)
#To change the value of a global variable inside a function, 
# refer to the variable by using the global keyword:
x = "awesome"
def myfunc():
  global x
  x = "fantastic"
myfunc()
print("Python is " + x)
############## Data types ########### 
"""In programming, data type is an important concept.
Variables can store data of different types, and different types can do different things.
Python has the following data types built-in by default, in these categories:"""
"""Text Type:	str
Numeric Types:	int, float, complex
Sequence Types:	list, tuple, range
Mapping Type:	dict
Set Types:	set, frozenset
Boolean Type:	bool
Binary Types:	bytes, bytearray, memoryview
None Type:	NoneType"""
#################Armstrong nuber###########
def arm():
 for i in range(0,1000):
   l=len(str(i))
   sum=0
   for j in str(i):
     sum=sum+(int(j))**l
     if i==sum:
      print(i,"armstrongnumbers")
arm()
#prime number__________________
def prime():
    i=22
    for j in range(2,i):
      if i%j==0:
        print(i,"is not prime")
        break;
      else:
          print(i,"is prime")
          break
prime()
#palindrome  _______________________
def palindrome():
  x="gaga"
  y=""
  for i in x:
    y=i+y
    print(y)
  if x==y:
    print(x,"is plaindrome")
  else:
      print(y,"not palindrome")
palindrome()

#array in array __________________________
def arr():
  a=[1,2,4,5,[3,4,5,[4,6,7]],[[7,8,4]],[[[9,8,4]]]]
  i=0;
  z=[];
  for element in a:
        if type(element) is list:
            # Check if type is list than iterate through the sublist
            for item in element:
                z.append(item)
        else:
            z.append(element)

print(z) 
arr()
def flat(lis):
    flatList = []
    # Iterate with outer list
    for element in lis:
        if type(element) is list:
            # Check if type is list than iterate through the sublist
            for item in element:
                flatList.append(item)
        else:
            flatList.append(element)
    return flatList
 
 
lis = [[[11, 22, 33, 44]], [55, 66, 77], [88, 99, 100]]
print('List', lis)
print('Flat List', flat(lis))

lis1=[[67,[[4,8,0]]]]
print(lis1[0])

 
# function used for removing nested
# lists in python using recursion
l = [1, 2, [3, 4, [5, 6]], 7, 8, [9, [10]],[[67,[[4,8,0]]]]]
output = []
def reemovNestings(l):
    for i in l:
      if type(i) == list:
        reemovNestings(i)
      else:
        output.append(i)
reemovNestings(l)
print('The list after removing nesting: ', "output",output)
def arr1():
  l1=[1, 2, [3, 4, [5, 6]], 7, 8, [9, [10]],[[[4,8,0]]]]
  j1=0
  z1=[]
  print(z1,"rrrrrrrrrrrrr",len(l1))

  while j1 < len(l1):
    for i in l1:
      if type(i)==type([]):
        z1.append(i)
        b=i
        l1.remove(i)
        l1=b
  j1=j1+1
  z1=z1+[l1[-1]]
  print(z1,"rrrrrrrrrrrrr")
arr1()

  