#!/bin/bash
SRC_ROOT=/home/ubuntu/dbs-carbon-credit

echo "Current git status ..."
cd $SRC_ROOT;
git status;


echo "Pulling from repo ..."
git pull;

#echo "npm install ..."
#echo " -- cd into $SRC_ROOT"
#cd $SRC_ROOT;
#npm install;
