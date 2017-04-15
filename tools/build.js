/**
 * Created by BlisS on 26/03/17.
 */
// allowinf console calls below since this is a build file
/*eslint-disable no-console */

import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';


process.env.NODE_ENV = 'production'; // this assures Babel dev config (for hot reloading)

console.log('Generando archivos para producción espera...'.bold.blue);

webpack(webpackConfig).run((err, stats) =>{
  if(err){ //fatal error? stop here
    console.log(err.bold.red);
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors){
    return jsonStats.errors.map(error => console.log(error.red));
  }

  if (jsonStats.hasWarnings){
    console.log('Webpack generó las siguientes advertencias: '.bold.yellow);
    jsonStats.warnings.map(warning => console.log(warning.yellow));
  }

  console.log(`Webpack stats ${stats}`);

  //if we got this far, the build succeeded.
  console.log('Listo! tu app ahora vive en docs');

  return 0;

});
