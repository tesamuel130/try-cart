var addItemId = 0

function addtocart(item){
    addItemId += 1;

    //create a div for the card item
    var selectItem = document.createElement("div")
    selectItem.classList.add('cartimg');
    selectItem.setAttribute('id', addItemId)

    //create an img element
    var img = document.createElement('img')
    img.setAttribute('src', item.children[0].currentSrc)

    // Create a div element for the title and set its text content
    var title = document.createElement('div')
    title.innerText = item.children[1].innerText;

    // Create a div element for the label and set its text content
    var lable = document.createElement('div')
    lable.innerText = item.children[2].children[0].innerText;

    // Create a span element for the select value
    var select = document.createElement('span')
    select.innerText = item.children[2].children[1].value;


    lable.append(select)
    
    var cartItems = document.getElementById('title');
    selectItem.append(img)
    selectItem.append(title)
    selectItem.append(lable)
    cartItems.append(selectItem);

}