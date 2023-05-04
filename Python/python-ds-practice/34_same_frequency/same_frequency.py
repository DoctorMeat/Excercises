def same_frequency(num1, num2):
    """Do these nums have same frequencies of digits?
    
        >>> same_frequency(551122, 221515)
        True
        
        >>> same_frequency(321142, 3212215)
        False
        
        >>> same_frequency(1212, 2211)
        True
    """
    str1 = str(num1)
    str2 = str(num2)
    
    # Check if the lengths are the same
    if len(str1) != len(str2):
        return False
    
    # Loop through the digits in the first number
    for digit in str1:
        # Get the sum of the digit in both numbers
        sum1 = str1.count(digit)
        sum2 = str2.count(digit)
        
        # If the sums are not equal, return False
        if sum1 != sum2:
            return False
    
    # If we made it through the loop, the frequencies are the same
    return True