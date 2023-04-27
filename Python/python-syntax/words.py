#1
def uppercased_words(words):
    """Print each word uppercased on it's own line.
    """

    for word in words:
        print(word.upper())

#2
def uppercased_e_words(words):
    """Print each word uppercased on it's own line, but only if it starts with 'e' or 'E'.
    """

    for word in words:
        if word.startswith("e") or word.startswith("E"):
            print(word.upper())

#3
def uppercased_user_defined_words(words, starts_with):
    """Print each word uppercased on it's own line, but only if it starts with the letter(s) passed in.
    """

    for word in words:
        for letter in starts_with:
            if word.startswith(letter):
                print(word.upper())
                break
