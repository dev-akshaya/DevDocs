### forEach

```JS
const language = ["JavaScript", "React", "Redux"];

language.forEach(function (lang){
  console.log(lang);
})

language.forEach(function(lang, index){
  console.log(`${index} -> ${lang}`);
})

// JavaScript
// React
// Redux

// 0 -> JavaScript
// 1 -> React
// 2 -> Redux

```

```JS
const newArr = [10, 20, 30, 40, 50];
newArr.forEach(function(val, index, arr){
    console.log(arr[index] + 100);
});

// 110
// 120
// 130
// 140
// 150
```