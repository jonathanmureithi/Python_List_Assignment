# Empty list
my_list = []
print("Step 1 - Empty list:", my_list)

my_list.append(10)
my_list.append(20)
my_list.append(30)
my_list.append(40)
print("Step 2 - After appending elements:", my_list)

my_list.insert(1, 15)
print("Step 3 - After inserting 15 at index 1:", my_list)

my_list.extend([50, 60, 70])
print("Step 4 - After extending the list:", my_list)

my_list.pop()
print("Step 5 - After removing the last element:", my_list)

my_list.sort()
print("Step 6 - After sorting in ascending order:", my_list)

index_30 = my_list.index(30)
print("Step 7 - Index of 30:", index_30)
