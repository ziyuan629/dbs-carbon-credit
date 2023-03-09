#!/bin/bash

echo "Current pm2 services status .."
pm2 list


echo "Stopping all pm2 services..."
pm2 stop all
