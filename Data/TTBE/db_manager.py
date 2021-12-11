from pymongo import MongoClient

def get_database():
    CONNECTION_STRING = "mongodb+srv://admin:admin@project1.cqzcd.mongodb.net/"
    client = MongoClient(CONNECTION_STRING)
    return client['EURUSD']

def get_items_from_date_range(date_start="2000-01-01", date_end="2023-01-01", temporality="1hour"):
    dbname = get_database()
    collection_name = dbname[temporality]
    response = collection_name.find({'_id': {"$gt":date_start, "$lt":date_end}})
    items_list=[]
    for i in response:
        items_list.append(i)
    return items_list

def insert_items(items_list=[], temporality="1hour"):
    dbname = get_database()
    collection_name = dbname[temporality]
    collection_name.insert_many(items_list)

# --------------------------------------------------
# TESTS:
# --------------------------------------------------
if __name__ == "__main__":    
    dbname = get_database()
    item_1 = {
    "_id" : "2022-11-05 21:45:00",
    "open" : "1.15722",
    "high" : "1.15743",
    "low" : "1.15634",
    "close" : "1.15634"
    }
    item_2 = {
    "_id" : "2022-10-05 21:45:00",
    "open" : "1.15722",
    "high" : "1.15743",
    "low" : "1.15634",
    "close" : "1.15634"
    }
    insert_items([item_1, item_2])
    response=get_items_from_date_range()
    for i in response:
        print(i)