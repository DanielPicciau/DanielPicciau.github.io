# Pseudocode
## Setting a variable

```text
SET mango TO potato
```

## Inputs

```python
name = input("Name: ")
age = int(input("Age: "))
```

```text
BEGIN
    RECIEVE name FROM (string) KEYBOARD
    RECIEVE age FROM (int) KEYBOARD
END
```

## For Loop
```python
for item in range (0, 10):
    print (item)
```

```text
BEGIN
    FOR item FROM 0 TO 9 DO
        SEND item TO DISPLAY
    END FOR
END
```

## Conditions
```python
if age > 17:
    print ("You are old enough")
```

```text
IF age > 17 THEN 
    SEND "you are old enough" TO DISPLAY
END IF
```
```python
if day == "Monday":
    print ("I hate mondays")
elif day == "Tuesday:
    print ("I hate tuesdays too")
else:
    print ("Bleh")
```
```text
BEGIN 
    IF day = "Monday" THEN
        SEND "I hate mondays" TO DISPLAY

    ELSE IF DAY = "Tuesday" THEN
        SEND "I hate tuesdays too" TO DISPLAY

    ELSE
        SEND "Bleh"

    END IF
END

```

## Example code

```python
import random
num1 = random.randint(10)
num2 = random.randint(10)

print(f("What is {num1} + {num2}?"))
answer = int(input ("Answer: "))

if answer == num1 + num2:
    print ("Correct")
else:
    print ("Wrong")
```

```text
BEGIN
    SET num1 TO RANDOM(0, 10)
    SET num2 TO RANDOM(0, 10)

    SEND "What is {num1} + {num2}?" TO DISPLAY

    RECIEVE answer FROM (INTEGER) KEYBOARD

    IF answer = num1 + num2 THEN
        SEND "Correct" TO DISPLAY
    
    ELSE 
        SEND "Wrong" TO DISPLAY

    END IF
END

```

## Test

```python
total = 0
for i in range (0, 100):
    total += rain[i]

average = total / 100

days_above_average = 0

for i in range (0, 100):
    if rain[i] > average:
        days_above_average +=1
    
print(days_above_average)
```


```text
BEGIN
    SET total TO 0

    FOR i FROM 0 TO 99 DO
        SET total TO total + rain[i]
    END FOR

    SET average TO total / 100

    SET daysAboveAverage TO 0

    FOR i FROM 0 TO 99 DO
        IF rain[i] > average THEN
            SET daysAboveAverage TO daysAboveAverage + 1
        END IF
    END FOR

    SEND daysAboveAverage TO DISPLAY

END

```

## Function
Declare a function
```python
def add(num1, num2):
    answer = num1 + num2
    return answer
```

```text
FUNCTION add (num1, num2)

    BEGIN FUNCTION
        SET answer TO num1 + num2
        RETURN answer
    END FUNCTION
```

Call the function

```python
add(2,4)
```

```text
add (2,4)
```

```text
FUNCTION bubble_sort(arr)
    BEGIN FUNCTION
        SET n TO LENGTH(arr)

        FOR i FROM 0 TO n - 2 DO
            FOR j FROM 0 TO n - i - 2 DO
                IF arr[j] > arr[j + 1] THEN
                    SET temp TO arr[j]
                    SET arr[j] TO arr[j + 1]
                    SET arr[j + 1] TO temp
                END IF
            END FOR
        END FOR
    END FUNCTION

BEGIN
    SET arr TO [64, 34, 25, 12, 22, 11, 90]
    CALL bubble_sort(arr)
    SEND "Sorted array: ", arr TO DISPLAY
END
```

```text
FUNCTION linear_search(arr, target)
    BEGIN FUNCTION
        FOR i FROM 0 TO LENGTH(arr) - 1 DO
            IF arr[i] = target THEN
                RETURN i  // Return the index if found
            END IF
        END FOR
        RETURN -1  // Return -1 if not found
    END FUNCTION


BEGIN
    SET arr TO [10, 20, 30, 40, 50]
    SET target TO 30
    SET result TO CALL linear_search(arr, target)

    IF result != -1 THEN
        SEND "Element found at index ", result TO DISPLAY
    ELSE
        SEND "Element not found" TO DISPLAY
    END IF
END

```

```ps
BEGIN

    SEND "Enter the number of books bought: " TO DISPLAY
    RECEIVE books FROM (INTEGER) KEYBOARD

    WHILE books <= 0 DO
        SEND "Error: Number of books must be positive." TO DISPLAY
        SEND "Enter the number of books bought: " TO DISPLAY
        RECEIVE books FROM (INTEGER) KEYBOARD
    END WHILE

    SEND "Enter the total value of the order (in £): " TO DISPLAY
    RECEIVE orderValue FROM (REAL) KEYBOARD

    WHILE orderValue <= 0 DO
        SEND "Error: Order value must be positive." TO DISPLAY
        SEND "Enter the total value of the order (in £): " TO DISPLAY
        RECEIVE orderValue FROM (REAL) KEYBOARD
    END WHILE

    IF books >= 10 THEN
        SET voucher TO 15
    ELSE IF (books >= 5) AND (orderValue > 50) THEN
        SET voucher TO 5
    ELSE
        SET voucher TO 1
    END IF

    SEND "Your gift voucher is worth £" + voucher TO DISPLAY

END

```

```ps
BEGIN
    SEND "Enter the number of pages printed: " TO DISPLAY
    RECEIVE pages FROM (INTEGER) KEYBOARD

    WHILE pages <= 0 DO
        SEND "Error: Number of pages must be positive." TO DISPLAY
        SEND "Enter the number of pages printed: " TO DISPLAY
        RECEIVE pages FROM (INTEGER) KEYBOARD
    END WHILE

    SEND "Are the pages in colour? (YES/NO): " TO DISPLAY
    RECEIVE isColour FROM (STRING) KEYBOARD

    IF isColour = "YES" THEN
        SET cost TO pages * 7
    ELSE
        SET cost TO pages * 2
    END IF

    IF cost > 50 THEN
        SET cost TO 50
    END IF

    SEND "Total printing cost: ", cost, "p" TO DISPLAY
END

```