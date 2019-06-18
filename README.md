# Serverless Template Function Calls Library

This package is a collection of useful functions for the usage of the [serverless template function calls plugin](https://www.npmjs.com/package/serverless-template-function-calls) for the [serverless](https://serverless.com) framework.

## Functions

<dl>
<dt><a href="#replaceAll">replaceAll(str, key, value)</a> ⇒ <code>string</code></dt>
<dd><p>replaces all occurrences of key in the string by the value</p>
</dd>
<dt><a href="#replaceVars">replaceVars(str, vars)</a> ⇒ <code>string</code></dt>
<dd><p>replaces all occurrences of vars keys in the string by the values of vars</p>
</dd>
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
<dd><p>substitutes keys of vars in the keys and values of the content recursively with the values of vars</p>
</dd>
<dt><a href="#mapSubstitute">mapSubstitute(options)</a> ⇒ <code>Array</code></dt>
<dd><p>returns each possible substitution by using one element of the varsArray elements as an array</p>
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

<a name="replaceAll"></a>

## replaceAll(str, key, value) ⇒ <code>string</code>
replaces all occurrences of key in the string by the value

**Kind**: global function  

| Param | Type |
| --- | --- |
| str | <code>string</code> | 
| key | <code>string</code> | 
| value | <code>string</code> | 

<a name="replaceVars"></a>

## replaceVars(str, vars) ⇒ <code>string</code>
replaces all occurrences of vars keys in the string by the values of vars

**Kind**: global function  

| Param | Type |
| --- | --- |
| str | <code>string</code> | 
| vars | <code>Object</code> | 

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
substitutes keys of vars in the keys and values of the content recursively with the values of vars

**Kind**: global function  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.vars | <code>String</code> | 
| options.content | <code>\*</code> | 

<a name="mapSubstitute"></a>

## mapSubstitute(options) ⇒ <code>Array</code>
returns each possible substitution by using one element of the varsArray elements as an array

**Kind**: global function  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.varsArray | <code>Object</code> | 
| options.content | <code>\*</code> | 

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
recursively goes through all strings values in content andreplaces occurrences of keys of vars with the values of vars

**Kind**: global function  

| Param | Type |
| --- | --- |
| options.vars | <code>Object</code> | 
| options.content | <code>\*</code> | 

<a name="replaceValues"></a>

## replaceValues() ⇒ <code>\*</code>
recursively goes through all strings values in content andreplaces them with the value if they match a key in vars

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

