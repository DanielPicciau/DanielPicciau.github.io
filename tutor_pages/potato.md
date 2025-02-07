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