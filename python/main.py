def binary_search(array: list, n: int, start_index: int = 0):
    split_index = len(array) // 2
    try:
        item = array[split_index]
    except IndexError:
        return -1
    if item == n:
        return split_index if start_index == 0 else start_index + split_index
    if item > n:
        # go to the left
        return binary_search(array[:split_index], n, start_index)
    # go to the right
    start_index += split_index + 1
    return binary_search(array[split_index + 1 :], n, start_index)


if __name__ == "__main__":
    array = [i for i in range(16)]

    for i in array:
        assert binary_search(array, i) == i
    assert binary_search(array, -2) == -1
    assert binary_search(array, 16) == -1
