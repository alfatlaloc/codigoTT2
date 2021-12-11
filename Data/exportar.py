import pandas as pd
import requests
import json
import datetime

url = 'http://localhost:8080/'


def getDate(time_str):
    date_time_obj = datetime.datetime.strptime(time_str, '%Y.%m.%d %H:%M')
    # print('Date:', date_time_obj.isoformat()) #imprime la fecha en ISO
    return date_time_obj.isoformat()


val = input("Enter CSV name: ")
print("Reading: definitiveCSV/"+val+".csv")
df = pd.read_csv('definitiveCSV/'+val+'.csv')
print(df.head())
print("Select schema: \n 1.Month \n 2.Week \n 3.Day \n 4.Hour")
val = int(input("Enter option: "))

print(val)

if val == 1:
    print("Month Schema")
    url = url + 'Month'
elif val == 2:
    print("Week Schema")
    url = url + 'Week'
elif val == 3:
    print("Day Schema")
    url = url + 'Day'
else:
    print("Hour Schema")
    url = url + 'Hour'

    

for index, row in df.iterrows():
    EURUSD = {
        '_id': getDate(row['DATE'] + ' ' + row['HOUR']),
        'Open': row['OPEN'],
        'High': row['HIGH'],
        'Low': row['LOW'],
        'Close': row['CLOSE'],
    }
    print(EURUSD)
    r = requests.post(url=url, data=EURUSD)
    print(r.text)

    
