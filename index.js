const fs = require('fs');
const path = require('path');
const esprima = require('esprima');

function getFileExtension(file) {
  return path.extname(file).toLowerCase().slice(1);
}

function calculateCodeMetrics(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const extension = getFileExtension(filePath);

  const languageMap = {
    php: 'PHP',
    html: 'HTML',
    js: 'JavaScript',
    ts: 'TypeScript',
    java: 'Java'
    // Diğer desteklenen dilleri buraya ekleyebilirsiniz
  };

  const metrics = {
    linesOfCode: 0,
    functions: 0,
    complexity: 0,
    language: languageMap[extension] || 'Unknown',
    errors: []
  };

  try {
    if (extension === 'js' || extension === 'ts' || extension === 'php' || extension === 'java') {
      let ast;
      if (extension === 'php') {
        ast = esprima.parseScript(fileContent, { loc: true, tokens: true, parser: { php: true } });
      } else {
        ast = esprima.parseScript(fileContent, { loc: true, tokens: true });
      }

      function traverse(node) {
        if (node.type === 'FunctionDeclaration' || node.type === 'FunctionExpression') {
          metrics.functions++;
        }

        if (node.type === 'IfStatement' || node.type === 'WhileStatement') {
          metrics.complexity++;
        }

        if (node.loc) {
          metrics.linesOfCode += node.loc.end.line - node.loc.start.line + 1;
        }

        for (const key in node) {
          if (node.hasOwnProperty(key) && typeof node[key] === 'object') {
            traverse(node[key]);
          }
        }
      }

      traverse(ast);
    } else {
      metrics.errors.push({
        type: 'Language Error',
        message: 'Unsupported language',
        line: 0,
        column: 0
      });
    }
  } catch (error) {
    metrics.errors.push({
      type: 'Parsing Error',
      message: error.description || error.message,
      line: error.lineNumber,
      column: error.column
    });
  }

  return metrics;
}

module.exports = calculateCodeMetrics;
