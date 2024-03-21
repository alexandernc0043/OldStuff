import random




answers = [
    'maybe.',
    'yes.',
    'no.',
    'fart.',
    'poo.',
    'sopa.',
]




while True:
    print("ask me a question")
    question = input('> ')
    answer = random.choice(answers)
    print(answer)
if input == 'no':
    print('Well i like Skilstak')
if input == 'yes':
    print('Well i like Skilstak also')
