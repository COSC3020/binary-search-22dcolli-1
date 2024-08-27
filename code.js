//updated code(binary-search-22dcolli) from last semester, simplified because I noticed I could exclude the old variable "index" alltogether.
//credit to replit ai IDE as before
function binarySearch(list, element) {

    let first = 0;
    let last = list.length - 1;
    

    while (first <= last)
    {
        let mid = Math.floor((first + last) / 2);

        if (list[mid] == element)
        {
            for(let i = mid;list[i] == element; i--)
            {
                if(list[i] == element)
                {
                    return i
                }
            }
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
