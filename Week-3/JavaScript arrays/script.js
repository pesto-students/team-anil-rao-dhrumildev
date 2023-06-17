// Put your solution here
const divideArray = (nums) => {

    if (!nums ?.length) {
        return { message: "Please provide a valid and non-empty array." }
    }

    let consoleStmtPrinted = false
    let counter = 0

    try {
        //sorting the array first
        nums.sort()

        //by doing below we check that number is divisible by 2 then say it even else odd

        for (let n in nums) {
            if (!consoleStmtPrinted) {
                console.log("Even numbers:")
                consoleStmtPrinted = true
            }

            if ((nums[n] % 2 == 0) && nums[n] != 0) {
                counter++
                console.log(nums[n])
            }
        }
        if (counter == 0) console.log("None")

        consoleStmtPrinted = false
        counter = 0

        for (let m in nums) {
            if (!consoleStmtPrinted) {
                console.log("Odd numbers:")
                consoleStmtPrinted = true
            }

            if ((nums[m] % 2 != 0) && nums[m] != 0) {
                counter++

                console.log(nums[m])
            }
        }
        if (counter == 0) console.log("None")

    } catch (error) {
        return {"message": error }
    }
}