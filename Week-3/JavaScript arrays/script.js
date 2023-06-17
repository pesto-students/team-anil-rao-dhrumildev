// Put your solution here
const divideArray = (nums) => {

    if (!nums ?.length) {
        return { message: "Please provide a valid and non-empty array." }
    }

    let evenNums = []
    let oddNums = []

    try {

        //by doing below we check that number is divisible by 2 then say it even else odd
        for (let n in nums) {

            if (nums[n] != 0) {
                if ((nums[n] % 2 == 0) && nums[n] != 0) {
                    evenNums.push(nums[n])
                } else {
                    oddNums.push(nums[n])
                }
            }

        }

        evenNums.sort()
        oddNums.sort()

        console.log("Even numbers:")
        if (!evenNums.length) {
            console.log("None")

        } else {
            evenNums.forEach(e => {
                console.log(e)
            })
        }

        console.log("Odd numbers:")
        if (!oddNums.length) {
            console.log("None")

        } else {
            oddNums.forEach(e => {
                console.log(e)
            })
        }



    } catch (error) {
        return { "message": error }
    }
}