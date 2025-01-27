# Pandas and Charts: My Comprehensive Guide

## Table of Contents

1. Introduction to Pandas
   
2. Creating and Loading DataFrames
   
3. DataFrame Operations
   
4. Visualization with Charts
   - Pie Charts
   - Line Charts
  
5. Advanced Operations
   
6. Hands-On Example in Google Colab

---

## 1. Introduction to Pandas

Pandas is a powerful Python library for data manipulation and analysis. It provides data structures like Series (1-dimensional) and DataFrame (2-dimensional) for handling and analyzing structured data easily.

---

## 2. Creating and Loading DataFrames

### a. Creating DataFrames from Scratch
```python
import pandas as pd

# Creating a DataFrame from a dictionary
data = {
    'Name': ['Alice', 'Bob', 'Charlie'],
    'Age': [25, 30, 35],
    'Salary': [50000, 60000, 70000]
}
df = pd.DataFrame(data)
print(df)
```

### b. Loading DataFrames from Files
```python
# Loading a DataFrame from a CSV file
df = pd.read_csv('data.csv')

# Loading a DataFrame from an Excel file
df = pd.read_excel('data.xlsx')

# Previewing the first few rows
print(df.head())
```

---

## 3. DataFrame Operations

### a. Basic Operations
```python
# Viewing the structure of the DataFrame
print(df.info())

# Descriptive statistics
print(df.describe())

# Selecting specific columns
ages = df['Age']
print(ages)

# Filtering rows
over_30 = df[df['Age'] > 30]
print(over_30)

# Adding a new column
df['Tax'] = df['Salary'] * 0.2
print(df)
```

### b. Grouping and Aggregation
```python
# Grouping by a column and calculating the mean
grouped = df.groupby('Age').mean()
print(grouped)

# Aggregating multiple functions
grouped = df.groupby('Age').agg({'Salary': ['mean', 'sum'], 'Tax': 'sum'})
print(grouped)
```

### c. Handling Missing Data
```python
# Checking for missing values
print(df.isnull().sum())

# Filling missing values
df['Age'] = df['Age'].fillna(df['Age'].mean())

# Dropping rows with missing values
df = df.dropna()
print(df)
```

---

## 4. Visualization with Charts

### a. Pie Charts
```python
import matplotlib.pyplot as plt

# Data for the chart
chart_data = df['Salary']
labels = df['Name']

# Creating a pie chart
plt.figure(figsize=(6, 6))
plt.pie(chart_data, labels=labels, autopct='%1.1f%%')
plt.title('Salary Distribution')
plt.show()
```

### b. Line Charts
```python
# Creating a line chart
plt.figure(figsize=(8, 6))
plt.plot(df['Name'], df['Salary'], marker='o')
plt.title('Salary Trend')
plt.xlabel('Name')
plt.ylabel('Salary')
plt.grid(True)
plt.show()
```

---

## 5. Advanced Operations

### a. Merging DataFrames
```python
# Merging two DataFrames
data1 = {
    'ID': [1, 2, 3],
    'Name': ['Alice', 'Bob', 'Charlie']
}
data2 = {
    'ID': [1, 2, 3],
    'Department': ['HR', 'IT', 'Finance']
}
df1 = pd.DataFrame(data1)
df2 = pd.DataFrame(data2)

merged_df = pd.merge(df1, df2, on='ID')
print(merged_df)
```

### b. Pivot Tables
```python
# Creating a pivot table
pivot_table = df.pivot_table(values='Salary', index='Age', columns='Name', aggfunc='mean')
print(pivot_table)
```

---

## 6. Hands-On Example in Google Colab

### a. Google Colab Notebook
You can access the Colab notebook with all examples and code snippets here: [Pandas and Charts Guide](https://colab.research.google.com/drive/your-notebook-id)

### b. Python File
Download the Python file with all examples here: [pandas_charts_guide.py](https://your-link-here.com)

### c. Screenshots
Screenshots of the charts created:

![Pie Chart Example](example_pie_chart.png)

![Line Chart Example](example_line_chart.png)

---

## Conclusion
This guide serves as a foundational resource for working with Pandas and creating charts. By following the examples and experimenting, you can unlock the full potential of data analysis and visualization in Python.

For more in-depth exploration, refer to the [Pandas Documentation](https://pandas.pydata.org/docs/) and the [Matplotlib Documentation](https://matplotlib.org/stable/contents.html).