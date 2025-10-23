# 🔤 Get Unicode Character

A simple web app built with **HTML, CSS, and JavaScript** that displays the **Unicode value** of any character entered by the user.

---

## 🚀 Features
- Enter any character to get its Unicode value instantly  
- Real-time result display  
- Clean and minimal UI  
- Works entirely in the browser — no backend needed  

---

## 💻 Technologies Used
- HTML  
- CSS  
- JavaScript  

---

## 🧠 How It Works
The JavaScript function captures the input character and uses the built-in `charCodeAt()` method to get its Unicode value, then displays it on the page.

---
const unicodeValue = inputValue.charCodeAt(0);

**Here’s what happens:**

- inputValue is the text the user enters in the input box.

- .charCodeAt(0) is a JavaScript built-in method that returns the Unicode value of the first character in a string.

- The (0) means the first character (because counting starts at 0).

### 🔢 Example Outputs

```js
'A'.charCodeAt(0);  // returns 65
'a'.charCodeAt(0);  // returns 97
'😊'.charCodeAt(0); // returns 55357 (part of the emoji’s Unicode)
