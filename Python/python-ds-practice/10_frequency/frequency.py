def frequency(lst, search_term):
    """Return frequency of term in lst.
    
        >>> frequency([1, 4, 3, 4, 4], 4)
        3
        
        >>> frequency([1, 4, 3], 7)
        0
    """
    # Without using count method:
    # count = 0
    
    # Loop through the list and increment the count variable for each occurrence of the search term
    # for item in lst:
    #     if item == search_term:
    #         count += 1
            
    # return count
    
    # Using the count method:
    return lst.count(search_term)