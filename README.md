# directory-to-mongo
searches for csv files in a directory, imports them to mongodb with collectionname as per their filenames

** to run

setup your database config in the config/env/development.js file
then goto terminal and run -

node updater.js <directorypath-to-csvfiles>

for example
node updater.js /home/lightbringer/Desktop/incture/recruitment/NaukriData
