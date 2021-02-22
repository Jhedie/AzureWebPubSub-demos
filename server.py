
import socket

import threading

#picking a to run the communication on
PORT  =  5050
#we are going to run the server on my local network
SERVER = socket.gethostbyname(socket.gethostname())
print(SERVER)
