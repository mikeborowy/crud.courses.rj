/**
 * "*.dev.js" files are used for development
 * --------------------------------------------
 * "*.dist.js" files are used for production/ 
 * distribution of final version
 * -------------------------------------------
 * Dynamic imports aren't supported by EC6, 
 * so use 'require' instead if 'import'
 */
if(process.env.NODE_ENV === 'production'){
    module.exports = require('./configureStore.dist') 
}
else
{
    module.exports = require('./configureStore.dev') 
}