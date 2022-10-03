const allGroupRef = document.querySelectorAll(".item")
console.log("Number of categories:", allGroupRef.length);

for (let i=0; i < allGroupRef.length; i+=1) {
    const listRef = document.querySelectorAll(".item ul")[i]
    // console.log(listRef);
    const h2Ref = document.querySelectorAll('h2')
    console.log('Category: ', h2Ref[i].textContent);
    
    const elementsOfArray = listRef.querySelectorAll('li')
    console.log('Elements:', elementsOfArray.length);
}
