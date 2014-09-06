import random




answers = [
    'TROLL.',
    'TROLL.',
    'TROLL.',
    'TROLL.',
    'TROLL.',
    'TROLL.',
]




while True:
    print("ask me a question")
    question = input('> ')
    answer = random.choice(answers)
    print(answer)

