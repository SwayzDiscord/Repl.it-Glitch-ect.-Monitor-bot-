const mongoose = require('mongoose');
require ('dotenv').config();

module.exports = {
  
      useNewParser: true,
      useUnifiedTopology: true,
      autoIndex: false,
      poolSize: 5,
      connectTimeoutMS: 10000,
      family: 4
      
    };
    
    mongoose.connect(process.env.mongo_url);
    mongoose.set('useFindAndModify', false);
    mongoose.Promise = global.Promise;
    
    mongoose.connection('connected', () => {

    })
      
    }
}

}

