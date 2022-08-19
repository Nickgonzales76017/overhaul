<template>
  <div class="hello">
    <h1>{{ msg }}</h1>



  <div style="width: 100%;">
    <div
      v-for="item in items"
      :key="item._id"
      @click="itemClick(item)"
      style="height: 50px; width: 100%"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</div>
</template>

<script>




export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      db: undefined,
      items: [],
      query: undefined
    };
  },
  methods: {
    async itemClick(item) {
      console.log("itemClick", item);
    }
  },
  async mounted() {
    
   /*  const db = await createRxDatabase({
    name: 'exampledb',
    storage: getRxStorageMemory()
    });
    
 const myCollections = await db.addCollections({
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
    console.log(myCollections) */

  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
