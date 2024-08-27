//updated from code in the binary-search-22dcolli repository, really the only difference is shorten middle syntax to mid and realized I didn't need the let middle on line 7
//same credit as before goes to replit ai IDE for help with Math.floor
function binarySearch(list, element) {

    let first = 0;
    let last = list.length - 1;
    

    while (first <= last)
    {
        let mid = Math.floor((first + last) / 2);

        if (list[mid] == element)
        {
            let index;
            for(let i = mid;list[i] == element; i--)
            {
                if(list[i] == element)
                {
                    index = i
                }
            }
            return index;
        }
        else
        {
            if (element < list[mid])
            {
                last = mid - 1;
            }
            else
            {
                first = mid + 1;
            }
        }
    }
    return -1;
}

//testList = [1,2,3,4,5,6,7]
//testElement = 7
//console.log(testList)
//console.log(binarySearch(testList,testElement))
