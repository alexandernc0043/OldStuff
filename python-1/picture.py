from turtle import *

def random_color():
    return 'cyan'

def draw_a_tree(depth, branches):
    if depth > 0:
        pencolor(random_color())
        pendown()
        forward(7 * depth)
        left(130)
        count = 0
        while count < branches:
            right(180 / branches)
            draw_a_tree(depth -1,branches)
            count+= 1
        left(50)
        penup()
        backward(7 * depth)
            
draw_a_tree(9,2)
            
        
