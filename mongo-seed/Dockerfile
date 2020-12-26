FROM mongo

COPY speakers.json /init.json

CMD mongoimport --host mongo --db reach-engine --collection speakers --type json --file /init.json --jsonArray