from turtle import Turtle
from random import random

bob = Turtle()
bob.pensize(7)
def random_color():
    return (random(),random(),random())





for count in range(90):
    bob.pencolor(random_color())
    bob.forward(100)
    bob.right(90)
    bob.forward(80)
    bob.right(50)
    bob.forward(30)
    bob.right(20)
    bob.right(70)
    bob.forward(30)
    bob.right(20)
    bob.forward(30)
    bob.right(40)
    bob.forward(10)
    bob.right(80)
    bob.right(90)
    bob.forward(110)
    bob.right(60)
    bob.forward(80)
    bob.right(90)
    bob.forward(30)
