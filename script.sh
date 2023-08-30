#!/bin/bash
   
HTTP_CODE=$(curl -X GET  "http://10.0.0.2:3200/")
echo $HTTP_CODE
