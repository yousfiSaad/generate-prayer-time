
# Generate prayer time

## Introduction

Generate pairs of timestamp and prayer label for a given location

## Usage
```
npm i
node generateData.mjs <number of days to generate> <coordinates without spaces or quotes>
```
This repo is created to generate data for [ptui](https://github.com/yousfiSaad/ptui)

### Example
```
node generateData.mjs 366 33.6082243,-7.6324728 > ~/Documents/prayer_times.txt
```

This examples stores the times of the next 366 days on in the file `~/Documents/prayer_times.txt`, the time for yesterday is also included
