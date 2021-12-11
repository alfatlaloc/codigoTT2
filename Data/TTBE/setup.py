from datetime import datetime
import pandas as pd
import sys

from db_manager import insert_items


list_of_arguments = sys.argv
file_name=list_of_arguments[1]

df = pd.read_csv(f"./{file_name}.csv", 
                        sep=",", 
                        header=0, 
                        # names=["date", "hour", "open", "high", "low", "close", "volume"], 
                        # nrows=20)
)

items_list=[]

for row in df.values:
    dt=datetime.strptime(f"{row[0]} {row[1]}", "%Y.%m.%d %H:%M")
    item={}
    item['_id']=str(dt)
    item['open']=row[2]
    item['high']=row[3]
    item['low']=row[4]
    item['close']=row[5]
    items_list.append(item)

if(file_name=="EURUSD1440"):
    temporality="1day"
else:
    temporality="1hour"

insert_items(items_list, temporality)