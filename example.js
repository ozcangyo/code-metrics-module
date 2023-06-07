function formatMetrics(metrics) {
    console.log('Language:', metrics.language);
    console.log('Lines of code:', metrics.linesOfCode);
    console.log('Number of functions:', metrics.functions);
    console.log('Complexity:', metrics.complexity);
  
    console.log('\nErrors:');
    if (metrics.errors.length === 0) {
      console.log('No errors found.');
    } else {
      metrics.errors.forEach((error, index) => {
        console.log(`\nError ${index + 1}:`);
        console.log('Type:', error.type);
        console.log('Message:', error.message);
        console.log('Line:', error.line);
        console.log('Column:', error.column);
      });
    }
  }
  
  const calculateCodeMetrics = require('code-metrics-module');
  
  const filePath = 'testpath/test.js';
  const metrics = calculateCodeMetrics(filePath);
  
  formatMetrics(metrics);
  