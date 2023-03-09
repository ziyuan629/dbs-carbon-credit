#!/bin/bash

echo "Current Server ports ..."
nmap localhost


echo "All Listening ports"
lsof -i -P -n | grep LISTEN