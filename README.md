# Serverless Template Function Calls Libary

This package is a collection of useful functions for the usage of the [serverless template function calls plugin](https://www.npmjs.com/package/serverless-template-function-calls) for the [serverless](https://serverless.com) framework.

## Functions

<dl>
<dt><a href="#toKebabCase">toKebabCase(str)</a> ⇒ <code>String</code></dt>
<dd><p>converts string to kebab case</p>
</dd>
<dt><a href="#isObject">isObject(val)</a> ⇒ <code>boolean</code></dt>
<dd><p>checks whether val is an object</p>
</dd>
<dt><a href="#shallowCopy">shallowCopy(val)</a> ⇒ <code>*</code></dt>
<dd><p>create shallow copy</p>
</dd>
<dt><a href="#copy">copy(val)</a> ⇒ <code>*</code></dt>
<dd><p>create deep copy</p>
</dd>
<dt><a href="#setCallDel">setCallDel(element, func, props)</a></dt>
<dd><p>sets properties on element, calls the function on the element and resets properties on element to the previous values</p>
</dd>
<dt><a href="#mergeArrays">mergeArrays(superArray)</a> ⇒ <code>Array</code></dt>
<dd><p>merges elements of multiple arrays into single array</p>
</dd>
<dt><a href="#mergeProps">mergeProps(arr)</a> ⇒ <code>Object</code></dt>
<dd><p>merges properties ignoring ones with double underscores of objects in array into single object</p>
</dd>
<dt><a href="#substitute">substitute(options)</a> ⇒ <code>*</code></dt>
<dd><p>substitutes string variable in the keys and values of the content recursively with a value</p>
</dd>
<dt><a href="#mapSubstitute">mapSubstitute(options)</a> ⇒ <code>*</code></dt>
<dd><p>substitutes string variable in the keys and values of the content recursively with multiple values and returns
each possible substitution in an array</p>
</dd>
<dt><a href="#insertAwsResourceNames">insertAwsResourceNames()</a> ⇒ <code>*</code></dt>
<dd><p>inserts auto generated aws resource names if none are already set,
these are generated by concatenating the prefix and the logic resource name converted to by
the converter which defaults to a kebab case converter. also note that names are also generated
for inline policy for aws roles</p>
</dd>
<dt><a href="#capitalizeString">capitalizeString(str)</a> ⇒ <code>String</code></dt>
<dd><p>capitalize string</p>
</dd>
<dt><a href="#concatStrings">concatStrings(arr)</a> ⇒ <code>String</code></dt>
<dd><p>concatenates strings</p>
</dd>
<dt><a href="#replaceStrings">replaceStrings()</a> ⇒ <code>*</code></dt>
<dd><p>recursively goes through all strings values in content and
replaces occurrences of keys of vars with the values of vars</p>
</dd>
<dt><a href="#replaceValues">replaceValues()</a> ⇒ <code>*</code></dt>
<dd><p>recursively goes through all strings values in content and
replaces them with the value if they match a key in vars</p>
</dd>
<dt><a href="#file">file(path)</a> ⇒ <code>string</code></dt>
<dd><p>reads string contents of a file</p>
</dd>
<dt><a href="#unpack">unpack(arr)</a> ⇒ <code>Object</code></dt>
<dd><p>extracts objects of an array and adds their props to the siblings of the function call</p>
</dd>
</dl>

<a name="toKebabCase"></a>

## toKebabCase(str) ⇒ <code>String</code>
converts string to kebab case

**Kind**: global function  

| Param | Type |
| --- | --- |
| str | <code>String</code> | 

<a name="isObject"></a>

## isObject(val) ⇒ <code>boolean</code>
checks whether val is an object

**Kind**: global function  

| Param | Type |
| --- | --- |
| val | <code>\*</code> | 

<a name="shallowCopy"></a>

## shallowCopy(val) ⇒ <code>\*</code>
create shallow copy

**Kind**: global function  

| Param | Type |
| --- | --- |
| val | <code>\*</code> | 

<a name="copy"></a>

## copy(val) ⇒ <code>\*</code>
create deep copy

**Kind**: global function  

| Param | Type |
| --- | --- |
| val | <code>\*</code> | 

<a name="setCallDel"></a>

## setCallDel(element, func, props)
sets properties on element, calls the function on the element and resets properties on element to the previous values

**Kind**: global function  

| Param | Type |
| --- | --- |
| element | <code>\*</code> | 
| func | <code>function</code> | 
| props | <code>Object</code> | 

<a name="mergeArrays"></a>

## mergeArrays(superArray) ⇒ <code>Array</code>
merges elements of multiple arrays into single array

**Kind**: global function  

| Param | Type |
| --- | --- |
| superArray | <code>Array.&lt;Array&gt;</code> | 

<a name="mergeProps"></a>

## mergeProps(arr) ⇒ <code>Object</code>
merges properties ignoring ones with double underscores of objects in array into single object

**Kind**: global function  
**Throws**:

- <code>Error</code> properties are not be specified multiple times


| Param | Type |
| --- | --- |
| arr | <code>Array.&lt;Object&gt;</code> | 

<a name="substitute"></a>

## substitute(options) ⇒ <code>\*</code>
substitutes string variable in the keys and values of the content recursively with a value

**Kind**: global function  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.variable | <code>String</code> | 
| options.value | <code>String</code> | 
| options.content | <code>\*</code> | 

<a name="mapSubstitute"></a>

## mapSubstitute(options) ⇒ <code>\*</code>
substitutes string variable in the keys and values of the content recursively with multiple values and returns

**Kind**: global function  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.variable | <code>String</code> | 
| options.values | <code>Array.&lt;String&gt;</code> | 
| options.content | <code>\*</code> | 

<a name="insertAwsResourceNames"></a>

## insertAwsResourceNames() ⇒ <code>\*</code>
inserts auto generated aws resource names if none are already set,

**Kind**: global function  

| Param | Type | Default |
| --- | --- | --- |
| options.content | <code>\*</code> |  | 
| options.prefix | <code>String</code> |  | 
| [options.converter] | <code>function</code> | <code>toKebabCase</code> | 

<a name="capitalizeString"></a>

## capitalizeString(str) ⇒ <code>String</code>
capitalize string

**Kind**: global function  

| Param | Type |
| --- | --- |
| str | <code>String</code> | 

<a name="concatStrings"></a>

## concatStrings(arr) ⇒ <code>String</code>
concatenates strings

**Kind**: global function  

| Param | Type |
| --- | --- |
| arr | <code>Array.&lt;String&gt;</code> | 

<a name="replaceStrings"></a>

## replaceStrings() ⇒ <code>\*</code>
recursively goes through all strings values in content and

**Kind**: global function  

| Param | Type |
| --- | --- |
| options.vars | <code>Object</code> | 
| options.content | <code>\*</code> | 

<a name="replaceValues"></a>

## replaceValues() ⇒ <code>\*</code>
recursively goes through all strings values in content and

**Kind**: global function  
**Returns**: <code>\*</code> - - replaced content  

| Param | Type |
| --- | --- |
| options.vars | <code>Object</code> | 
| options.content | <code>\*</code> | 

<a name="file"></a>

## file(path) ⇒ <code>string</code>
reads string contents of a file

**Kind**: global function  

| Param |
| --- |
| path | 

<a name="unpack"></a>

## unpack(arr) ⇒ <code>Object</code>
extracts objects of an array and adds their props to the siblings of the function call

**Kind**: global function  

| Param | Type |
| --- | --- |
| arr | <code>Array.&lt;Object&gt;</code> | 
