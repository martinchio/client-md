export default `
# Sample Markdown

## Table of Contents
1. [Introduction](#introduction)
2. [Headers](#headers)
3. [Emphasis](#emphasis)
4. [Lists](#lists)
5. [Links](#links)
6. [Images](#images)
7. [Code](#code)
8. [Tables](#tables)
9. [Blockquotes](#blockquotes)
10. [Horizontal Line](#horizontal-line)

### Introduction
This is a sample markdown to demonstrate its capabilities.

### Headers
# H1
## H2
### H3
#### H4
##### H5
###### H6

### Emphasis
*This text will be italic.*  
_This will also be italic._

**This text will be bold.**  
__This will also be bold.__

_You **can** combine them._

### Lists
#### Unordered
* Item 1
* Item 2
  * Item 2a
  * Item 2b

#### Ordered
1. Item 1
2. Item 2
3. Item 3
   1. Item 3a
   2. Item 3b

### Links
[Visit GitHub!](https://www.github.com)

### Images
![Marked](https://marked.js.org/img/logo-black.svg)

### Code

Here's a simple Javascript snippet:

\`\`\`javascript
function greet(name) {
  console.log(\`Hello, \${name}!\`);
}

greet("Markdown Reader");
\`\`\`

### Tables
| Heading 1 | Heading 2 |
|-----------|-----------|
| row1col1  | row1col2  |
| row2col1  | row2col2  |

### Blockquotes
> This is a quote.

  
### Horizontal Line

---

Hello world
`;
