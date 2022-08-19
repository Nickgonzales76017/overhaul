import {
    createRxDatabase
} from 'rxdb';
import {
    getRxStorageMemory
} from 'rxdb/plugins/memory';


class ClientDb {
    db;
    myCollections;
    constructor() {}
  
    async setupDb() {
      this.db = await createRxDatabase({
        name: 'exampledb',
        storage: getRxStorageMemory()
    });
    
    return this.db.resolve
    }
    async updatedb() {
        this.myCollections = await this.db.addCollections({
            items: {
              schema: {
              "title": "hero schema",
          "version": 0,
          "description": "describes a simple hero",
          "primaryKey": "name",
          "type": "object",
          "properties": {
              "name": {
                  "type": "string",
                  "maxLength": 100 // <- the primary key must have set maxLength
              },
              "color": {
                  "type": "string"
              },
              "healthpoints": {
                  "type": "number",
                  "minimum": 0,
                  "maximum": 100
              },
              "secret": {
                  "type": "string"
              },
              "birthyear": {
                  "type": "number",
                  "final": true,
                  "minimum": 1900,
                  "maximum": 2050
              },
              "skills": {
                  "type": "array",
                  "maxItems": 5,
                  "uniqueItems": true,
                  "items": {
                      "type": "object",
                      "properties": {
                          "name": {
                              "type": "string"
                          },
                          "damage": {
                              "type": "number"
                          }
                      }
                  }
              }
          },
          "required": [
              "name",
              "color"
          ],
         
            },
              statics: {},                          // (optional) ORM-functions for this collection
              methods: {},                          // (optional) ORM-functions for documents
              attachments: {},                      // (optional) ORM-functions for attachments
              options: {},                          // (optional) Custom parameters that might be used in plugins
              migrationStrategies: {},              // (optional)
              autoMigrate: true,                    // (optional) [default=true]
              cacheReplacementPolicy: function(){}, // (optional) custom cache replacement policy
            },
          });
          return this.myCollections
    }
  

  }
  
  export default new ClientDb();