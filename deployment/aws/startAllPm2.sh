#!/bin/bash


echo "Current pm2 services status .."
pm2 list


echo "Start all pm2 services..."
pm2 start all

