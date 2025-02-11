// function formatHTML(html) {
//   let i = 0, indent = 0;
//   const formattedLines = [];
//   while (i < html.length) {
//     if (html[i] === '<') {
//       const tagStart = i;
//       while (i < html.length && html[i] !== '>') i++;
//       const tag = html.substring(tagStart, i + 1).trim();
//       if (tag.startsWith('</')) indent = Math.max(indent - 1, 0);
//       formattedLines.push("  ".repeat(indent) + tag);
//       if (!tag.startsWith('</') && !tag.endsWith('/>')) indent++;
//       i++;
//     } else {
//       const textStart = i;
//       while (i < html.length && html[i] !== '<') i++;
//       const text = html.substring(textStart, i).trim();
//       if (text) formattedLines.push("  ".repeat(indent) + text);
//     }
//   }
//   return formattedLines.join("\n");
// }
// const htmlString = "<html><body><div><p>Hello, World!</p><img src='image.png'/></div></body></html>";
// console.log(formatHTML(htmlString));



// let arr =[1,2,4,5,6,7]
// let k = 5;
//   function binary(arr){
//     let left = 0;
//     let right = arr.length-1;
//     while(left<=right){
//       let mid = Math.floor((left+right)/2);
//       if(arr[mid] === k){
//         return mid;
//       }else if(arr[mid]<k){
//         left = mid+1;
//       }else{
//         right = mid-1;
//       }
//     }
//     return -1;
   
//   }


// console.log(binary(arr,k));





function formatHTML(html) {
  let indent = 0, lastIndex = 0;
  return html.replace(/<\/?[^>]+>/g, (match, offset) => {
    let text = html.slice(lastIndex, offset).trim();
    let formatted = (text ? "  ".repeat(indent) + text + "\n" : "") +
                    (match.startsWith("</") ? "  ".repeat(--indent) : "  ".repeat(indent++)) + match;
    lastIndex = offset + match.length;
    return formatted + "\n";
  }).trim();
}

const htmlString = "<html><body><div><p>Hello, World!</p><img src='image.png'/></div></body></html>";
console.log(formatHTML(htmlString));
