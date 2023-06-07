# code-metrics-module

[![npm version](https://img.shields.io/npm/v/code-metrics.svg)](https://www.npmjs.com/package/code-metrics)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A code metrics library for analyzing the complexity and statistics of code files in various programming languages.

## Installation

```shell
npm install code-metrics-module
```
## Usage
```javascript
const calculateCodeMetrics = require('code-metrics');

const filePath = 'path/to/your/code/file';
const metrics = calculateCodeMetrics(filePath);

console.log(metrics);
```

| Language    | Tested |
| --------- | ----------- |
| JavaScript| ✅ Fully tested |
| PHP|❌ Not fully tested|
| Java|❌ Not fully tested|
| TypeScript|❌ Not fully tested|



## Functions

### calculateCodeMetrics(filePath)
Calculates the code metrics of a code file at the specified `filePath`.

`filePath` (string): The path to the code file.
#### Returns an object with the following properties:
`linesOfCode` (number): The total number of lines of code in the file.

`functions` (number): The total number of functions/methods defined in the file.

`complexity` (number): The complexity score of the code file.

`language` (string): The programming language of the code file.

`errors` (array): An array of error objects, if any parsing errors or 

#### unsupported language errors occur. Each error object has the following properties:
`type` (string): The type of the error (e.g., "Parsing Error", "Language Error").

`message` (string): The error message.

`line` (number): The line number where the error occurred.

`column` (number): The column number where the error occurred.

# Examples

## Example 1: Calculating Code Metrics

```javascript
const calculateCodeMetrics = require('code-metrics');

const filePath = 'path/to/your/code/file';
const metrics = calculateCodeMetrics(filePath);

console.log(metrics);
```
Output;
```yaml
{
  linesOfCode: 123,
  functions: 5,
  complexity: 10,
  language: 'JavaScript',
  errors: []
}
```

## Example 2: Handling Parsing Errors

```javascript
const calculateCodeMetrics = require('code-metrics');

const filePath = 'path/to/your/code/file';
const metrics = calculateCodeMetrics(filePath);

if (metrics.errors.length > 0) {
  console.log('Parsing errors occurred:');
  metrics.errors.forEach((error, index) => {
    console.log(`Error ${index + 1}:`);
    console.log('Type:', error.type);
    console.log('Message:', error.message);
    console.log('Line:', error.line);
    console.log('Column:', error.column);
  });
}
```
Output (if parsing errors occur):


```vbnet
Parsing errors occurred:
Error 1:
Type: Parsing Error
Message: Unexpected token '<'
Line: 1
Column: 1
```

