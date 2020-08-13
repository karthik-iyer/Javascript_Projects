export { testarrays };

let testarrays = () => {
    let marks = [9,10,1];
 
    console.log(marks);
    
    marks.shift();
    
    console.log(marks);
    
    marks.unshift(9,10,11);
    
    console.log(marks);
    
    marks.push(11);
 
    console.log(marks);
 }