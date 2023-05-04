def reverse_string(phrase):
    """Reverse string,

        >>> reverse_string('awesome')
        'emosewa'

        >>> reverse_string('sauce')
        'ecuas'
    """
    # the long way using a for loop:
    # reversed_phrase = ""
    # for i in range(len(phrase)-1, -1, -1):
    #     reversed_phrase += phrase[i]
    # return reversed_phrase
    
    # the short way:
    return phrase[::-1]
