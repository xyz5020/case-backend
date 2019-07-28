ls -1 *.json | sed 's/.json$//' | while read col; do
    mongoimport --host mongo --db casedb --collection $col < $col.json --jsonArray
done
