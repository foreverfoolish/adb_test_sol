from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import json, logging, os
from pymongo import MongoClient

mongo_uri = 'mongodb://' + os.environ["MONGO_HOST"] + ':' + os.environ["MONGO_PORT"]
db = MongoClient(mongo_uri)['test_db']
collection1 = db["todolist"]
class TodoListView(APIView):

    def get(self, request):
        # Implement this method - return all todo items from db instance above.
        result=[]         #declare an empty array
        todo = collection1.find({})         #iterate over the entire collection and return all the key value pairs
        for r in todo:                      #iterate over todo and make a list of all the "name" field values
            result.append(r["name"])
        return Response(result, status=status.HTTP_200_OK) #return result
        
    def post(self, request):
        # Implement this method - accept a todo item in a mongo collection, persist it using db instance above.
        collection1.insert(request.data)            #insert request data in the collection1
        return Response(request.data, status=status.HTTP_200_OK)

